@extends('jemiyet/web::layouts.app-simple')

@section('content')
<div class="flex items-center justify-center min-h-screen">
    <div class="text-center">
        <div class="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-jemiyet-gold-600 to-jemiyet-gold-700 rounded-full flex items-center justify-center">
            <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">{{ $title ?? 'Coming Soon' }}</h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Bu sayfa henüz geliştiriliyor. Yakında yayında!
        </p>
        <a href="/home" class="inline-flex items-center px-6 py-3 bg-jemiyet-gold-600 text-white font-medium rounded-xl hover:bg-jemiyet-gold-700 transition-colors">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Ana Sayfaya Dön
        </a>
    </div>
</div>
@endsection 