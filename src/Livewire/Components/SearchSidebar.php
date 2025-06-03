<?php

namespace Jemiyet\Web\Livewire\Components;

use Livewire\Component;

class SearchSidebar extends Component
{
    public $searchTerm = '';
    public $searchResults = [];
    public $isOpen = false;
    public $selectedTab = 'all';
    
    protected $listeners = ['openSearchSidebar' => 'open'];

    public function mount()
    {
        $this->searchResults = [
            'users' => [],
            'posts' => [],
            'groups' => [],
            'events' => []
        ];
    }

    public function updatedSearchTerm()
    {
        if (strlen($this->searchTerm) < 2) {
            $this->searchResults = [
                'users' => [],
                'posts' => [],
                'groups' => [],
                'events' => []
            ];
            return;
        }

        $this->performSearch();
    }

    public function setTab($tab)
    {
        $this->selectedTab = $tab;
    }

    private function performSearch()
    {
        // Mock search results
        $this->searchResults = [
            'users' => [
                [
                    'id' => 1,
                    'name' => 'Ali Kayan',
                    'username' => 'alikayan',
                    'avatar' => '/api/placeholder/40/40',
                    'follower_count' => 1234
                ],
                [
                    'id' => 2,
                    'name' => 'Ayşe Yılmaz',
                    'username' => 'ayseyilmaz',
                    'avatar' => '/api/placeholder/40/40',
                    'follower_count' => 867
                ]
            ],
            'posts' => [
                [
                    'id' => 1,
                    'content' => 'Amazing sunset from Istanbul today! 🌅',
                    'user' => [
                        'name' => 'Ali Kayan',
                        'username' => 'alikayan',
                        'avatar' => '/api/placeholder/40/40'
                    ],
                    'likes_count' => 142,
                    'created_at' => now()->subHours(2)->toISOString()
                ]
            ],
            'groups' => [
                [
                    'id' => 1,
                    'name' => 'İstanbul Fotoğrafçıları',
                    'member_count' => 2341,
                    'image' => '/api/placeholder/80/80'
                ]
            ],
            'events' => [
                [
                    'id' => 1,
                    'title' => 'Sasha & John Digweed',
                    'date' => '06/06/2025',
                    'time' => '20:30',
                    'venue' => 'Klein Phönix',
                    'attendee_count' => 19
                ]
            ]
        ];
    }

    public function open()
    {
        $this->isOpen = true;
    }

    public function close()
    {
        $this->isOpen = false;
        $this->searchTerm = '';
        $this->searchResults = [
            'users' => [],
            'posts' => [],
            'groups' => [],
            'events' => []
        ];
    }

    public function render()
    {
        return view('jemiyet/web::livewire.components.search-sidebar');
    }
} 