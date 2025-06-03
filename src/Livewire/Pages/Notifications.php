<?php

namespace Jemiyet\Web\Livewire\Pages;

use Livewire\Component;

class Notifications extends Component
{
    protected $layout = 'jemiyet/web::layouts.app';
    
    public $notifications = [];

    public function mount()
    {
        $this->loadMockData();
    }

    public function markAsRead($notificationId)
    {
        foreach ($this->notifications as $index => $notification) {
            if ($notification['id'] == $notificationId) {
                $this->notifications[$index]['is_read'] = true;
                break;
            }
        }
    }

    public function markAllAsRead()
    {
        foreach ($this->notifications as $index => $notification) {
            $this->notifications[$index]['is_read'] = true;
        }
    }

    private function loadMockData()
    {
        $this->notifications = [
            [
                'id' => 1,
                'type' => 'like',
                'title' => 'Gönderiniz beğenildi',
                'message' => 'Ali Kayan gönderinizi beğendi',
                'user' => [
                    'name' => 'Ali Kayan',
                    'avatar' => '/api/placeholder/40/40'
                ],
                'time' => '2 dakika önce',
                'is_read' => false
            ],
            [
                'id' => 2,
                'type' => 'comment',
                'title' => 'Yeni yorum',
                'message' => 'Ayşe Yılmaz gönderinize yorum yaptı: "Harika görünüyor!"',
                'user' => [
                    'name' => 'Ayşe Yılmaz',
                    'avatar' => '/api/placeholder/40/40'
                ],
                'time' => '15 dakika önce',
                'is_read' => false
            ],
            [
                'id' => 3,
                'type' => 'follow',
                'title' => 'Yeni takipçi',
                'message' => 'Mehmet Özkan sizi takip etmeye başladı',
                'user' => [
                    'name' => 'Mehmet Özkan',
                    'avatar' => '/api/placeholder/40/40'
                ],
                'time' => '1 saat önce',
                'is_read' => true
            ],
            [
                'id' => 4,
                'type' => 'event',
                'title' => 'Etkinlik hatırlatması',
                'message' => 'Sasha & John Digweed etkinliği yarın başlıyor',
                'time' => '2 saat önce',
                'is_read' => false
            ],
            [
                'id' => 5,
                'type' => 'group',
                'title' => 'Grup daveti',
                'message' => 'İstanbul Fotoğrafçıları grubuna davet edildiniz',
                'user' => [
                    'name' => 'Fatma Demir',
                    'avatar' => '/api/placeholder/40/40'
                ],
                'time' => '3 saat önce',
                'is_read' => true
            ],
            [
                'id' => 6,
                'type' => 'privilege',
                'title' => 'Yeni ayrıcalık',
                'message' => 'Starbucks\'ta %20 indirim fırsatı sizi bekliyor',
                'time' => '1 gün önce',
                'is_read' => true
            ]
        ];
    }

    public function render()
    {
        return view('jemiyet/web::livewire.pages.notifications')
            ->layout('jemiyet/web::layouts.app', ['title' => __('jemiyet/web::web.notifications.title')]);
    }
} 