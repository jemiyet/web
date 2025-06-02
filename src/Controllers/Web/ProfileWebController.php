<?php

namespace Jemiyet\Web\Controllers\Web;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Inertia\Inertia;
use Jemiyet\Web\Services\ApiWrapperService;

class ProfileWebController extends Controller
{
    private ApiWrapperService $apiWrapper;

    public function __construct(ApiWrapperService $apiWrapper)
    {
        $this->apiWrapper = $apiWrapper;
    }

    /**
     * Kullanıcı profili
     */
    public function show(Request $request, $username = null)
    {
        // Mock user data - API entegrasyonu sonra yapılacak
        $user = [
            'id' => 1,
            'name' => 'John Doe',
            'username' => $username ?? 'johndoe',
            'bio' => 'Software Developer | Photography enthusiast | Coffee lover ☕',
            'location' => 'Istanbul, Turkey',
            'website' => 'https://johndoe.dev',
            'followers_count' => 156,
            'following_count' => 89,
            'posts_count' => 234,
            'joined_at' => '2023-01-15',
            'avatar' => null,
            'cover_photo' => null,
            'is_following' => false,
            'is_own_profile' => false, // Auth user kontrolü yapılacak
        ];

        // Mock user posts
        $posts = [
            [
                'id' => 1,
                'content' => 'Working on a new project today! 🚀 #coding #developer',
                'created_at' => now()->subHours(2)->toISOString(),
                'likes_count' => 12,
                'comments_count' => 3,
                'images' => [],
                'is_liked' => false
            ],
            [
                'id' => 2,
                'content' => 'Beautiful sunset from my balcony 📸',
                'created_at' => now()->subDays(1)->toISOString(),
                'likes_count' => 28,
                'comments_count' => 7,
                'images' => [],
                'is_liked' => true
            ]
        ];

        return Inertia::render('Web/Profile/Show', [
            'user' => $user,
            'posts' => $posts,
        ]);
    }

    /**
     * Profil düzenleme sayfası
     */
    public function edit(Request $request)
    {
        // Mock current user data
        $user = [
            'id' => 1,
            'name' => 'John Doe',
            'username' => 'johndoe',
            'email' => 'john@example.com',
            'bio' => 'Software Developer | Photography enthusiast | Coffee lover ☕',
            'location' => 'Istanbul, Turkey',
            'website' => 'https://johndoe.dev',
            'avatar' => null,
            'cover_photo' => null,
        ];

        return Inertia::render('Web/Profile/Edit', [
            'user' => $user,
        ]);
    }

    /**
     * Profil güncelleme
     */
    public function update(Request $request)
    {
        // API'ye forward edilecek
        return redirect()->route('profile.show', ['username' => $request->username])
            ->with('success', 'Profil başarıyla güncellendi!');
    }

    /**
     * Kullanıcıyı takip et
     */
    public function follow(Request $request, $userId)
    {
        // API'ye forward edilecek
        return back()->with('success', 'Kullanıcı takip edildi!');
    }

    /**
     * Kullanıcıyı takipten çıkar
     */
    public function unfollow(Request $request, $userId)
    {
        // API'ye forward edilecek
        return back()->with('success', 'Kullanıcı takipten çıkarıldı!');
    }

    /**
     * Takipçiler listesi
     */
    public function followers(Request $request, $username)
    {
        // Mock followers data
        $followers = [
            [
                'id' => 2,
                'name' => 'Jane Smith',
                'username' => 'janesmith',
                'avatar' => null,
                'is_following' => true,
            ],
            [
                'id' => 3,
                'name' => 'Mike Johnson',
                'username' => 'mikej',
                'avatar' => null,
                'is_following' => false,
            ]
        ];

        return Inertia::render('Web/Profile/Followers', [
            'username' => $username,
            'followers' => $followers,
        ]);
    }

    /**
     * Takip edilenler listesi
     */
    public function following(Request $request, $username)
    {
        // Mock following data
        $following = [
            [
                'id' => 4,
                'name' => 'Sarah Wilson',
                'username' => 'sarahw',
                'avatar' => null,
                'is_following' => true,
            ]
        ];

        return Inertia::render('Web/Profile/Following', [
            'username' => $username,
            'following' => $following,
        ]);
    }
} 