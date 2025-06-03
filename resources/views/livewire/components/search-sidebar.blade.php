<!-- Search Sidebar Wrapper -->
<div x-data="{ open: false }" 
     x-show="$store.search.sidebarOpen"

     @click.away="$store.search.closeSidebar()"
     
    <!-- Search Sidebar Overlay -->
    <div x-show="$store.search.sidebarOpen" 
         x-transition:enter="transition-opacity ease-linear duration-300"
         x-transition:enter-start="opacity-0"
         x-transition:enter-end="opacity-100"
         x-transition:leave="transition-opacity ease-linear duration-300"
         x-transition:leave-start="opacity-100"
         x-transition:leave-end="opacity-0"
         class="fixed inset-0 z-[59] lg:hidden" 
         style="display: none;">
        <div class="fixed inset-0 bg-black bg-opacity-50" @click="$store.search.closeSidebar()"></div>
    </div>

    <!-- Search Sidebar -->
    <div x-show="$store.search.sidebarOpen"
         x-transition:enter="transition ease-in-out duration-300 transform"
         x-transition:enter-start="-translate-x-full"
         x-transition:enter-end="translate-x-0"
         x-transition:leave="transition ease-in-out duration-300 transform"
         x-transition:leave-start="translate-x-0"
         x-transition:leave-end="-translate-x-full"
         class="fixed top-0 left-0 z-[60] h-full w-96 bg-white dark:bg-gray-900 shadow-xl border-r border-gray-200 dark:border-gray-700"
         style="display: none;">
     
    <!-- Header -->
    <div class="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 class="text-xl font-bold text-gray-900 dark:text-white">{{ __('jemiyet/web::web.search') }}</h2>
        <button @click="$store.search.closeSidebar()" class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    </div>

    <!-- Search Input -->
    <div class="p-4">
        <div class="relative">
            <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input wire:model.live="searchTerm"
                   type="text"
                   placeholder="{{ __('jemiyet/web::web.search_placeholder') }}"
                   class="w-full pl-10 pr-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-jemiyet-gold-500 focus:border-transparent text-gray-900 dark:text-white"
                   autofocus>
        </div>
    </div>

    <!-- Search Tabs -->
    @if(!empty($searchTerm) && strlen($searchTerm) >= 2)
        <div class="px-4">
            <div class="flex space-x-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                <button wire:click="setTab('all')" 
                        class="flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors {{ $selectedTab === 'all' ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300' }}">
                    {{ __('jemiyet/web::web.all') }}
                </button>
                <button wire:click="setTab('users')" 
                        class="flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors {{ $selectedTab === 'users' ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300' }}">
                    {{ __('jemiyet/web::web.users') }}
                </button>
                <button wire:click="setTab('posts')" 
                        class="flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors {{ $selectedTab === 'posts' ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300' }}">
                    {{ __('jemiyet/web::web.posts') }}
                </button>
            </div>
        </div>
    @endif

    <!-- Search Results -->
    <div class="flex-1 overflow-y-auto p-4">
        @if(empty($searchTerm) || strlen($searchTerm) < 2)
            <!-- Recent Searches or Suggestions -->
            <div class="text-center py-8">
                <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <p class="text-gray-500 dark:text-gray-400">{{ __('jemiyet/web::web.start_typing_to_search') }}</p>
            </div>
        @else
            <!-- Users Results -->
            @if(($selectedTab === 'all' || $selectedTab === 'users') && !empty($searchResults['users']))
                <div class="mb-6">
                    <h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-3">{{ __('jemiyet/web::web.users') }}</h3>
                    <div class="space-y-3">
                        @foreach($searchResults['users'] as $user)
                            <div class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                                <img src="{{ $user['avatar'] }}" alt="{{ $user['name'] }}" class="w-10 h-10 rounded-full">
                                <div class="flex-1 min-w-0">
                                    <p class="text-sm font-medium text-gray-900 dark:text-white truncate">{{ $user['name'] }}</p>
                                    <p class="text-xs text-gray-500">@{{ $user['username'] }} • {{ number_format($user['follower_count']) }} {{ __('jemiyet/web::web.followers') }}</p>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            @endif

            <!-- Posts Results -->
            @if(($selectedTab === 'all' || $selectedTab === 'posts') && !empty($searchResults['posts']))
                <div class="mb-6">
                    <h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-3">{{ __('jemiyet/web::web.posts') }}</h3>
                    <div class="space-y-3">
                        @foreach($searchResults['posts'] as $post)
                            <div class="p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                                <div class="flex items-center space-x-2 mb-2">
                                    <img src="{{ $post['user']['avatar'] }}" alt="{{ $post['user']['name'] }}" class="w-6 h-6 rounded-full">
                                    <span class="text-xs font-medium text-gray-700 dark:text-gray-300">{{ $post['user']['name'] }}</span>
                                </div>
                                <p class="text-sm text-gray-900 dark:text-white line-clamp-2">{{ $post['content'] }}</p>
                                <p class="text-xs text-gray-500 mt-1">{{ $post['likes_count'] }} {{ __('jemiyet/web::web.likes') }}</p>
                            </div>
                        @endforeach
                    </div>
                </div>
            @endif

            <!-- Groups Results -->
            @if(($selectedTab === 'all' || $selectedTab === 'groups') && !empty($searchResults['groups']))
                <div class="mb-6">
                    <h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-3">{{ __('jemiyet/web::web.groups') }}</h3>
                    <div class="space-y-3">
                        @foreach($searchResults['groups'] as $group)
                            <div class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                                <img src="{{ $group['image'] }}" alt="{{ $group['name'] }}" class="w-10 h-10 rounded-lg">
                                <div class="flex-1 min-w-0">
                                    <p class="text-sm font-medium text-gray-900 dark:text-white truncate">{{ $group['name'] }}</p>
                                    <p class="text-xs text-gray-500">{{ number_format($group['member_count']) }} {{ __('jemiyet/web::web.members') }}</p>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            @endif

            <!-- Events Results -->
            @if(($selectedTab === 'all' || $selectedTab === 'events') && !empty($searchResults['events']))
                <div class="mb-6">
                    <h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-3">{{ __('jemiyet/web::web.events') }}</h3>
                    <div class="space-y-3">
                        @foreach($searchResults['events'] as $event)
                            <div class="p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                                <p class="text-sm font-medium text-gray-900 dark:text-white">{{ $event['title'] }}</p>
                                <p class="text-xs text-gray-500">{{ $event['date'] }} • {{ $event['time'] }}</p>
                                <p class="text-xs text-gray-500">{{ $event['venue'] }} • {{ $event['attendee_count'] }} {{ __('jemiyet/web::web.attendees') }}</p>
                            </div>
                        @endforeach
                    </div>
                </div>
            @endif

            <!-- No Results -->
            @if(empty($searchResults['users']) && empty($searchResults['posts']) && empty($searchResults['groups']) && empty($searchResults['events']))
                <div class="text-center py-8">
                    <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.383-1.005-5.824-2.598M15 6.306a7.962 7.962 0 00-6 0" />
                    </svg>
                    <p class="text-gray-500 dark:text-gray-400">{{ __('jemiyet/web::web.no_results_found') }}</p>
                </div>
            @endif
        @endif
    </div>
    </div>
</div> 