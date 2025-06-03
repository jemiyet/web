<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes - Livewire Components
|--------------------------------------------------------------------------
*/

Route::middleware(['web'])->group(function () {
    // Livewire Pages - Auth middleware will be handled by Laravel
    Route::get('/home', \Jemiyet\Web\Livewire\Pages\Home::class)->name('home.index');
    Route::get('/', \Jemiyet\Web\Livewire\Pages\Home::class)->name('home');

    Route::get('/groups', \Jemiyet\Web\Livewire\Pages\Groups::class)->name('groups.index');
    Route::get('/events', \Jemiyet\Web\Livewire\Pages\Events::class)->name('events.index');
    Route::get('/venues', \Jemiyet\Web\Livewire\Pages\Venues::class)->name('venues.index');
    Route::get('/privileges', \Jemiyet\Web\Livewire\Pages\Privileges::class)->name('privileges.index');
    Route::get('/notifications', \Jemiyet\Web\Livewire\Pages\Notifications::class)->name('notifications.index');

    // Placeholder routes for other sections
        Route::get('/profile', function() {
        return view('jemiyet/web::pages.coming-soon', ['title' => 'Profile']);
        })->name('profile.show');

    Route::get('/settings', function() {
        return view('jemiyet/web::pages.coming-soon', ['title' => 'Settings']);
    })->name('settings.index');
}); 