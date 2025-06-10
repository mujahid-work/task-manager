<?php

namespace App\Service;

use App\Entity\Task;
use App\Repository\Contracts\TaskRepositoryInterface;

/**
 * Class TaskService
 * 
 * Provides business logic for managing tasks.
 * Delegates data access to the TaskRepositoryInterface implementation.
 */
class TaskService
{
    /**
     * TaskService constructor.
     * 
     * @param TaskRepositoryInterface $repository The repository for task data access.
     */
    public function __construct(
        private TaskRepositoryInterface $repository
    ) {}

    /**
     * Retrieve all tasks.
     * 
     * @return array Returns an array of all tasks.
     */
    public function all(): array
    {
        return $this->repository->all();
    }

    /**
     * Create and save a new task.
     * 
     * @param array $data The data for the new task.
     * @return Task Returns the created and saved task entity.
     */
    public function create(array $data): Task
    {
        $task = new Task(null, $data['title'], $data['description']);
        return $this->repository->save($task);
    }
}