<?php

namespace App\Controller;

use App\Http\Request;
use App\Http\Response;
use App\Service\TaskService;
use App\Repository\MySQL\TaskRepository;
use Throwable;

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
        try {
            return new Response($this->service->all());
        } catch (Throwable $e) {
            return new Response(['error' => $e->getMessage()], 500);
        }
    }

    /**
     * Handle a request to create a new task.
     * 
     * @param Request $request The HTTP request containing task data.
     * @return Response Returns a response with the created task or an error message.
     */
    public function show($id): Response
    {
        try {
            $task = $this->service->find($id);
            return new Response($task->toArray());
        } catch (Throwable $e) {
            return new Response(['error' => $e->getMessage()], 400);
        }
    }
}
