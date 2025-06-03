<?php

namespace Jemiyet\Web;

use Livewire\Livewire;
use Jemiyet\Web\Livewire\Pages\Home;
use Jemiyet\Web\Livewire\Pages\Events;
use Jemiyet\Web\Livewire\Pages\Groups;
use Jemiyet\Web\Livewire\Pages\Venues;
use Illuminate\Support\ServiceProvider;
use Jemiyet\Web\Livewire\Pages\Privileges;
use Jemiyet\Web\Livewire\Pages\Notifications;
use Jemiyet\Web\Livewire\Components\WebLayout;
use Jemiyet\Web\Livewire\Components\SearchSidebar;

class WebServiceProvider extends ServiceProvider
{
    public function register()
    {
       
    }

    public function boot()
    {
        $this->loadRoutesFrom(__DIR__.'/../routes/web.php');
        
        $this->loadViewsFrom(__DIR__.'/../resources/views', 'jemiyet/web');
        $this->loadTranslationsFrom(__DIR__.'/../resources/lang', 'jemiyet/web');
        
        // Register Livewire components
        Livewire::component('home', Home::class);
        Livewire::component('groups', Groups::class);
        Livewire::component('events', Events::class);
        Livewire::component('venues', Venues::class);
        Livewire::component('privileges', Privileges::class);
        Livewire::component('notifications', Notifications::class);
        
        // Register Livewire page components
        Livewire::component('web-layout', WebLayout::class);
        Livewire::component('search-sidebar', SearchSidebar::class);
    }
} 