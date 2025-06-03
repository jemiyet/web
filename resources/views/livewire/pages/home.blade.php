<div class="flex flex-col lg:flex-row gap-4 lg:gap-8 p-4 lg:p-6" 
     x-data="{ 
         isLoading: @entangle('loading'),
         hasMore: @entangle('hasMorePosts'),
         observer: null,
         setupInfiniteScroll() {
             if (this.observer) {
                 this.observer.disconnect();
             }
             
             this.observer = new IntersectionObserver((entries) => {
                 entries.forEach(entry => {
                     if (entry.isIntersecting && this.hasMore && !this.isLoading) {
                         console.log('Triggering loadMore - hasMore:', this.hasMore, 'isLoading:', this.isLoading);
                         $wire.loadMore();
                     }
                 });
             }, {
                 threshold: 0.1,
                 rootMargin: '100px'
             });
             
             // Observe the loading trigger element
             const trigger = this.$refs.loadingTrigger;
             if (trigger) {
                 this.observer.observe(trigger);
                 console.log('Observer setup complete, watching trigger element');
             } else {
                 console.log('Loading trigger element not found');
             }
         },
         init() {
             console.log('Alpine component initialized');
             this.$nextTick(() => {
                 this.setupInfiniteScroll();
             });
         },
         destroy() {
             if (this.observer) {
                 this.observer.disconnect();
             }
         }
     }"
     x-init="init()">
    <!-- Main Feed -->
    <div class="flex-1 w-full lg:max-w-2xl lg:mr-8">
        <!-- Flash Message -->
        @if (session()->has('message'))
            <div class="mb-4 lg:mb-6 p-4 bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 text-green-800 dark:text-green-200 rounded-xl">
                {{ session('message') }}
            </div>
        @endif

        @if (session()->has('error'))
            <div class="mb-4 lg:mb-6 p-4 bg-red-100 dark:bg-red-900 border border-red-300 dark:border-red-700 text-red-800 dark:text-red-200 rounded-xl">
                {{ session('error') }}
            </div>
        @endif

        <!-- Initial Loading State -->
        @if($initialLoading)
            <div class="text-center py-8 lg:py-12">
                <div class="flex items-center justify-center space-x-2 text-gray-500">
                    <svg class="animate-spin w-6 h-6 lg:w-8 lg:h-8" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span class="text-base lg:text-lg">{{ __('jemiyet/web::web.loading_feed') }}</span>
                </div>
            </div>
        @else
            <!-- Stories -->
            @if(count($stories) > 0)
            <div class="rounded-2xl p-4 lg:p-6 mb-4 lg:mb-6 bg-gray-50 dark:bg-gray-900/50">
                <h3 class="text-sm lg:text-base font-semibold mb-3 lg:mb-4">{{ __('jemiyet/web::web.stories') }}</h3>
                <div class="flex space-x-3 lg:space-x-4 overflow-x-auto pb-2">
                    @foreach($stories as $story)
                        <div class="flex flex-col items-center space-y-2 flex-shrink-0">
                            <div class="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-jemiyet-gold-600 to-jemiyet-gold-700 p-0.5">
                                <img src="{{ $story['avatar'] }}" alt="{{ $story['name'] }}"
                                     class="w-full h-full rounded-full object-cover">
                            </div>
                            <span class="text-xs font-medium truncate w-14 lg:w-16 text-center">
                                {{ $story['username'] }}
                            </span>
                        </div>
                    @endforeach
                </div>
            </div>
            @endif

            <!-- Create Post -->
            @auth
            <div class="rounded-2xl p-4 lg:p-6 mb-4 lg:mb-6 bg-gray-50 dark:bg-gray-900/50">
                <div class="flex space-x-3 lg:space-x-4">
                    <div class="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-jemiyet-gold-500 to-jemiyet-gold-600 flex items-center justify-center">
                        <span class="text-white text-sm lg:text-base font-bold">
                            {{ auth()->user()?->name ? substr(auth()->user()->name, 0, 1) : 'U' }}
                        </span>
                    </div>
                    <div class="flex-1">
                        <form wire:submit="createPost">
                            <textarea
                                wire:model="newPostContent"
                                placeholder="{{ __('jemiyet/web::web.whats_happening') }}"
                                class="w-full bg-transparent resize-none border-none outline-none text-sm lg:text-base placeholder-gray-500 text-gray-900 dark:text-white focus:ring-0"
                                rows="3"></textarea>
                            <div class="flex justify-between items-center mt-3 lg:mt-4">
                                <div class="flex space-x-3 lg:space-x-4">
                                    <button type="button" class="text-blue-500 hover:text-blue-600 transition-colors">
                                        <svg class="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </button>
                                </div>
                                <button type="submit" 
                                        class="bg-blue-500 hover:bg-blue-600 text-white px-4 lg:px-6 py-2 rounded-xl text-sm lg:text-base font-medium transition-colors disabled:opacity-50"
                                        :disabled="!$wire.newPostContent.trim()">
                                    {{ __('jemiyet/web::web.share') }}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            @endauth

            <!-- Posts -->
            <div class="space-y-4 lg:space-y-6">
                @if(count($posts) > 0)
                    @foreach($posts as $post)
                        <div class="rounded-2xl p-4 lg:p-6 bg-gray-50 dark:bg-gray-900/50" wire:key="post-{{ $post['id'] }}">
                            <!-- Post Header -->
                            <div class="flex items-center space-x-3 mb-3 lg:mb-4">
                                <img src="{{ $post['user']['avatar'] }}" alt="{{ $post['user']['name'] }}"
                                     class="w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover">
                                <div class="flex-1 min-w-0">
                                    <h4 class="font-medium text-sm text-gray-900 dark:text-white truncate">{{ $post['user']['name'] }}</h4>
                                    <p class="text-xs text-gray-500 truncate">{{ $post['user']['username_display'] ?? '@' . $post['user']['username'] }} • {{ $this->formatTime($post['created_at']) }}</p>
                                </div>
                                <button class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 flex-shrink-0">
                                    <svg class="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                    </svg>
                                </button>
                            </div>

                            <!-- Post Content -->
                            <div class="mb-3 lg:mb-4">
                                <p class="text-sm lg:text-base text-gray-900 dark:text-white leading-relaxed">{{ $post['content'] }}</p>
                                
                                <!-- Images/Videos -->
                                @if(isset($post['images']) && count($post['images']) > 0)
                                    <div class="mt-3 lg:mt-4 {{ count($post['images']) === 1 ? 'grid grid-cols-1' : 'grid grid-cols-1 sm:grid-cols-2 gap-2' }}">
                                        @foreach($post['images'] as $image)
                                            @if($post['post_type'] === 'video')
                                                <div class="relative video-container">
                                                    <video
                                                        muted
                                                        autoplay
                                                        loop
                                                        playsinline
                                                        preload="auto"
                                                        class="auto-play-video w-full max-h-[80vh] object-contain rounded-xl">
                                                        <source src="{{ $image }}" type="video/mp4">
                                                        {{ __('jemiyet/web::web.video_not_supported') }}
                                                    </video>
                                                    <button class="mute-toggle-btn absolute top-2 right-2 bg-black/50 text-white rounded-full p-1 hover:bg-black/70 transition-colors" title="Toggle Sound">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 volume-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path class="volume-on" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5L6 9H2v6h4l5 4V5z" />
                                                            <path class="volume-off hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.5 12l-2.5-2.5m0 5l2.5-2.5m2.5 0l-2.5-2.5m0 5l2.5-2.5" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            @else
                                                <img src="{{ $image }}" alt="Post image"
                                                     class="w-full max-h-[80vh] object-contain rounded-xl"
                                                     style="aspect-ratio: {{ max($post['media_width'],1) }} / {{ max($post['media_height'],1) }};">
                                            @endif
                                        @endforeach
                                    </div>
                                @endif
                            </div>

                            <!-- Post Actions -->
                            <div class="flex items-center pt-3 lg:pt-4 border-t border-gray-200 dark:border-gray-700">
                                <div class="flex items-center space-x-4 lg:space-x-6">
                                    <button wire:click="toggleLike({{ $post['id'] }})"
                                            class="flex items-center space-x-2 transition-colors {{ $post['is_liked'] ? 'text-red-500' : 'text-gray-500 hover:text-red-500' }}">
                                        <svg class="w-5 h-5" fill="{{ $post['is_liked'] ? 'currentColor' : 'none' }}" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                        <span class="text-sm font-medium">{{ $post['likes_count'] }}</span>
                                    </button>
                                    
                                    <button wire:click="showComments({{ $post['id'] }})" class="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                        <span class="text-sm font-medium">{{ $post['comments_count'] }}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    @endforeach

                    <!-- Infinite Scroll Trigger -->
                    @if($hasMorePosts)
                        <div x-ref="loadingTrigger" class="py-6 lg:py-8 min-h-[50px]">
                            <div x-show="isLoading" class="text-center">
                                <div class="flex items-center justify-center space-x-2 text-gray-500">
                                    <svg class="animate-spin w-5 h-5 lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24">
                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span class="text-sm lg:text-base">{{ __('jemiyet/web::web.loading') }}</span>
                                </div>
                            </div>
                            <div x-show="!isLoading" class="text-center text-gray-400">
                                <div class="inline-flex items-center space-x-2">
                                    <div class="w-8 h-px bg-gray-300 dark:bg-gray-600"></div>
                                    <span class="text-xs">Scroll for more</span>
                                    <div class="w-8 h-px bg-gray-300 dark:bg-gray-600"></div>
                                </div>
                            </div>
                        </div>
                    @endif

                @else
                    <div class="rounded-2xl p-8 lg:p-12 bg-gray-50 dark:bg-gray-900/50 text-center">
                        <div class="text-gray-400 mb-4">
                            <svg class="w-12 h-12 lg:w-16 lg:h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2H15" />
                            </svg>
                        </div>
                        <h3 class="text-base lg:text-lg font-medium text-gray-900 dark:text-white mb-2">{{ __('jemiyet/web::web.no_posts_yet') }}</h3>
                        <p class="text-sm lg:text-base text-gray-500">{{ __('jemiyet/web::web.no_posts_message') }}</p>
                    </div>
                @endif
            </div>

            <!-- End of Content Indicator -->
            @if(!$hasMorePosts && count($posts) > 0)
                <div class="text-center py-6 lg:py-8 text-gray-500">
                    <div class="inline-flex items-center space-x-2">
                        <div class="w-6 lg:w-8 h-px bg-gray-300 dark:bg-gray-600"></div>
                        <span class="text-xs lg:text-sm">{{ __('jemiyet/web::web.no_more_posts') }}</span>
                        <div class="w-6 lg:w-8 h-px bg-gray-300 dark:bg-gray-600"></div>
                    </div>
                </div>
            @endif
        @endif
    </div>

    <!-- Right Sidebar -->
    <div class="w-full lg:w-80 lg:flex-shrink-0 mt-6 lg:mt-0 lg:block">
        <!-- Suggested Users -->
        @if(count($suggestedUsers) > 0)
        <div class="rounded-2xl p-4 lg:p-6 bg-gray-50 dark:bg-gray-900/50">
            <h3 class="text-sm lg:text-base font-semibold mb-3 lg:mb-4">{{ __('jemiyet/web::web.suggested_people') }}</h3>
            <div class="space-y-3">
                @foreach($suggestedUsers as $user)
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-3 min-w-0 flex-1">
                            <img src="{{ $user['avatar'] }}" alt="{{ $user['name'] }}"
                                 class="w-8 h-8 lg:w-10 lg:h-10 rounded-full object-cover flex-shrink-0">
                            <div class="min-w-0 flex-1">
                                <h4 class="font-medium text-xs lg:text-sm text-gray-900 dark:text-white truncate">{{ $user['name'] }}</h4>
                                <p class="text-xs text-gray-500 truncate">{{ $user['username_display'] ?? '@' . $user['username'] }}</p>
                            </div>
                        </div>
                        <button wire:click="followUser({{ $user['id'] }})"
                                class="px-3 py-1 rounded-lg text-xs font-medium transition-colors flex-shrink-0 {{ $user['isFollowing'] ? 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600' : 'bg-blue-500 text-white hover:bg-blue-600' }}">
                            {{ $user['isFollowing'] ? __('jemiyet/web::web.following') : __('jemiyet/web::web.follow') }}
                        </button>
                    </div>
                @endforeach
            </div>
        </div>
        @endif
    </div>

    <!-- Comments Modal -->
    @if($showCommentsModal)
        <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" wire:click="closeComments">
            <div class="bg-white dark:bg-gray-900 rounded-2xl p-4 lg:p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto" wire:click.stop>
                <div class="flex justify-between items-center mb-4 lg:mb-6">
                    <h3 class="text-lg lg:text-xl font-semibold">{{ __('jemiyet/web::web.comments') }}</h3>
                    <button wire:click="closeComments" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                
                <div class="space-y-4">
                    <!-- Comment input -->
                    <div class="border-t pt-4">
                        <div class="flex space-x-3">
                            <div class="w-8 h-8 rounded-full bg-gradient-to-br from-jemiyet-gold-500 to-jemiyet-gold-600 flex items-center justify-center flex-shrink-0">
                                <span class="text-white text-xs font-bold">
                                    {{ auth()->user()?->name ? substr(auth()->user()->name, 0, 1) : 'U' }}
                                </span>
                            </div>
                            <div class="flex-1 min-w-0">
                                <div class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                                    <input type="text" placeholder="{{ __('jemiyet/web::web.write_comment') }}" 
                                           class="flex-1 bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-2 text-sm border-none outline-none focus:ring-2 focus:ring-blue-500">
                                    <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                                        {{ __('jemiyet/web::web.send') }}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Comments will be loaded here -->
                    <div class="text-center text-gray-500 py-8">
                        {{ __('jemiyet/web::web.no_comments_yet') }}
                    </div>
                </div>
            </div>
        </div>
    @endif
</div>

@push('scripts')
<script>
  document.addEventListener('livewire:init', () => {
    let globalMuted = localStorage.getItem('jemiyetVideoMuted');
    if (globalMuted === null) {
      globalMuted = true; // Varsayılan olarak sessiz başla
    } else {
      globalMuted = JSON.parse(globalMuted);
    }

    let videoObserver;

    function updateMuteIcon(button, muted) {
      const icon = button.querySelector('.volume-icon');
      if (icon) {
        const volumeOn = icon.querySelector('.volume-on');
        const volumeOff = icon.querySelector('.volume-off');
        if (volumeOn && volumeOff) {
          volumeOn.classList.toggle('hidden', muted);
          volumeOff.classList.toggle('hidden', !muted);
        }
      }
    }

    function setupVideoObserver() {
      if (videoObserver) {
        videoObserver.disconnect();
      }

      videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const video = entry.target;
          if (entry.isIntersecting) {
            // Video görünüme girdi
            console.log('Video girdi:', video.src, 'Muted:', globalMuted);
            video.muted = globalMuted; // Her zaman globalMuted durumunu uygula
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise.catch(error => {
                console.warn('Video oynatma hatası (görünür):', error, video.src);
                // Tarayıcı, kullanıcı etkileşimi olmadan sessiz bile olsa oynatmayı engelleyebilir.
                // Bu durumda, video elementi üzerindeki `autoplay` attribute'una güveniriz.
              });
            }
          } else {
            // Video görünümden çıktı
            console.log('Video çıktı:', video.src);
            video.pause();
          }
        });
      }, { threshold: 0.5 }); // %50 görünürlükte tetikle
    }

    function initializePageVideos() {
      console.log('Videolar initialize ediliyor. Global Mute:', globalMuted);
      setupVideoObserver();

      document.querySelectorAll('.auto-play-video').forEach(video => {
        // Tarayıcının autoplay policy'sine yardımcı olmak için:
        video.muted = globalMuted; 
        video.loop = true;
        video.playsInline = true;
        // `autoplay` attribute'u HTML'de zaten var, bu sayede ilk yüklemede deneme yapar.

        const videoContainer = video.closest('.video-container');
        if (videoContainer) {
          const muteButton = videoContainer.querySelector('.mute-toggle-btn');
          if (muteButton && !muteButton.__eventAttached) {
            updateMuteIcon(muteButton, globalMuted); // İkonu başlangıçta ayarla

            muteButton.addEventListener('click', () => {
              globalMuted = !globalMuted;
              localStorage.setItem('jemiyetVideoMuted', JSON.stringify(globalMuted));
              console.log('Global mute değişti:', globalMuted);

              // Tüm videoların mute durumunu güncelle
              document.querySelectorAll('.auto-play-video').forEach(v => {
                v.muted = globalMuted;
                const currentContainer = v.closest('.video-container');
                if (currentContainer) {
                  const btn = currentContainer.querySelector('.mute-toggle-btn');
                  if (btn) updateMuteIcon(btn, globalMuted);
                }
                // Eğer video görünürdeyse ve sesi açıldıysa oynamaya devam etmeli
                // (zaten observer tarafından handle ediliyor)
              });
            });
            muteButton.__eventAttached = true;
          }
        }
        videoObserver.observe(video);
      });
    }

    // İlk yükleme
    initializePageVideos();

    // Livewire DOM güncellemelerinden sonra videoları yeniden initialize et
    Livewire.hook('message.processed', () => {
      console.log('Livewire DOM güncellendi, videolar yeniden initialize ediliyor.');
      // Önceki observer'ı temizle ve butonlardaki event listener'ları koru (idempotency)
      // veya butonları da yeniden işle. Şimdilik basitçe yeniden tam init yapalım.
      document.querySelectorAll('.mute-toggle-btn').forEach(btn => { btn.__eventAttached = false; });
      initializePageVideos();
    });
  });
</script>
@endpush