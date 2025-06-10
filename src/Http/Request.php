<?php

namespace App\Http;

/**
 * Class Request
 * 
 * Represents an HTTP request in the application.
 * Captures HTTP method, URI, and request body.
 */
class Request
{
    public string $method;
    public string $uri;
    public array $body;

    /**
     * Capture the current HTTP request and return a Request instance.
     * 
     * @return self
     */
    public static function capture(): self
    {
        $request = new self();
        $request->method = $_SERVER['REQUEST_METHOD'];

        // Parse the URI path from the request
        $request->uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
        
        $request->body = json_decode(file_get_contents('php://input'), true) ?? [];
        return $request;
    }
}
