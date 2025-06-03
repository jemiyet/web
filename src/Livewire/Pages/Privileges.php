<?php

namespace Jemiyet\Web\Livewire\Pages;

use Livewire\Component;

class Privileges extends Component
{
    protected $layout = 'jemiyet/web::layouts.app';
    
    public $privileges = [];
    public $searchTerm = '';

    public function mount()
    {
        $this->loadMockData();
    }

    public function getFilteredPrivilegesProperty()
    {
        $privileges = $this->privileges;

        if (!empty($this->searchTerm)) {
            $privileges = array_filter($privileges, function($privilege) {
                return stripos($privilege['title'], $this->searchTerm) !== false ||
                       stripos($privilege['description'], $this->searchTerm) !== false ||
                       stripos($privilege['brand'], $this->searchTerm) !== false;
            });
        }

        return $privileges;
    }

    public function claimPrivilege($privilegeId)
    {
        foreach ($this->privileges as $index => $privilege) {
            if ($privilege['id'] == $privilegeId) {
                $this->privileges[$index]['is_claimed'] = true;
                $this->privileges[$index]['claim_count'] += 1;
                break;
            }
        }
    }

    private function loadMockData()
    {
        $this->privileges = [
            [
                'id' => 1,
                'title' => '%20 İndirim',
                'description' => 'Tüm menüde geçerli %20 indirim fırsatı',
                'brand' => 'Starbucks',
                'image' => '/api/placeholder/300/200',
                'category' => 'food',
                'discount_percentage' => 20,
                'valid_until' => '31.12.2024',
                'claim_count' => 1247,
                'is_claimed' => false,
                'code' => 'JEMIYET20'
            ],
            [
                'id' => 2,
                'title' => '2+1 Fırsat',
                'description' => '2 ürün al, 1 ürün bedava',
                'brand' => 'Zara',
                'image' => '/api/placeholder/300/200',
                'category' => 'shopping',
                'discount_percentage' => 33,
                'valid_until' => '15.01.2025',
                'claim_count' => 892,
                'is_claimed' => true,
                'code' => 'ZARA2PLUS1'
            ],
            [
                'id' => 3,
                'title' => 'Ücretsiz Giriş',
                'description' => 'Cumartesi günleri ücretsiz giriş',
                'brand' => 'Klein Phönix',
                'image' => '/api/placeholder/300/200',
                'category' => 'entertainment',
                'discount_percentage' => 100,
                'valid_until' => '28.02.2025',
                'claim_count' => 2156,
                'is_claimed' => false,
                'code' => 'KLEINVIP'
            ],
            [
                'id' => 4,
                'title' => '%15 İndirim',
                'description' => 'Tüm spa hizmetlerinde %15 indirim',
                'brand' => 'Four Seasons Spa',
                'image' => '/api/placeholder/300/200',
                'category' => 'health',
                'discount_percentage' => 15,
                'valid_until' => '30.06.2025',
                'claim_count' => 567,
                'is_claimed' => false,
                'code' => 'SPALUX15'
            ]
        ];
    }

    public function render()
    {
        return view('jemiyet/web::livewire.pages.privileges')
            ->layout('jemiyet/web::layouts.app', ['title' => __('jemiyet/web::web.privileges.title')]);
    }
} 