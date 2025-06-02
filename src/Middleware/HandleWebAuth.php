<?php

namespace Jemiyet\Web\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HandleWebAuth
{
    public function handle(Request $request, Closure $next)
    {
        // Web routes için auth kontrolü
        if (!Auth::check()) {
            return redirect()->route('login');
        }
        
        return $next($request);
    }
} 