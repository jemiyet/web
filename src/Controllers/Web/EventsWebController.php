<?php

namespace Jemiyet\Web\Controllers\Web;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Inertia\Inertia;
use Jemiyet\Web\Services\ApiWrapperService;

class EventsWebController extends Controller
{
    private ApiWrapperService $apiWrapper;

    public function __construct(ApiWrapperService $apiWrapper)
    {
        $this->apiWrapper = $apiWrapper;
    }

    /**
     * Events listesi
     */
    public function index(Request $request)
    {
        // Mock data - API entegrasyonu sonra yapılacak
        $events = [
            [
                'id' => 1,
                'title' => 'Tech Meetup Istanbul',
                'description' => 'Frontend ve Backend geliştiricileri için networking etkinliği',
                'date' => now()->addDays(5)->toISOString(),
                'location' => 'Istanbul Tech Park',
                'attendees_count' => 45,
                'max_attendees' => 100,
            ],
            [
                'id' => 2,
                'title' => 'Photography Workshop',
                'description' => 'Doğa fotoğrafçılığı teknikleri workshopu',
                'date' => now()->addDays(12)->toISOString(),
                'location' => 'Belgrad Ormanı',
                'attendees_count' => 23,
                'max_attendees' => 50,
            ]
        ];

        return Inertia::render('Web/Events/Index', [
            'events' => $events,
        ]);
    }

    /**
     * Event oluşturma sayfası
     */
    public function create()
    {
        return Inertia::render('Web/Events/Create');
    }

    /**
     * Event kaydetme
     */
    public function store(Request $request)
    {
        // API'ye forward edilecek
        return redirect()->route('events.index')
            ->with('success', 'Event başarıyla oluşturuldu!');
    }

    /**
     * Event detayı
     */
    public function show($id)
    {
        // Mock data
        $event = [
            'id' => $id,
            'title' => 'Tech Meetup Istanbul',
            'description' => 'Frontend ve Backend geliştiricileri için networking etkinliği',
            'date' => now()->addDays(5)->toISOString(),
            'location' => 'Istanbul Tech Park',
            'attendees_count' => 45,
            'max_attendees' => 100,
        ];

        return Inertia::render('Web/Events/Show', [
            'event' => $event,
        ]);
    }

    /**
     * Event'e katıl
     */
    public function join($id)
    {
        // API'ye forward edilecek
        return back()->with('success', 'Etkinliğe katıldınız!');
    }

    /**
     * Event'ten ayrıl
     */
    public function leave($id)
    {
        // API'ye forward edilecek
        return back()->with('success', 'Etkinlikten ayrıldınız!');
    }
} 