<?php

namespace Jemiyet\Web\Controllers\Web;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Inertia\Inertia;
use Jemiyet\Web\Services\ApiWrapperService;
use Jemiyet\Groups\Controllers\GroupController;

class GroupsWebController extends Controller
{
    private ApiWrapperService $apiWrapper;

    public function __construct(ApiWrapperService $apiWrapper)
    {
        $this->apiWrapper = $apiWrapper;
    }

    /**
     * Grup listesi sayfası
     */
    public function index(Request $request)
    {
        // Mevcut API controller'dan veri al
        $apiResponse = $this->apiWrapper->callApiController(
            GroupController::class,
            'index',
            [],
            $request
        );

        $groups = $this->apiWrapper->extractData($apiResponse);

        return Inertia::render('Web/Groups/Index', [
            'groups' => $groups,
            'filters' => $request->only(['search', 'category'])
        ]);
    }

    /**
     * Grup detay sayfası
     */
    public function show(Request $request, $groupId)
    {
        $apiResponse = $this->apiWrapper->callApiController(
            GroupController::class,
            'show',
            [$groupId],
            $request
        );

        $group = $this->apiWrapper->extractData($apiResponse);

        return Inertia::render('Web/Groups/Show', [
            'group' => $group
        ]);
    }

    /**
     * Grup oluşturma sayfası
     */
    public function create()
    {
        return Inertia::render('Web/Groups/Create');
    }

    /**
     * Grup kaydetme - API'ye yönlendir
     */
    public function store(Request $request)
    {
        $apiResponse = $this->apiWrapper->callApiController(
            GroupController::class,
            'store',
            [],
            $request
        );

        $group = $this->apiWrapper->extractData($apiResponse);

        return redirect()->route('web.groups.show', $group['id'])
            ->with('success', 'Grup başarıyla oluşturuldu!');
    }

    /**
     * Gruba katılma
     */
    public function join(Request $request, $groupId)
    {
        $apiResponse = $this->apiWrapper->callApiController(
            GroupController::class,
            'join',
            [$groupId],
            $request
        );

        return back()->with('success', 'Gruba başarıyla katıldınız!');
    }

    /**
     * Gruptan ayrılma
     */
    public function leave(Request $request, $groupId)
    {
        $apiResponse = $this->apiWrapper->callApiController(
            GroupController::class,
            'leave',
            [$groupId],
            $request
        );

        return back()->with('success', 'Gruptan başarıyla ayrıldınız!');
    }
} 