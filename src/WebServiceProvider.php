<?php

namespace Jemiyet\Web;

use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class WebServiceProvider extends ServiceProvider
{
    public function register()
    {
        // Custom middleware'i register et
        $this->app['router']->aliasMiddleware('web_auth', \Jemiyet\Web\Middleware\HandleWebAuth::class);
    }

    public function boot()
    {
        // Auth redirect'leri düzenle
        $this->configureAuth();
        
        // Web middleware group ile route'ları yükle
        $this->app['router']->group([
            'middleware' => 'web'
        ], function () {
            $this->loadRoutesFrom(__DIR__.'/../routes/web.php');
        });
        
        $this->loadViewsFrom(__DIR__.'/../resources/views', 'web');
        $this->loadTranslationsFrom(__DIR__.'/../resources/lang', 'web');
        
        // Web routes için Inertia view'ını ayarla
        if ($this->app->runningInConsole() === false) {
            $this->configureInertia();
        }
        
        // Inertia sayfaları için
        $this->publishes([
            __DIR__.'/../resources/js' => resource_path('js/Pages/Web'),
        ], 'web-pages');
        
        // Dil dosyalarını publish et
        $this->publishes([
            __DIR__.'/../resources/lang' => $this->app->langPath('vendor/web'),
        ], 'web-lang');
    }

    private function configureAuth()
    {
        // Web routes için auth redirectleri ayarla
        if (request()->is('home*') || request()->is('groups*') || request()->is('events*') || request()->is('profile*') || request()->is('login*')) {
            config(['auth.defaults.guard' => 'web']);
            
            // Auth redirect routes ayarla
            $this->app['url']->defaults([
                'login' => '/login',
            ]);
            
            // RouteServiceProvider'daki redirect urls'leri override et
            config(['app.login_url' => '/login']);
        }
    }

    private function configureInertia()
    {
        // Web routes için özel Inertia setup
        if (request()->is('home*') || request()->is('groups*') || request()->is('events*') || request()->is('profile*')) {
            Inertia::setRootView('web::app');
        }
    }
} 