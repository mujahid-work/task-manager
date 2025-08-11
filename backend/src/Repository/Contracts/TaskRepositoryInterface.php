<?php

namespace App\Repository\Contracts;

use App\Entity\Task;

/**
 * Interface TaskRepositoryInterface
 * 
 * Defines the contract for task repository implementations.
 * Requires methods for retrieving all tasks and saving a new task.
 */
interface TaskRepositoryInterface
{
    /**
     * Retrieve all tasks.
     * 
     * @return array Returns an array of all tasks.
     */
    public function all(): array;

    /**
     * Find a task by its ID.
     * 
     * @param int $id The ID of the task to find.
     * @return Task|null Returns the found task or null if not found.
     */
    public function find(int $id): ?Task;
}