<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" x-data="{ 
    theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
    init() {
        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            this.theme = e.matches ? 'dark' : 'light';
        });
    }
}" :class="theme">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ $title ?? 'Jemiyet' }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=inter:400,500,600,700&display=swap" rel="stylesheet" />

    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    fontFamily: {
                        'inter': ['Inter', 'sans-serif'],
                    },
                    colors: {
                        'jemiyet-gold': {
                            '50': '#fffef7',
                            '100': '#fffce8',
                            '200': '#fff5c5',
                            '300': '#ffe998',
                            '400': '#ffd55a',
                            '500': '#ffbe2e',
                            '600': '#f0a500',
                            '700': '#cc8a00',
                            '800': '#a67102',
                            '900': '#8a5a06',
                            '950': '#4f3000',
                        }
                    }
                }
            }
        }
    </script>
    
    <!-- Alpine.js -->
    
    @livewireStyles

    <style>
        [x-cloak] { display: none !important; }
        .line-clamp-2 {
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }
    </style>
</head>
<body class="font-inter antialiased bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-200">
    
    <div x-data="{ sidebarOpen: false, searchSidebarOpen: false }" class="min-h-screen">
        <!-- Sidebar -->
        <aside class="fixed left-0 top-0 h-screen w-64 bg-white dark:bg-black border-r border-gray-200 dark:border-gray-800 z-50 transition-all duration-300"
               :class="{ '-translate-x-full lg:translate-x-0': !sidebarOpen, 'translate-x-0': sidebarOpen }">
            
            <!-- Logo -->
            <div class="p-6 border-b border-gray-200 dark:border-gray-800">
                <a href="/home" class="flex items-center space-x-3">
                    <div class="w-8 h-8 bg-gradient-to-br from-jemiyet-gold-600 to-jemiyet-gold-700 rounded-lg flex items-center justify-center">
                        <span class="text-white font-bold text-lg">J</span>
                    </div>
                    <span class="text-xl font-bold bg-gradient-to-r from-jemiyet-gold-600 to-jemiyet-gold-700 bg-clip-text text-transparent">
                        Jemiyet
                    </span>
                </a>
            </div>

            <!-- Navigation -->
            <nav class="flex-1 px-3 py-4 space-y-1">
                @php
                    $navigation = [
                        ['name' => __('jemiyet/web::web.nav.home'), 'href' => '/home', 'icon' => 'home'],
                        ['name' => __('jemiyet/web::web.nav.search'), 'href' => '/search', 'icon' => 'search'],
                        ['name' => __('jemiyet/web::web.nav.events'), 'href' => '/events', 'icon' => 'calendar'],
                        ['name' => __('jemiyet/web::web.nav.groups'), 'href' => '/groups', 'icon' => 'users'],
                        ['name' => __('jemiyet/web::web.nav.venues'), 'href' => '/venues', 'icon' => 'map-pin'],
                        ['name' => __('jemiyet/web::web.nav.privileges'), 'href' => '/privileges', 'icon' => 'star'],
                        ['name' => __('jemiyet/web::web.nav.notifications'), 'href' => '/notifications', 'icon' => 'bell'],
                    ];
                @endphp

                @foreach($navigation as $item)
                    @if($item['href'] === '/search')
                        <button @click="$store.search.openSidebar()"
                               class="w-full flex items-center space-x-3 px-3 py-3 rounded-xl text-base font-medium transition-all duration-200 group text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-gray-900 dark:hover:text-white">
                            <div class="flex-shrink-0">
                                @include('jemiyet/web::components.icons.' . $item['icon'], ['class' => 'w-6 h-6'])
                            </div>
                            <span class="truncate">{{ $item['name'] }}</span>
                        </button>
                    @else
                        <a href="{{ $item['href'] }}" 
                           class="flex items-center space-x-3 px-3 py-3 rounded-xl text-base font-medium transition-all duration-200 group {{ request()->is(trim($item['href'], '/') . '*') ? 'bg-jemiyet-gold-600 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-gray-900 dark:hover:text-white' }}">
                            <div class="flex-shrink-0">
                                @include('jemiyet/web::components.icons.' . $item['icon'], ['class' => 'w-6 h-6'])
                            </div>
                            <span class="truncate">{{ $item['name'] }}</span>
                        </a>
                    @endif
                @endforeach
            </nav>

            <!-- Bottom Navigation -->
            <div class="px-3 pb-4 space-y-1 border-t border-gray-200 dark:border-gray-800 pt-4">
                <!-- Profile -->
                <a href="/profile" 
                   class="flex items-center space-x-3 px-3 py-3 rounded-xl text-base font-medium transition-all duration-200 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-gray-900 dark:hover:text-white">
                    <div class="w-6 h-6 rounded-full bg-gradient-to-br from-jemiyet-gold-500 to-jemiyet-gold-600 flex items-center justify-center">
                        <span class="text-xs font-bold text-white">
                            {{ auth()->user()?->name ? substr(auth()->user()->name, 0, 1) : 'U' }}
                        </span>
                    </div>
                    <span class="truncate">{{ __('jemiyet/web::web.nav.my_profile') }}</span>
                </a>

                <!-- Settings -->
                <a href="/settings" 
                   class="flex items-center space-x-3 px-3 py-3 rounded-xl text-base font-medium transition-all duration-200 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-gray-900 dark:hover:text-white">
                    <div class="flex-shrink-0">
                        @include('jemiyet/web::components.icons.settings', ['class' => 'w-6 h-6'])
                    </div>
                    <span class="truncate">{{ __('jemiyet/web::web.nav.settings') }}</span>
                </a>
            </div>
        </aside>

        <!-- Mobile menu button -->
        <div class="lg:hidden fixed top-4 left-4 z-60">
            <button @click="sidebarOpen = !sidebarOpen" 
                    class="p-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>

        <!-- Main Content -->
        <main class="lg:ml-64 min-h-screen">
            {{ $slot }}
        </main>

        <!-- Search Sidebar -->
        @livewire('search-sidebar')
    </div>

    <script>
        document.addEventListener('alpine:init', () => {
            Alpine.store('search', {
                sidebarOpen: false,
                toggleSidebar() {
                    this.sidebarOpen = !this.sidebarOpen;
                },
                openSidebar() {
                    this.sidebarOpen = true;
                },
                closeSidebar() {
                    this.sidebarOpen = false;
                }
            });
        });
    </script>

    @livewireScripts
</body>
</html> 