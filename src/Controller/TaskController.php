<?php

namespace App\Controller;

use App\Http\Request;
use App\Http\Response;
use App\Service\TaskService;
use App\Repository\MySQL\TaskRepository;

/**
 * Class TaskController
 * 
 * Handles HTTP requests related to tasks.
 * Delegates business logic to the TaskService.
 */
class TaskController
{
    private TaskService $service;

    /**
     * TaskController constructor.
     * 
     * Initializes the TaskService with a TaskRepository instance.
     */
    public function __construct()
    {
        $repository = new TaskRepository();
        $this->service = new TaskService($repository);
    }

    /**
     * Handle a request to fetch all tasks.
     * 
     * @return Response Returns a response containing all tasks.
     */
    public function index(): Response
    {
        return new Response($this->service->all());
    }

    /**
     * Handle a request to create a new task.
     * 
     * @param Request $request The HTTP request containing task data.
     * @return Response Returns a response with the created task and status 201.
     */
    public function store(Request $request): Response
    {
        $task = $this->service->create($request->body);
        return new Response($task->toArray(), 201);
    }
}
