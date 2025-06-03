<div class="max-w-6xl mx-auto p-6">
    <!-- Header -->
    <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">{{ __('jemiyet/web::web.privileges.title') }}</h1>
        <p class="text-gray-600 dark:text-gray-400">{{ __('jemiyet/web::web.discover_privileges') }}</p>
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
                       placeholder="{{ __('jemiyet/web::web.search_privileges') }}"
                       class="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-jemiyet-gold-500 focus:border-transparent text-gray-900 dark:text-white">
            </div>
        </div>
    </div>

    <!-- Privileges Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        @foreach($this->filteredPrivileges as $privilege)
            <div class="bg-gray-50 dark:bg-gray-900/50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <!-- Privilege Image -->
                <div class="aspect-video bg-gradient-to-br from-jemiyet-gold-500 to-jemiyet-gold-600 relative">
                    <img src="{{ $privilege['image'] }}" alt="{{ $privilege['title'] }}"
                         class="w-full h-full object-cover">
                    
                    <!-- Discount Badge -->
                    <div class="absolute top-3 right-3">
                        <span class="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                            {{ $privilege['discount_percentage'] }}% OFF
                        </span>
                    </div>

                    <!-- Brand Badge -->
                    <div class="absolute bottom-3 left-3">
                        <span class="bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-medium">
                            {{ $privilege['brand'] }}
                        </span>
                    </div>
                </div>

                <!-- Privilege Info -->
                <div class="p-6">
                    <div class="mb-4">
                        <h3 class="font-bold text-xl text-gray-900 dark:text-white mb-2">{{ $privilege['title'] }}</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-sm">{{ $privilege['description'] }}</p>
                    </div>

                    <!-- Stats -->
                    <div class="flex items-center justify-between mb-4 text-sm text-gray-500">
                        <span class="flex items-center space-x-1">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span>{{ number_format($privilege['claim_count']) }} kişi aldı</span>
                        </span>
                        
                        <span class="flex items-center space-x-1">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>{{ $privilege['valid_until'] }}</span>
                        </span>
                    </div>

                    <!-- Claim Button -->
                    @if($privilege['is_claimed'])
                        <div class="text-center">
                            <div class="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 mb-3">
                                <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">{{ __('jemiyet/web::web.your_code') }}:</p>
                                <div class="bg-white dark:bg-gray-900 rounded-lg p-3 border-2 border-dashed border-jemiyet-gold-500">
                                    <code class="text-lg font-bold text-jemiyet-gold-600">{{ $privilege['code'] }}</code>
                                </div>
                            </div>
                            <span class="text-green-600 text-sm font-medium">✓ {{ __('jemiyet/web::web.claimed') }}</span>
                        </div>
                    @else
                        <button wire:click="claimPrivilege({{ $privilege['id'] }})"
                                class="w-full py-3 bg-jemiyet-gold-600 text-white rounded-xl font-medium hover:bg-jemiyet-gold-700 transition-colors">
                            {{ __('jemiyet/web::web.get_code') }}
                        </button>
                    @endif
                </div>
            </div>
        @endforeach
    </div>

    <!-- Empty State -->
    @if(empty($this->filteredPrivileges))
        <div class="text-center py-12">
            <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
            <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">{{ __('jemiyet/web::web.no_privileges_found') }}</h3>
            <p class="text-gray-600 dark:text-gray-400">{{ __('jemiyet/web::web.try_different_search') }}</p>
        </div>
    @endif
</div> 