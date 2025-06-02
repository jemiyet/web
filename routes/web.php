<?php

use Illuminate\Support\Facades\Route;
use Jemiyet\Posts\Controllers\PostController;
use Jemiyet\Groups\Controllers\GroupController;
use Illuminate\Support\Facades\Auth;
use Jemiyet\Core\Models\User;

/*
|--------------------------------------------------------------------------
| Web Routes - API Controller'larını kullan
|--------------------------------------------------------------------------
*/

// Public login routes
Route::get('/login', function() {
    return inertia('Web/Login');
})->name('login');

Route::post('/login', function(\Illuminate\Http\Request $request) {
    // For demo purposes, just login with any existing user
    $user = User::first();
    Auth::login($user);
    return redirect()->route('home.index');
})->name('login.post');

Route::post('/logout', function() {
    Auth::logout();
    return redirect()->route('login');
})->name('logout');

// Authentication middleware for all routes
Route::middleware(['web_auth'])->group(function () {
    
    // Home page - Posts API'sini kullan
    Route::get('/home', [PostController::class, 'index'])->name('home.index');
    
    // Groups - Groups API'sini kullan
    Route::get('/groups', [GroupController::class, 'index'])->name('groups.index');
    
    // Diğer route'lar için şimdilik placeholder
    Route::get('/events', function() {
        return inertia('Web/Events', ['events' => []]);
    })->name('events.index');
    
    Route::get('/profile', function() {
        return inertia('Web/Profile', ['user' => auth()->user()]);
    })->name('profile.show');
}); 