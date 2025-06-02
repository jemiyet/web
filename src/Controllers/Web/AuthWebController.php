<?php

namespace Jemiyet\Web\Controllers\Web;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Jemiyet\Web\Services\ApiWrapperService;
use Jemiyet\Auth\Controllers\AuthController;

class AuthWebController extends Controller
{
    private ApiWrapperService $apiWrapper;

    public function __construct(ApiWrapperService $apiWrapper)
    {
        $this->apiWrapper = $apiWrapper;
    }

    /**
     * Logout işlemi
     */
    public function logout(Request $request)
    {
        try {
            // API logout'u da çağır
            $this->apiWrapper->callApiController(
                AuthController::class,
                'logout',
                [],
                $request
            );
        } catch (\Exception $e) {
            // API logout hatası olsa bile session'ı temizle
        }

        Auth::logout();
        
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('home.index')
            ->with('success', __('web.logout_success'));
    }
} 