<?php

namespace Jemiyet\Web\Controllers\Web;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Inertia\Inertia;
use Jemiyet\Web\Services\ApiWrapperService;

class PostsWebController extends Controller
{
    private ApiWrapperService $apiWrapper;

    public function __construct(ApiWrapperService $apiWrapper)
    {
        $this->apiWrapper = $apiWrapper;
    }

    /**
     * Post oluşturma
     */
    public function store(Request $request)
    {
        // API'ye forward edilecek - şimdilik success message döndür
        return back()->with('success', 'Post başarıyla paylaşıldı!');
    }

    /**
     * Post detayı
     */
    public function show($id)
    {
        // Mock post data
        $post = [
            'id' => $id,
            'content' => 'Bu bir örnek post içeriğidir. Lorem ipsum dolor sit amet...',
            'user' => [
                'id' => 1,
                'name' => 'John Doe',
                'username' => 'johndoe',
                'avatar' => null
            ],
            'likes_count' => 12,
            'comments_count' => 3,
            'created_at' => now()->subHours(2)->toISOString(),
            'images' => [],
            'is_liked' => false,
            'comments' => [
                [
                    'id' => 1,
                    'content' => 'Harika bir paylaşım!',
                    'user' => [
                        'id' => 2,
                        'name' => 'Jane Smith',
                        'username' => 'janesmith',
                        'avatar' => null
                    ],
                    'created_at' => now()->subHour()->toISOString(),
                    'likes_count' => 2,
                    'is_liked' => false
                ]
            ]
        ];

        return Inertia::render('Web/Posts/Show', [
            'post' => $post,
        ]);
    }

    /**
     * Post beğenme
     */
    public function like($id)
    {
        // API'ye forward edilecek
        return response()->json(['message' => 'Post beğenildi!']);
    }

    /**
     * Post beğenisini kaldırma
     */
    public function unlike($id)
    {
        // API'ye forward edilecek
        return response()->json(['message' => 'Post beğenisi kaldırıldı!']);
    }

    /**
     * Post silme
     */
    public function destroy($id)
    {
        // API'ye forward edilecek
        return redirect()->route('home')
            ->with('success', 'Post başarıyla silindi!');
    }

    /**
     * Post düzenleme
     */
    public function edit($id)
    {
        // Mock post data
        $post = [
            'id' => $id,
            'content' => 'Bu bir örnek post içeriğidir. Lorem ipsum dolor sit amet...',
            'images' => [],
        ];

        return Inertia::render('Web/Posts/Edit', [
            'post' => $post,
        ]);
    }

    /**
     * Post güncelleme
     */
    public function update(Request $request, $id)
    {
        // API'ye forward edilecek
        return redirect()->route('posts.show', $id)
            ->with('success', 'Post başarıyla güncellendi!');
    }

    /**
     * Comment ekleme
     */
    public function comment(Request $request, $id)
    {
        // API'ye forward edilecek
        return back()->with('success', 'Yorum eklendi!');
    }
} 