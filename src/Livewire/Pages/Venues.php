<?php

namespace Jemiyet\Web\Livewire\Pages;

use Livewire\Component;

class Venues extends Component
{
    protected $layout = 'jemiyet/web::layouts.app';
    
    public $venues = [];
    public $searchTerm = '';

    public function mount()
    {
        $this->loadMockData();
    }

    public function getFilteredVenuesProperty()
    {
        $venues = $this->venues;

        if (!empty($this->searchTerm)) {
            $venues = array_filter($venues, function($venue) {
                return stripos($venue['name'], $this->searchTerm) !== false ||
                       stripos($venue['location'], $this->searchTerm) !== false ||
                       stripos($venue['district'], $this->searchTerm) !== false;
            });
        }

        return $venues;
    }

    public function voteVenue($venueId)
    {
        foreach ($this->venues as $index => $venue) {
            if ($venue['id'] == $venueId) {
                $this->venues[$index]['has_voted'] = !$this->venues[$index]['has_voted'];
                $this->venues[$index]['vote_count'] += $this->venues[$index]['has_voted'] ? 1 : -1;
                break;
            }
        }
    }

    private function loadMockData()
    {
        $this->venues = [
            [
                'id' => 1,
                'name' => 'Klein Phönix',
                'logo' => '/api/placeholder/120/80',
                'location' => 'Masak Atatürk Oto Sanayi',
                'district' => 'Sarıyer',
                'address' => '52, Sokak No:12/1 Masak Atatürk Oto Sanayi',
                'category' => 'club',
                'vote_count' => 892,
                'has_voted' => false,
                'rating' => 4.5,
                'price_range' => '₺₺₺'
            ],
            [
                'id' => 2,
                'name' => 'Pandora Box',
                'logo' => '/api/placeholder/120/80',
                'location' => 'Beyoğlu',
                'district' => 'Beyoğlu',
                'address' => 'İstiklal Cd. No:145/2',
                'category' => 'bar',
                'vote_count' => 1247,
                'has_voted' => true,
                'rating' => 4.2,
                'price_range' => '₺₺'
            ],
            [
                'id' => 3,
                'name' => 'Sumahan on the Water',
                'logo' => '/api/placeholder/120/80',
                'location' => 'Çengelköy',
                'district' => 'Üsküdar',
                'address' => 'Kuleli Cd. No:51',
                'category' => 'hotel',
                'vote_count' => 2156,
                'has_voted' => false,
                'rating' => 4.8,
                'price_range' => '₺₺₺₺'
            ],
            [
                'id' => 4,
                'name' => 'Mikla Restaurant',
                'logo' => '/api/placeholder/120/80',
                'location' => 'Beyoğlu',
                'district' => 'Beyoğlu',
                'address' => 'Meşrutiyet Cd. No:15 Kat:18',
                'category' => 'restaurant',
                'vote_count' => 3421,
                'has_voted' => true,
                'rating' => 4.7,
                'price_range' => '₺₺₺₺'
            ],
            [
                'id' => 5,
                'name' => 'Gram Café & Pancakes',
                'logo' => '/api/placeholder/120/80',
                'location' => 'Nişantaşı',
                'district' => 'Şişli',
                'address' => 'Valikonağı Cd. No:88',
                'category' => 'cafe',
                'vote_count' => 756,
                'has_voted' => false,
                'rating' => 4.3,
                'price_range' => '₺₺'
            ]
        ];
    }

    public function render()
    {
        return view('jemiyet/web::livewire.pages.venues')
            ->layout('jemiyet/web::layouts.app', ['title' => __('jemiyet/web::web.venues.title')]);
    }
} 