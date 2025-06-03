<?php

namespace Jemiyet\Web\Livewire\Pages;

use Livewire\Component;

class Groups extends Component
{
    public $groups = [];
    public $searchTerm = '';

    public function mount()
    {
        $this->loadMockData();
    }

    public function joinGroup($groupId)
    {
        foreach ($this->groups as $index => $group) {
            if ($group['id'] == $groupId) {
                $this->groups[$index]['is_member'] = !$this->groups[$index]['is_member'];
                $this->groups[$index]['member_count'] += $this->groups[$index]['is_member'] ? 1 : -1;
                break;
            }
        }
    }

    public function getFilteredGroupsProperty()
    {
        $filtered = $this->groups;

        if (!empty($this->searchTerm)) {
            $filtered = array_filter($filtered, function($group) {
                return stripos($group['name'], $this->searchTerm) !== false ||
                       stripos($group['description'], $this->searchTerm) !== false;
            });
        }

        return $filtered;
    }

    private function loadMockData()
    {
        $this->groups = [
            [
                'id' => 1,
                'name' => 'Laravel Developers Istanbul',
                'description' => 'Laravel geliştiricileri için buluşma grubu',
                'category' => 'tech',
                'member_count' => 1234,
                'image' => '/api/placeholder/300/200',
                'is_member' => false,
                'privacy' => 'public'
            ],
            [
                'id' => 2,
                'name' => 'Photography Enthusiasts',
                'description' => 'Fotoğraf severlerin buluşma noktası',
                'category' => 'art',
                'member_count' => 856,
                'image' => '/api/placeholder/300/200',
                'is_member' => true,
                'privacy' => 'public'
            ],
            [
                'id' => 3,
                'name' => 'Startup Founders',
                'description' => 'Girişimci ruhlu kişiler için platform',
                'category' => 'business',
                'member_count' => 567,
                'image' => '/api/placeholder/300/200',
                'is_member' => false,
                'privacy' => 'private'
            ],
            [
                'id' => 4,
                'name' => 'Football Lovers',
                'description' => 'Futbol tutkunları burada buluşuyor',
                'category' => 'sports',
                'member_count' => 2341,
                'image' => '/api/placeholder/300/200',
                'is_member' => true,
                'privacy' => 'public'
            ],
            [
                'id' => 5,
                'name' => 'Jazz Music Club',
                'description' => 'Jazz müziği dinleme ve tartışma grubu',
                'category' => 'music',
                'member_count' => 789,
                'image' => '/api/placeholder/300/200',
                'is_member' => false,
                'privacy' => 'public'
            ],
        ];
    }

    public function render()
    {
        return view('jemiyet/web::livewire.pages.groups')
            ->layout('jemiyet/web::layouts.app', ['title' => __('jemiyet/web::web.groups.title')]);
    }
} 