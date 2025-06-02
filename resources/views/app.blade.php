<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Jemiyet') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Favicon -->
        <link rel="icon" type="image/svg+xml" href="/favicon.svg">

        <!-- Meta Tags -->
        <meta name="description" content="Jemiyet - Sosyal Network Platformu">
        <meta name="author" content="Jemiyet Team">

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['packages/jemiyet/web/resources/js/app.tsx', 'packages/jemiyet/web/resources/css/app.css'])
        @inertiaHead
    </head>
    <body class="font-sans antialiased bg-gray-900 text-white">
        @inertia
    </body>
</html> 