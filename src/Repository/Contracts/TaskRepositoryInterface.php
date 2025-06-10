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
     * Save a new task.
     * 
     * @param Task $task The task entity to save.
     * @return Task Returns the saved task.
     */
    public function save(Task $task): Task;
}