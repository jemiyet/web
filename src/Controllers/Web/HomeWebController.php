<?php

namespace Jemiyet\Web\Controllers\Web;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Jemiyet\Web\Services\ApiWrapperService;
use Jemiyet\Posts\Requests\PostListRequest;
use Jemiyet\Groups\Services\GroupService;
use Jemiyet\Core\Models\User;

class HomeWebController extends BaseController
{
    protected $apiWrapper;
    protected $groupService;

    public function __construct(ApiWrapperService $apiWrapper, GroupService $groupService)
    {
        $this->apiWrapper = $apiWrapper;
        $this->groupService = $groupService;
    }

    /**
     * Ana sayfa - Twitter/X benzeri feed
     */
    public function index(Request $request)
    {
        Log::info('HomeWebController: Starting index method');
        
        try {
            $user = $request->user();
            
            Log::info('HomeWebController: User check', [
                'user_exists' => $user ? true : false,
                'user_id' => $user?->id ?? 'null'
            ]);
            
            // If no authenticated user, use first user for testing
            if (!$user) {
                $testUser = User::first();
                Log::info('HomeWebController: Using test user', [
                    'test_user_id' => $testUser->id,
                    'test_user_name' => $testUser->name ?? 'no_name'
                ]);
                $user = $testUser;
            }
            
            // Create PostListRequest for API call
            $postListRequest = new PostListRequest();
            $postListRequest->merge([
                'device' => 'web',
                'app_version' => '1.0.0',
                'location_enabled' => 1,
                'notifications_enabled' => 1,
                'lang' => app()->getLocale(),
                'lat' => '0',
                'long' => '0',
                'page' => $request->input('page', 0),
            ]);
            
            // Set user resolver
            $postListRequest->setUserResolver(function () use ($user) {
                Log::info('HomeWebController: User resolver returning user', [
                    'user_id' => $user->id,
                    'user_name' => $user->name ?? 'no_name'
                ]);
                return $user;
            });

            Log::info('HomeWebController: Calling Posts API');
            
            // Test user resolver before API call
            $testUser = $postListRequest->user();
            Log::info('HomeWebController: Test user from request', [
                'test_user_id' => $testUser?->id ?? 'null',
                'test_user_name' => $testUser?->name ?? 'null'
            ]);

            // Get posts from real API - direkt PostService kullan
            $postService = app(\Jemiyet\Posts\Services\PostService::class);
            $settings = [
                'device' => 'web',
                'app_version' => '1.0.0',
                'location_enabled' => 1,
                'notifications_enabled' => 1,
                'devicetoken' => 'web_token',
                'lang' => app()->getLocale(),
            ];
            
            Log::info('HomeWebController: Before calling PostService', [
                'user_id' => $user->id,
                'user_name' => $user->name,
                'user_exists' => $user ? true : false,
                'user_class' => get_class($user)
            ]);
            
            $postsResponse = $postService->getFeed(
                $user,
                $settings,
                $request->input('page', 0),
                '0',
                '0',
                1
            );

            Log::info('HomeWebController: Posts API Response', [
                'response_keys' => array_keys($postsResponse),
                'posts_count' => count($postsResponse['posts'] ?? []),
                'has_error' => isset($postsResponse['error']),
                'error_message' => $postsResponse['error'] ?? null
            ]);

            $posts = $postsResponse['posts'] ?? [];

            // Get trending groups
            $groupsResponse = $this->groupService->getGroupListing($user->id);
            $trendingGroups = collect($groupsResponse['groups'] ?? [])->take(5)->map(function ($group) {
                return [
                    'id' => $group['id'],
                    'name' => $group['title'] ?? $group['name'],
                    'member_count' => $group['member_count'] ?? 0,
                ];
            });

            Log::info('HomeWebController: Returning data', [
                'posts_count' => count($posts),
                'groups_count' => count($trendingGroups)
            ]);

            return Inertia::render('Web/Home', [
                'posts' => $posts,
                'trending_groups' => $trendingGroups,
                'suggested_users' => $this->getMockUsers(),
                'auth' => ['user' => [
                    'id' => $user->id,
                    'name' => $user->name ?? 'User ' . $user->id,
                    'username' => $user->username ?? 'user' . $user->id,
                    'avatar' => $user->avatar ?? null,
                ]],
                'debug' => [
                    'data_source' => 'real_api',
                    'posts_count' => count($posts),
                    'groups_count' => count($trendingGroups),
                    'user_id' => $user->id
                ]
            ]);

        } catch (\Exception $e) {
            Log::error('HomeWebController error: ' . $e->getMessage(), [
                'trace' => $e->getTraceAsString()
            ]);

            return Inertia::render('Web/Home', [
                'posts' => $this->getMockPosts(),
                'trending_groups' => $this->getMockGroups(),
                'suggested_users' => $this->getMockUsers(),
                'auth' => ['user' => null],
                'debug' => [
                    'data_source' => 'mock_data',
                    'reason' => 'api_error',
                    'error' => $e->getMessage()
                ]
            ]);
        }
    }

    private function getDataWithUser(Request $request, $user, $isTestUser = false)
    {
        Log::info('HomeWebController: Getting real data', [
            'user_id' => $user->id,
            'is_test_user' => $isTestUser
        ]);
        
        // Create PostListRequest for API call
        $postListRequest = new PostListRequest();
        $postListRequest->merge([
            'device' => 'web',
            'app_version' => '1.0.0',
            'location_enabled' => 1,
            'notifications_enabled' => 1,
            'lang' => app()->getLocale(),
            'lat' => '0',
            'long' => '0',
            'page' => $request->input('page', 0),
        ]);
        
        Log::info('HomeWebController: Setting user resolver', [
            'user_id' => $user->id,
            'user_name' => $user->name,
            'user_fullname' => $user->fullname
        ]);
        
        $postListRequest->setUserResolver(function () use ($user) {
            Log::info('HomeWebController: User resolver called', [
                'resolved_user_id' => $user->id,
                'resolved_user_name' => $user->name
            ]);
            return $user;
        });

        // Get posts from real API
        $postsResponse = $this->apiWrapper->callController(
            'Jemiyet\Posts\Controllers\PostController',
            'index',
            $postListRequest
        );

        Log::info('HomeWebController: Posts API Response', [
            'response_keys' => array_keys($postsResponse),
            'posts_count' => count($postsResponse['posts'] ?? []),
            'full_response' => $postsResponse
        ]);

        $posts = $postsResponse['posts'] ?? [];

        // Get trending groups
        $groupsResponse = $this->groupService->getGroupListing($user->id);
        $trendingGroups = collect($groupsResponse['groups'] ?? [])->take(5)->map(function ($group) {
            return [
                'id' => $group['id'],
                'name' => $group['title'] ?? $group['name'],
                'member_count' => $group['member_count'] ?? 0,
            ];
        });

        Log::info('HomeWebController: Groups Response', [
            'groups_count' => count($trendingGroups)
        ]);

        // Mock suggested users for now (can be replaced with real API later)
        $suggestedUsers = [
            [
                'id' => 1,
                'name' => 'Sarah Connor',
                'username' => 'sarah_connor',
                'avatar' => null,
            ],
            [
                'id' => 2,
                'name' => 'John Doe',
                'username' => 'john_doe',
                'avatar' => null,
            ],
            [
                'id' => 3,
                'name' => 'Jane Smith',
                'username' => 'jane_smith',
                'avatar' => null,
            ],
        ];

        Log::info('HomeWebController: Returning real data');

        return Inertia::render('Web/Home', [
            'posts' => $posts,
            'trending_groups' => $trendingGroups,
            'suggested_users' => $suggestedUsers,
            'auth' => ['user' => [
                'id' => $user->id,
                'name' => $user->name,
                'username' => $user->username ?? 'user' . $user->id,
                'avatar' => $user->avatar ?? null,
            ]],
            'debug' => [
                'data_source' => 'real_api',
                'posts_count' => count($posts),
                'groups_count' => count($trendingGroups),
                'is_test_user' => $isTestUser,
                'user_id' => $user->id
            ]
        ]);
    }

    private function getMockPosts()
    {
        return [
            [
                'id' => 1,
                'content' => 'Just finished an amazing workout session! 💪 Feeling stronger every day. Who else is crushing their fitness goals this week?',
                'user' => [
                    'id' => 1,
                    'name' => 'Alex Johnson',
                    'username' => 'alexj_fitness',
                    'avatar' => null,
                ],
                'likes_count' => 24,
                'comments_count' => 8,
                'created_at' => now()->subHours(2)->toISOString(),
                'is_liked' => false,
            ],
            [
                'id' => 2,
                'content' => 'Beautiful sunset tonight! 🌅 Sometimes you just need to pause and appreciate the little moments.',
                'user' => [
                    'id' => 2,
                    'name' => 'Emma Wilson',
                    'username' => 'emma_travels',
                    'avatar' => null,
                ],
                'likes_count' => 156,
                'comments_count' => 23,
                'created_at' => now()->subHours(4)->toISOString(),
                'is_liked' => true,
                'images' => ['https://picsum.photos/600/400?random=1'],
            ],
            [
                'id' => 3,
                'content' => 'New coffee blend is absolutely incredible! ☕ Local roasters never disappoint. What\'s your favorite coffee spot?',
                'user' => [
                    'id' => 3,
                    'name' => 'Mike Coffee',
                    'username' => 'mike_brewmaster',
                    'avatar' => null,
                ],
                'likes_count' => 67,
                'comments_count' => 12,
                'created_at' => now()->subHours(6)->toISOString(),
                'is_liked' => false,
            ],
        ];
    }

    private function getMockGroups()
    {
        return [
            ['id' => 1, 'name' => 'Tech Enthusiasts', 'member_count' => 1234],
            ['id' => 2, 'name' => 'Photography Club', 'member_count' => 856],
            ['id' => 3, 'name' => 'Book Lovers', 'member_count' => 567],
            ['id' => 4, 'name' => 'Fitness Motivation', 'member_count' => 2341],
            ['id' => 5, 'name' => 'Travel Adventures', 'member_count' => 789],
        ];
    }

    private function getMockUsers()
    {
        return [
            [
                'id' => 4,
                'name' => 'Sarah Connor',
                'username' => 'sarah_connor',
                'avatar' => null,
            ],
            [
                'id' => 5,
                'name' => 'John Doe',
                'username' => 'john_doe',
                'avatar' => null,
            ],
            [
                'id' => 6,
                'name' => 'Jane Smith',
                'username' => 'jane_smith',
                'avatar' => null,
            ],
        ];
    }
} 