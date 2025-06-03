<div class="max-w-6xl mx-auto p-6">
    <!-- Header -->
    <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">{{ __('jemiyet/web::web.groups.title') }}</h1>
        <p class="text-gray-600 dark:text-gray-400">{{ __('jemiyet/web::web.discover_groups') }}</p>
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
                       placeholder="{{ __('jemiyet/web::web.search_groups') }}"
                       class="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-jemiyet-gold-500 focus:border-transparent text-gray-900 dark:text-white">
            </div>
        </div>
    </div>

    <!-- Groups List -->
    <div class="space-y-4">
        @foreach($this->filteredGroups as $group)
            <div class="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-4 flex-1">
                        <!-- Group Image -->
                        <div class="w-16 h-16 rounded-xl overflow-hidden bg-gradient-to-br from-jemiyet-gold-500 to-jemiyet-gold-600 flex-shrink-0">
                            <img src="{{ $group['image'] }}" alt="{{ $group['name'] }}"
                                 class="w-full h-full object-cover">
                        </div>

                        <!-- Group Info -->
                        <div class="flex-1 min-w-0">
                            <div class="flex items-center space-x-2 mb-1">
                                <h3 class="font-semibold text-lg text-gray-900 dark:text-white truncate">{{ $group['name'] }}</h3>
                                @if($group['privacy'] === 'private')
                                    <span class="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-lg text-xs font-medium">
                                        {{ __('jemiyet/web::web.private') }}
                                    </span>
                                @endif
                            </div>
                            <p class="text-gray-600 dark:text-gray-400 text-sm line-clamp-1 mb-2">{{ $group['description'] }}</p>
                            
                            <!-- Stats -->
                            <div class="flex items-center space-x-4 text-sm text-gray-500">
                                <span class="flex items-center space-x-1">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span>{{ number_format($group['member_count']) }} üye</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- Join Button -->
                    <div class="flex-shrink-0 ml-4">
                        <button wire:click="joinGroup({{ $group['id'] }})"
                                class="px-6 py-2.5 rounded-xl font-medium transition-colors {{ $group['is_member'] ? 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600' : 'bg-jemiyet-gold-600 text-white hover:bg-jemiyet-gold-700' }}">
                            @if($group['is_member'])
                                {{ __('jemiyet/web::web.leave_group') }}
                            @elseif($group['privacy'] === 'private')
                                {{ __('jemiyet/web::web.request_to_join') }}
                            @else
                                {{ __('jemiyet/web::web.join_group') }}
                            @endif
                        </button>
                    </div>
                </div>
            </div>
        @endforeach
    </div>

    <!-- Empty State -->
    @if(empty($this->filteredGroups))
        <div class="text-center py-12">
            <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">{{ __('jemiyet/web::web.no_groups_found') }}</h3>
            <p class="text-gray-600 dark:text-gray-400">{{ __('jemiyet/web::web.try_different_search') }}</p>
        </div>
    @endif
</div> 