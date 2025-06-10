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
        return match ([$request->method, $request->uri]) {

            //  ========= Task module routes start here =========
            ['GET', '/tasks/fetch-tasks'] => (new TaskController())->index(),
            ['POST', '/tasks/create-task'] => (new TaskController())->store($request),
            // ========= Task module routes end here =========

            default => new Response(['error' => 'Route not found'], 404)
        };
    }
}
