<?php

namespace Jemiyet\Web\Livewire\Pages;

use Livewire\Component;

class Events extends Component
{
    protected $layout = 'jemiyet/web::layouts.app';
    
    public $events = [];
    public $searchTerm = '';

    public function mount()
    {
        $this->loadMockData();
    }

    public function getFilteredEventsProperty()
    {
        $events = $this->events;

        if (!empty($this->searchTerm)) {
            $events = array_filter($events, function($event) {
                return stripos($event['title'], $this->searchTerm) !== false ||
                       stripos($event['venue'], $this->searchTerm) !== false ||
                       stripos($event['artist'], $this->searchTerm) !== false;
            });
        }

        return $events;
    }

    public function attendEvent($eventId)
    {
        foreach ($this->events as $index => $event) {
            if ($event['id'] == $eventId) {
                $this->events[$index]['is_attending'] = !$this->events[$index]['is_attending'];
                $this->events[$index]['attendee_count'] += $this->events[$index]['is_attending'] ? 1 : -1;
                break;
            }
        }
    }

    private function loadMockData()
    {
        $this->events = [
            [
                'id' => 1,
                'title' => 'Sasha & John Digweed',
                'subtitle' => 'Klein Phönix',
                'artist' => 'Sasha & John Digweed',
                'venue' => 'Klein Phönix',
                'address' => '52, Sokak No:12/1 Masak Atatürk Oto Sanayi',
                'date' => '06 June / Friday',
                'time' => '20:30 / End',
                'datetime' => '06/06/2025 - 20:30',
                'price_info' => 'Premium A Plus Free Till 00:00\nBlack Card VIP / Guest Till End',
                'attendee_count' => 19,
                'image' => '/api/placeholder/600/400',
                'category' => 'music',
                'is_attending' => false,
                'number' => '#1209'
            ],
            [
                'id' => 2,
                'title' => 'Art Gallery Opening',
                'subtitle' => 'Modern Art Space',
                'artist' => 'Contemporary Artists',
                'venue' => 'Modern Art Space',
                'address' => 'Galata, Meşrutiyet Cd. No:15',
                'date' => '12 June / Thursday',
                'time' => '19:00 / 23:00',
                'datetime' => '12/06/2025 - 19:00',
                'price_info' => 'Free Entry\nDrinks Available',
                'attendee_count' => 45,
                'image' => '/api/placeholder/600/400',
                'category' => 'art',
                'is_attending' => true,
                'number' => '#1210'
            ],
            [
                'id' => 3,
                'title' => 'Tech Conference 2025',
                'subtitle' => 'Innovation Hub',
                'artist' => 'Tech Leaders',
                'venue' => 'Innovation Hub',
                'address' => 'Levent, Büyükdere Cd. No:100',
                'date' => '20 June / Friday',
                'time' => '09:00 / 18:00',
                'datetime' => '20/06/2025 - 09:00',
                'price_info' => 'Early Bird: ₺299\nRegular: ₺399',
                'attendee_count' => 250,
                'image' => '/api/placeholder/600/400',
                'category' => 'tech',
                'is_attending' => false,
                'number' => '#1211'
            ]
        ];
    }

    public function render()
    {
        return view('jemiyet/web::livewire.pages.events')
            ->layout('jemiyet/web::layouts.app', ['title' => __('jemiyet/web::web.events.title')]);
    }
} 