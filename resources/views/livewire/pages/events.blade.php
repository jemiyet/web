<div class="max-w-7xl mx-auto p-6">
    <!-- Header -->
    <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">{{ __('jemiyet/web::web.events.title') }}</h1>
        <p class="text-gray-600 dark:text-gray-400">{{ __('jemiyet/web::web.discover_events') }}</p>
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
                       placeholder="{{ __('jemiyet/web::web.search_events') }}"
                       class="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-jemiyet-gold-500 focus:border-transparent text-gray-900 dark:text-white">
            </div>
        </div>
    </div>

    <!-- Events Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        @foreach($this->filteredEvents as $event)
            <div class="bg-gray-900 rounded-2xl overflow-hidden relative min-h-[500px] shadow-2xl">
                <!-- Event Number Badge -->
                <div class="absolute top-4 left-4 z-10">
                    <div class="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
                        <div class="flex items-center space-x-2">
                            <div class="w-6 h-6 bg-gradient-to-br from-jemiyet-gold-600 to-jemiyet-gold-700 rounded-md flex items-center justify-center">
                                <span class="text-white font-bold text-xs">J</span>
                            </div>
                            <span class="text-white font-bold text-sm">{{ $event['number'] }}</span>
                        </div>
                    </div>
                </div>

                <!-- Background Image -->
                <div class="absolute inset-0">
                    <img src="{{ $event['image'] }}" alt="{{ $event['title'] }}" 
                         class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                </div>

                <!-- Content -->
                <div class="relative z-10 h-full flex flex-col justify-between p-6">
                    <!-- Top Content -->
                    <div>
                        <!-- Event Info -->
                        <div class="text-white mb-4">
                            <p class="text-sm opacity-80 mb-1">{{ $event['date'] }}</p>
                            <p class="text-sm opacity-80 mb-1">{{ $event['venue'] }}</p>
                            <p class="text-sm opacity-80 mb-1">{{ $event['time'] }}</p>
                            <div class="text-xs opacity-70 whitespace-pre-line">{{ $event['price_info'] }}</div>
                        </div>

                        <!-- Date and Time Display -->
                        <div class="text-right mb-4">
                            <div class="text-white text-4xl font-bold">{{ $event['datetime'] }}</div>
                        </div>
                    </div>

                    <!-- Bottom Content -->
                    <div>
                        <!-- Main Title -->
                        <div class="mb-6">
                            <h2 class="text-jemiyet-gold-500 text-3xl font-bold mb-2">{{ strtoupper($event['artist']) }}</h2>
                        </div>

                        <!-- Attendees -->
                        <div class="flex items-center justify-between mb-4">
                            <div class="flex items-center space-x-4">
                                <!-- Attendee Count -->
                                <div class="text-white">
                                    <div class="text-4xl font-bold">{{ $event['attendee_count'] }}</div>
                                    <div class="text-sm opacity-80">{{ __('jemiyet/web::web.guests') }}</div>
                                </div>
                                
                                <!-- Attendee Avatars -->
                                <div class="flex -space-x-2">
                                    @for($i = 0; $i < min(4, $event['attendee_count']); $i++)
                                        <img src="/api/placeholder/40/40" alt="Guest {{ $i + 1 }}" 
                                             class="w-10 h-10 rounded-full border-2 border-white">
                                    @endfor
                                </div>
                            </div>
                        </div>

                        <!-- Venue Address -->
                        <div class="text-white text-sm opacity-80 mb-4">
                            {{ $event['address'] }}
                        </div>

                        <!-- Action Button -->
                        <div class="flex justify-end">
                            <button wire:click="attendEvent({{ $event['id'] }})"
                                    class="px-6 py-3 rounded-xl font-medium transition-colors {{ $event['is_attending'] ? 'bg-jemiyet-gold-600 text-white hover:bg-jemiyet-gold-700' : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30' }}">
                                {{ $event['is_attending'] ? __('jemiyet/web::web.attending') : __('jemiyet/web::web.attend') }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        @endforeach
    </div>

    <!-- Empty State -->
    @if(empty($this->filteredEvents))
        <div class="text-center py-12">
            <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">{{ __('jemiyet/web::web.no_events_found') }}</h3>
            <p class="text-gray-600 dark:text-gray-400">{{ __('jemiyet/web::web.try_different_search') }}</p>
        </div>
    @endif
</div> 