<?php

namespace App\Routing;

use App\Http\Request;
use App\Http\Response;
use App\Controller\TaskController;

/**
 * Class Router
 * 
 * Handles routing of HTTP requests to the appropriate controller actions.
 */
class Router
{
    /**
     * Handle the incoming HTTP request and return a response.
     * 
     * Matches the request method and URI to the corresponding controller action.
     * Returns a 404 response if no route matches.
     * 
     * @param Request $request
     * @return Response
     */
    public function handle(Request $request): Response
    {
        if ($request->method === 'GET' && $request->uri === '/tasks') {
            return (new TaskController())->index();
        }

        // Match /tasks/{id} where {id} can be any non-empty string
        if ($request->method === 'GET' && preg_match('#^/tasks/([^/]+)$#', $request->uri, $matches)) {
            $id = $matches[1];
            return (new TaskController())->show($id);
        }

        // Add more routes here as needed

        // Default: route not found
        return new Response(['error' => 'Route not found'], 404);
    }
}