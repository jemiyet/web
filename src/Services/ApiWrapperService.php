<?php

namespace Jemiyet\Web\Services;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\App;

class ApiWrapperService
{
    /**
     * Controller metodunu çağırır ve sonucu döndürür
     */
    public function callController(string $controller, string $method, $request = null): array
    {
        try {
            // Controller instance oluştur
            $controllerInstance = app($controller);
            
            // Method çağır
            $response = $controllerInstance->$method($request);
            
            // Response'u array'e çevir
            if (method_exists($response, 'getData')) {
                return $response->getData(true);
            }
            
            if (method_exists($response, 'getContent')) {
                $content = $response->getContent();
                return json_decode($content, true) ?? [];
            }
            
            if (is_array($response)) {
                return $response;
            }
            
            return ['data' => $response];
            
        } catch (\Exception $e) {
            // Error handling
            report($e);
            return ['error' => $e->getMessage(), 'posts' => []];
        }
    }

    /**
     * Mevcut API controller methodunu çağırır ve response'u web için uygun hale getirir
     */
    public function callApiController(string $controller, string $method, array $params = [], ?Request $request = null): array
    {
        if (!$request) {
            $request = request();
        }

        try {
            // Controller instance oluştur
            $controllerInstance = app($controller);
            
            // Method için gerekli request type'ı kontrol et ve dönüştür
            $transformedRequest = $this->transformRequest($controller, $method, $request);
            
            // Method çağır
            $response = $controllerInstance->$method($transformedRequest, ...$params);
            
            // Response'u array'e çevir
            if (method_exists($response, 'getData')) {
                return $response->getData(true);
            }
            
            if (method_exists($response, 'getContent')) {
                return json_decode($response->getContent(), true);
            }
            
            return $response;
            
        } catch (\Exception $e) {
            // Error handling - boş array döndür
            report($e);
            return [];
        }
    }

    /**
     * Request'i controller methodunun beklediği türe dönüştürür
     */
    private function transformRequest(string $controller, string $method, Request $request): Request
    {
        try {
            $reflection = new \ReflectionMethod($controller, $method);
            $parameters = $reflection->getParameters();
            
            if (empty($parameters)) {
                return $request;
            }
            
            $firstParam = $parameters[0];
            $paramType = $firstParam->getType();
            
            if (!$paramType || $paramType->getName() === Request::class) {
                return $request;
            }
            
            // Özel request class'ı gerekiyorsa, basit Request döndür
            // Gelecekte daha sofistike dönüşüm yapılabilir
            return $request;
            
        } catch (\Exception $e) {
            // Reflection hatası durumunda original request'i döndür
            return $request;
        }
    }

    /**
     * API response'undan sadece data kısmını alır
     */
    public function extractData($apiResponse): mixed
    {
        if (is_array($apiResponse) && isset($apiResponse['data'])) {
            return $apiResponse['data'];
        }
        
        return $apiResponse;
    }

    /**
     * Pagination bilgilerini web için uygun formata çevirir
     */
    public function formatPagination($apiResponse): array
    {
        if (!is_array($apiResponse) || !isset($apiResponse['data'])) {
            return [];
        }

        return [
            'data' => $apiResponse['data'],
            'current_page' => $apiResponse['current_page'] ?? 1,
            'last_page' => $apiResponse['last_page'] ?? 1,
            'per_page' => $apiResponse['per_page'] ?? 10,
            'total' => $apiResponse['total'] ?? 0,
        ];
    }

    /**
     * API error'ları handle eder
     */
    public function handleApiError(\Exception $e): array
    {
        report($e);
        
        return [
            'error' => true,
            'message' => 'API request failed',
            'data' => []
        ];
    }
} 