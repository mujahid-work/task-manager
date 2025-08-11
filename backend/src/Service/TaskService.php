<?php

namespace App\Service;

use App\Entity\Task;
use App\Repository\Contracts\TaskRepositoryInterface;
use InvalidArgumentException;

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
  public function __construct(TaskRepositoryInterface $repository)
  {
    $this->repository = $repository;
  }

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
   * Find a task by its ID.
   * 
   * @param int $id The ID of the task to find.
   * @return Task Returns the found task.
   * @throws InvalidArgumentException If the task is not found.
   */
  public function find(int $id): Task
  {
    $task = $this->repository->find($id);
    if (!$task) {
      throw new InvalidArgumentException("Task not found");
    }
    return $task;
  }

  /**
   * @var TaskRepositoryInterface
   */
  private $repository;
}
