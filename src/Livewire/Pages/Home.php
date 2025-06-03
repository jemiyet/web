<?php

namespace Jemiyet\Web\Livewire\Pages;

use Livewire\Component;
use Jemiyet\Posts\Models\Posts;
use Jemiyet\Posts\Models\PostLikes;
use Jemiyet\Stories\Models\Stories;
use Jemiyet\Core\Models\User;
use Jemiyet\Core\Models\Contacts;
use Jemiyet\Core\Enums\UserSettings;
use Jemiyet\Core\Helpers\CoreBaseFunctions;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Livewire\WithPagination;
use Illuminate\Contracts\Pagination\LengthAwarePaginator as LengthAwarePaginatorContract;
use Illuminate\Contracts\Pagination\Paginator as PaginatorContract;
use Illuminate\Support\Collection;
use Illuminate\Pagination\Paginator;

class Home extends Component
{
    use WithPagination;

    public $newPostContent = '';
    public $initialLoading = true;
    public $loading = false;
    /** Indicates if another page of posts exists */
    public bool $hasMorePosts = false;
    public $showCommentsModal = false;
    public $selectedPostId = null;
    
    /**
     * Stores the paginated collection of the *currently fetched page* of posts.
     * @var \Illuminate\Contracts\Pagination\Paginator|null
     */
    protected ?PaginatorContract $currentPagePaginator = null;
    
    /**
     * Holds all loaded post models across Livewire requests.
     * Declared public so Livewire will automatically serialize / rehydrate it.
     * @var \Illuminate\Support\Collection
     */
    public Collection $allLoadedPostModels;

    public Collection $storyUsers;
    public Collection $suggestedUsers;

    protected $layout = 'jemiyet/web::layouts.app';
    protected $listeners = ['postCreatedSuccessfully' => 'handlePostCreation'];

    protected $paginationTheme = 'tailwind'; // Or your preferred theme

    public function mount()
    {
        $this->allLoadedPostModels = collect(); 
        $this->storyUsers = collect();
        $this->suggestedUsers = collect();
        $this->loadInitialPosts();
    }


    public function getPostsForDisplayProperty(): array
    {
        if ($this->allLoadedPostModels->isEmpty()) {
            return [];
        }

        return $this->allLoadedPostModels->map(function (Posts $post) { // $post is already a model instance
            return $this->transformPostData($post);
        })->filter()->values()->toArray();
    }

    public function loadInitialPosts()
    {
        $this->initialLoading = true;
        // Assuming Auth::check() is true due to route middleware
        $this->resetPage('page'); 
        $this->allLoadedPostModels = collect(); // Clear previous

        $this->fetchPosts(); // Fetches page 1 into $this->currentPagePaginator

        $initialItemsCount = 0;
        if ($this->currentPagePaginator instanceof \Illuminate\Contracts\Pagination\LengthAwarePaginator) {
            /** @var \Illuminate\Contracts\Pagination\LengthAwarePaginator $paginator */
            $paginator = $this->currentPagePaginator;
            if ($paginator->count() > 0) {
                $this->allLoadedPostModels = collect($paginator->items());
                $initialItemsCount = $this->allLoadedPostModels->count(); 
            }
        }
        
        $this->fetchStoryUsers();
        $this->fetchSuggestedUsers();
        $this->initialLoading = false;
    }

    protected function fetchPosts()
    {
        $this->loading = true;
        $currentUserId = Auth::id();
        $currentPage = $this->getPage('page'); 

        $this->currentPagePaginator = Posts::with('user')
            ->withCount(['likes', 'comments'])
            ->withExists(['likes as is_liked' => function ($q) use ($currentUserId) {
                $q->where('user_id', $currentUserId);
            }])
            ->where('user_id', '!=', $currentUserId) // Exclude current user posts
            ->latest()
            ->simplePaginate(10, ['*'], 'page', $currentPage);
        // If this is a re‑hydrated request, $allLoadedPostModels may have been lost
        // because it’s a protected (non‑persisted) property.  Re‑seed it from the freshly
        // fetched paginator so the UI doesn’t flash “No posts yet”.
        if (!$this->allLoadedPostModels || $this->allLoadedPostModels->isEmpty()) {
            $this->allLoadedPostModels = collect($this->currentPagePaginator->items());
        }
        // Update reactive state for Alpine/Livewire entanglement
        $this->hasMorePosts = $this->currentPagePaginator
            ? $this->currentPagePaginator->hasMorePages()
            : false;
        $this->loading = false;

        $currentPageItemCount = 0; // Renamed for clarity: items on the *current fetched page*
        $totalAvailableItems = 0; // Renamed for clarity: total items available across all potential pages
        // No longer assign $totalAvailableItems, as simplePaginate does not provide total count.
        if ($this->currentPagePaginator instanceof LengthAwarePaginatorContract) {
            /** @var LengthAwarePaginatorContract $paginator */
            $paginator = $this->currentPagePaginator;
            $currentPageItemCount = $paginator->count();
        }
    }

    protected function fetchStoryUsers()
    {
        // Assuming Auth::check() is true due to route middleware
        $currentUserId = Auth::id();
        
        // Simple approach: show all public stories except current user
        $showOnlyFollowings = false; // Simplified for now

        // Base query for stories - exclude current user
        $storiesQuery = Stories::with('user')
            ->where('created_at', '>=', now()->subMonths(6))
            ->where('done_processing', true)
            ->where('user_id', '!=', $currentUserId);

        if ($showOnlyFollowings) {
            // Get following users
            $followingIds = Contacts::where('user_id', $currentUserId)->pluck('contact_id')->toArray();
            $allowedUserIds = array_merge([$currentUserId], $followingIds);
            
            $storiesQuery->whereIn('user_id', $allowedUserIds);
                 } else {
             // Include only public stories (current user already excluded above)
             $storiesQuery->where('visibility', 1);
         }

        // Get stories and group by user
        $stories = $storiesQuery->orderBy('created_at', 'desc')->get();
        $storiesByUser = $stories->groupBy('user_id');

        // Since we excluded current user, all stories are from others
        $otherStories = $storiesByUser;

        // Randomize first 6 other users if there are more than 6
        if ($otherStories->count() > 6) {
            $randomizedUsers = $otherStories->keys()->random(min(6, $otherStories->count()));
            $remainingUsers = $otherStories->keys()->diff($randomizedUsers);
            $orderedUserIds = $randomizedUsers->concat($remainingUsers);
            $otherStories = $orderedUserIds->mapWithKeys(function ($userId) use ($otherStories) {
                return [$userId => $otherStories[$userId]];
            });
        }

        // Use other stories directly (no user stories since we excluded current user)
        $finalStories = $otherStories;

        // Transform to expected format
        $this->storyUsers = $finalStories->take(15)->map(function ($userStories, $userId) {
            $user = $userStories->first()->user;
            return [
                'id' => $user->id,
                'name' => $user->fullname ?? $user->name,
                'username' => $user->username ?? ('user' . $user->id),
                'avatar' => $user->avatar_url ?? ($user->profile_pic ? CoreBaseFunctions::generateCloudFrontSignedUrl(config('app.profile_pic_root') . $user->profile_pic) : '/api/placeholder/40/40'),
                'stories' => $userStories->map(function (Stories $story) {
                    $storyUrl = null;
                    try {
                        $storyUrl = CoreBaseFunctions::generateCloudFrontSignedUrl(config('app.shared_' . $story->story_type . '_root') . $story->filename);
                    } catch (\Exception $e) {
                    }
                    return [
                        'id' => $story->id,
                        'type' => $story->story_type,
                        'url' => $storyUrl,
                        'created_at' => $story->created_at->toISOString(),
                    ];
                })->filter(function ($story) {
                    return !empty($story['url']);
                }),
            ];
        })->filter(function ($storyUser) {
            return $storyUser['stories']->isNotEmpty();
        });
    }

    protected function fetchSuggestedUsers()
    {
        // Assuming Auth::check() is true due to route middleware
        $currentUserId = Auth::id();
        $followingIds = Contacts::where('user_id', $currentUserId)->pluck('contact_id')->all();
        $excludeIds = array_merge([$currentUserId], $followingIds);

        $suggested = User::whereNotIn('id', $excludeIds)
                        ->inRandomOrder() // Simple suggestion logic
                        ->take(5)         // Limit suggestions
                        ->get();

        $this->suggestedUsers = $suggested->map(function (User $user) use ($currentUserId, $followingIds) {
            return [
                'id' => $user->id,
                'name' => $user->fullname ?? $user->name,
                'username' => $user->username ?? ('user' . $user->id), // Fallback username
                'username_display' => '@' . ($user->username ?? ('user' . $user->id)),
                'avatar' => $user->avatar_url ?? ($user->profile_pic ? CoreBaseFunctions::generateCloudFrontSignedUrl(config('app.profile_pic_root') . $user->profile_pic) : '/api/placeholder/40/40'),
                'isFollowing' => in_array($user->id, $followingIds), // Check if current user is following this suggestion
            ];
        });
    }

    public function loadMore()
    {
        if ($this->initialLoading || $this->loading || !$this->hasMorePosts) {
            return;
        }

        $currentPageBeforeIncrement = $this->getPage('page');
        $this->setPage($currentPageBeforeIncrement + 1, 'page');
        $newPage = $this->getPage('page');
        $this->fetchPosts(); // Fetches the new page into $this->currentPagePaginator

        $newItemsCount = 0;
        if ($this->currentPagePaginator) {
            $newItems = collect($this->currentPagePaginator->items());
            $newItemsCount = $newItems->count();
            if ($newItemsCount > 0) {
                $this->allLoadedPostModels = $this->allLoadedPostModels->concat($newItems)->unique('id');
            }
        }
    }

    private function transformPostData(Posts $postModel)
    {
        if (!$postModel->user) {
            return null;
        }

        $userId = Auth::id(); // Assuming Auth::check() is true
        // Use the eagerly‑loaded "is_liked" attribute added in fetchPosts()
        $isLiked = (bool)($postModel->is_liked ?? false);



        return [
            'id' => $postModel->id,
            'content' => $postModel->post,
            'user' => [
                'id' => $postModel->user->id,
                'name' => $postModel->user->fullname ?? $postModel->user->name ?? 'Unknown User',
                'username' => $postModel->user->username ?? '',
                'username_display' => '@' . ($postModel->user->username ?? ''),
                'avatar' => $postModel->user->avatar_url ?? ($postModel->user->profile_pic ? CoreBaseFunctions::generateCloudFrontSignedUrl(config('app.profile_pic_root') . $postModel->user->profile_pic) : '/api/placeholder/40/40'),
            ],
            'likes_count' => $postModel->likes_count ?? 0,
            'comments_count' => $postModel->comments_count ?? 0,
            'created_at' => $postModel->created_at->toISOString(),
            'is_liked' => $isLiked,
            'images' => $this->extractPostImages($postModel),
            'post_type' => $postModel->post_type,
            'media_width' => $postModel->photo_width ?? 0,
            'media_height' => $postModel->photo_height ?? 0,
        ];
    }

    private function extractPostImages(Posts $postModel)
    {
        $images = [];
        if (($postModel->post_type === 'image' || $postModel->post_type === 'video') && !empty($postModel->photo_filename)) {
            $configKey = $postModel->post_type === 'image' ? 'app.shared_image_root' : 'app.shared_video_root';
            $images[] = CoreBaseFunctions::generateCloudFrontSignedUrl(config($configKey) . $postModel->photo_filename);
        }
        return $images;
    }

    public function createPost()
    {
        if (empty(trim($this->newPostContent))) {
            return;
        }

        $currentUser = Auth::user();

        try {
            $newPost = Posts::create([
                'user_id' => $currentUser->id,
                'post' => trim($this->newPostContent),
                'post_type' => 'text',
            ]);

            $this->newPostContent = '';
            $this->dispatch('postCreatedSuccessfully', postId: $newPost->id);
            session()->flash('message', __('jemiyet/web::web.post_created_successfully'));

        } catch (\Exception $e) {
            session()->flash('error', __('jemiyet/web::web.post_creation_failed'));
        }
    }

    public function handlePostCreation($postId)
    {
        $this->resetPage('page');
        $this->allLoadedPostModels = collect(); // Clear the accumulated posts
        
        $this->fetchPosts(); // Fetches page 1 into $this->currentPagePaginator
        
        $repopulatedCount = 0;
        if ($this->currentPagePaginator instanceof \Illuminate\Contracts\Pagination\LengthAwarePaginator) {
            /** @var \Illuminate\Contracts\Pagination\LengthAwarePaginator $paginator */
            $paginator = $this->currentPagePaginator;
            if ($paginator->count() > 0) {
                $this->allLoadedPostModels = collect($paginator->items());
                $repopulatedCount = $this->allLoadedPostModels->count();
            }
        }
    }

    public function toggleLike($postId)
    {
        // Assuming Auth::check() is true due to route middleware
        $postModel = Posts::find($postId);
        if (!$postModel) {
            return;
        }

        $userId = Auth::id();
        if (!$userId) {
            return;
        }
        // Detect current like state
        $isCurrentlyLiked = $postModel->likes()->where('user_id', $userId)->exists();

        try {
            if ($isCurrentlyLiked) {
                // Unlike
                $postModel->likes()->where('user_id', $userId)->delete();
            } else {
                // Like
                $postModel->likes()->create([
                    'user_id' => $userId,
                ]);
            }

            // Refresh counts immediately
            $freshPost = Posts::withCount('likes')->find($postId);
            if ($freshPost) {
                $newLikesCount = $freshPost->likes_count;
                $isNowLiked = $freshPost->likes()->where('user_id', $userId)->exists();
            }
            $this->fetchPosts();

        } catch (\Exception $e) {
        }
    }

    public function showComments($postId)
    {
        $this->selectedPostId = $postId;
        $this->showCommentsModal = true;
    }

    public function closeComments()
    {
        $this->showCommentsModal = false;
        $this->selectedPostId = null;
    }

    public function formatTime($dateString)
    {
        if (!$dateString) return '';
        try {
            $date = new \DateTime($dateString);
            $now = new \DateTime();
            $diff = $now->diff($date);

            if ($diff->y > 0) return $diff->y . ' ' . __('jemiyet/web::web.time.years_short');
            if ($diff->m > 0) return $diff->m . ' ' . __('jemiyet/web::web.time.months_short');
            if ($diff->d > 0) return $diff->d . ' ' . __('jemiyet/web::web.time.days_short');
            if ($diff->h > 0) return $diff->h . ' ' . __('jemiyet/web::web.time.hours_short');
            if ($diff->i > 0) return $diff->i . __('jemiyet/web::web.time.minutes_short');
            return __('jemiyet/web::web.time.now');
        } catch (\Exception $e) {
            return '';
        }
    }

    public function render()
    {
        return view('jemiyet/web::livewire.pages.home', [
            'title' => __('jemiyet/web::web.home'),
            'posts' => $this->getPostsForDisplayProperty(),
            'stories' => $this->storyUsers ? $this->storyUsers->toArray() : [],
            'suggestedUsers' => $this->suggestedUsers ? $this->suggestedUsers->toArray() : [],
            'hasMorePosts' => $this->hasMorePosts
        ])->layout('jemiyet/web::layouts.app');
    }
}
