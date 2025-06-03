<div class="max-w-4xl mx-auto p-6">
    <!-- Header -->
    <div class="flex items-center justify-between mb-8">
        <div>
            <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">{{ __('jemiyet/web::web.notifications.title') }}</h1>
            <p class="text-gray-600 dark:text-gray-400">{{ __('jemiyet/web::web.stay_updated') }}</p>
        </div>
        
        <button wire:click="markAllAsRead"
                class="px-4 py-2 bg-jemiyet-gold-600 text-white rounded-xl font-medium hover:bg-jemiyet-gold-700 transition-colors">
            {{ __('jemiyet/web::web.mark_all_read') }}
        </button>
    </div>

    <!-- Notifications List -->
    <div class="space-y-4">
        @foreach($notifications as $notification)
            <div wire:click="markAsRead({{ $notification['id'] }})"
                 class="flex items-start space-x-4 p-4 rounded-2xl cursor-pointer transition-colors {{ $notification['is_read'] ? 'bg-gray-50 dark:bg-gray-900/30' : 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800' }} hover:bg-gray-100 dark:hover:bg-gray-800">
                
                <!-- Notification Icon/Avatar -->
                <div class="flex-shrink-0">
                    @if(isset($notification['user']))
                        <img src="{{ $notification['user']['avatar'] }}" alt="{{ $notification['user']['name'] }}" 
                             class="w-12 h-12 rounded-full">
                    @else
                        <div class="w-12 h-12 rounded-full bg-jemiyet-gold-600 flex items-center justify-center">
                            @switch($notification['type'])
                                @case('event')
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    @break
                                @case('privilege')
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                    </svg>
                                    @break
                                @default
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5-5-5h5v-5a7.5 7.5 0 00-15 0v5h5l-5 5-5-5h5V7a12 12 0 0124 0v10z" />
                                    </svg>
                            @endswitch
                        </div>
                    @endif
                </div>

                <!-- Notification Content -->
                <div class="flex-1 min-w-0">
                    <div class="flex items-start justify-between">
                        <div class="flex-1">
                            <h3 class="font-semibold text-gray-900 dark:text-white mb-1">{{ $notification['title'] }}</h3>
                            <p class="text-gray-600 dark:text-gray-400 text-sm">{{ $notification['message'] }}</p>
                        </div>
                        
                        <!-- Unread indicator -->
                        @if(!$notification['is_read'])
                            <div class="w-3 h-3 bg-blue-500 rounded-full ml-2 flex-shrink-0"></div>
                        @endif
                    </div>
                    
                    <p class="text-gray-500 text-xs mt-2">{{ $notification['time'] }}</p>
                </div>

                <!-- Notification Type Icon -->
                <div class="flex-shrink-0">
                    @switch($notification['type'])
                        @case('like')
                            <div class="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                                <svg class="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            @break
                        @case('comment')
                            <div class="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                                <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>
                            @break
                        @case('follow')
                            <div class="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                                <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            @break
                        @case('event')
                            <div class="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                                <svg class="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            @break
                        @case('group')
                            <div class="w-8 h-8 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center">
                                <svg class="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            @break
                        @case('privilege')
                            <div class="w-8 h-8 bg-jemiyet-gold-100 dark:bg-jemiyet-gold-900/30 rounded-full flex items-center justify-center">
                                <svg class="w-4 h-4 text-jemiyet-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                </svg>
                            </div>
                            @break
                    @endswitch
                </div>
            </div>
        @endforeach
    </div>

    <!-- Empty State -->
    @if(empty($notifications))
        <div class="text-center py-12">
            <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5-5-5h5v-5a7.5 7.5 0 00-15 0v5h5l-5 5-5-5h5V7a12 12 0 0124 0v10z" />
            </svg>
            <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">{{ __('jemiyet/web::web.no_notifications') }}</h3>
            <p class="text-gray-600 dark:text-gray-400">{{ __('jemiyet/web::web.no_notifications_desc') }}</p>
        </div>
    @endif
</div> 