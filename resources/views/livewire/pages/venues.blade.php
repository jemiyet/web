<div class="max-w-6xl mx-auto p-6">
    <!-- Header -->
    <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">{{ __('jemiyet/web::web.venues.title') }}</h1>
        <p class="text-gray-600 dark:text-gray-400">{{ __('jemiyet/web::web.discover_venues') }}</p>
    </div>

    <!-- Search -->
    <div class="mb-8">
        <div class="max-w-md">
            <div class="relative">
                <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input wire:model.live="searchTerm"
                       type="text"
                       placeholder="{{ __('jemiyet/web::web.search_venues') }}"
                       class="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-jemiyet-gold-500 focus:border-transparent text-gray-900 dark:text-white">
            </div>
        </div>
    </div>

    <!-- Venues Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        @foreach($this->filteredVenues as $venue)
            <div class="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <!-- Venue Logo -->
                <div class="w-full h-24 bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden mb-4">
                    <img src="{{ $venue['logo'] }}" alt="{{ $venue['name'] }}" 
                         class="w-full h-full object-cover">
                </div>

                <!-- Venue Info -->
                <div class="text-center mb-4">
                    <h3 class="font-semibold text-lg text-gray-900 dark:text-white mb-1">{{ $venue['name'] }}</h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">{{ $venue['location'] }}</p>
                    <p class="text-gray-500 text-xs">{{ $venue['district'] }}</p>
                </div>

                <!-- Rating and Price -->
                <div class="flex items-center justify-between mb-4 text-sm">
                    <div class="flex items-center space-x-1">
                        <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300">{{ $venue['rating'] }}</span>
                    </div>
                    <span class="text-gray-600 dark:text-gray-400">{{ $venue['price_range'] }}</span>
                </div>

                <!-- Vote Section -->
                <div class="flex items-center justify-between">
                    <div class="text-center">
                        <div class="text-2xl font-bold text-gray-900 dark:text-white">{{ number_format($venue['vote_count']) }}</div>
                        <div class="text-xs text-gray-500">{{ __('jemiyet/web::web.votes') }}</div>
                    </div>
                    
                    <button wire:click="voteVenue({{ $venue['id'] }})"
                            class="px-4 py-2 rounded-xl font-medium transition-colors {{ $venue['has_voted'] ? 'bg-jemiyet-gold-600 text-white hover:bg-jemiyet-gold-700' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600' }}">
                        @if($venue['has_voted'])
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                            </svg>
                        @else
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        @endif
                    </button>
                </div>
            </div>
        @endforeach
    </div>

    <!-- Empty State -->
    @if(empty($this->filteredVenues))
        <div class="text-center py-12">
            <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">{{ __('jemiyet/web::web.no_venues_found') }}</h3>
            <p class="text-gray-600 dark:text-gray-400">{{ __('jemiyet/web::web.try_different_search') }}</p>
        </div>
    @endif
</div> 