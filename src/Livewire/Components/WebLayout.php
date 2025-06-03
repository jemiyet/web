<?php

namespace Jemiyet\Web\Livewire\Components;

use Livewire\Component;

class WebLayout extends Component
{
    public $sidebarCollapsed = false;
    public $theme = 'dark';

    public function toggleSidebar()
    {
        $this->sidebarCollapsed = !$this->sidebarCollapsed;
    }

    public function toggleTheme()
    {
        $this->theme = $this->theme === 'dark' ? 'light' : 'dark';
        // Store in session for persistence
        session(['theme' => $this->theme]);
    }

    public function mount()
    {
        // Get theme from session or default to dark
        $this->theme = session('theme', 'dark');
    }

    public function getNavigationProperty()
    {
        return [
            [
                'name' => __('jemiyet/web::web.nav.home'),
                'href' => '/home',
                'icon' => 'heroicon-o-home',
                'active' => request()->is('home*')
            ],
            [
                'name' => __('jemiyet/web::web.nav.search'),
                'href' => '/search',
                'icon' => 'heroicon-o-magnifying-glass',
                'active' => request()->is('search*')
            ],
            [
                'name' => __('jemiyet/web::web.nav.explore'),
                'href' => '/explore',
                'icon' => 'heroicon-o-heart',
                'active' => request()->is('explore*')
            ],
            [
                'name' => __('jemiyet/web::web.nav.events'),
                'href' => '/events',
                'icon' => 'heroicon-o-calendar',
                'active' => request()->is('events*')
            ],
            [
                'name' => __('jemiyet/web::web.nav.groups'),
                'href' => '/groups',
                'icon' => 'heroicon-o-user-group',
                'active' => request()->is('groups*')
            ],
            [
                'name' => __('jemiyet/web::web.nav.venues'),
                'href' => '/venues',
                'icon' => 'heroicon-o-map-pin',
                'active' => request()->is('venues*')
            ],
            [
                'name' => __('jemiyet/web::web.nav.privileges'),
                'href' => '/privileges',
                'icon' => 'heroicon-o-star',
                'active' => request()->is('privileges*')
            ],
            [
                'name' => __('jemiyet/web::web.nav.messages'),
                'href' => '/messages',
                'icon' => 'heroicon-o-chat-bubble-left-right',
                'active' => request()->is('messages*')
            ],
            [
                'name' => __('jemiyet/web::web.nav.notifications'),
                'href' => '/notifications',
                'icon' => 'heroicon-o-bell',
                'active' => request()->is('notifications*')
            ],
        ];
    }

    public function getBottomNavigationProperty()
    {
        return [
            [
                'name' => __('jemiyet/web::web.nav.my_profile'),
                'href' => '/profile',
                'icon' => 'heroicon-o-user',
                'active' => request()->is('profile*')
            ],
            [
                'name' => __('jemiyet/web::web.nav.settings'),
                'href' => '/settings',
                'icon' => 'heroicon-o-cog-6-tooth',
                'active' => request()->is('settings*')
            ],
        ];
    }

    public function render()
    {
        return view('jemiyet/web::livewire.components.web-layout');
    }
} 