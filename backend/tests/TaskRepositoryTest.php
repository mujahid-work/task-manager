<?php

use PHPUnit\Framework\TestCase;
use App\Repository\MYSQL\TaskRepository;
use App\Entity\Task;

class TaskRepositoryTest extends TestCase
{
  protected $repository;

  protected function setUp(): void
  {
    // Ensure full application bootstrap (including database connection)
    require_once __DIR__ . '/../bootstrap.php';
    $this->repository = new TaskRepository();
  }

  public function testAllReturnsArrayOfTasks()
  {
    $tasks = $this->repository->all();
    $this->assertIsArray($tasks);
    $this->assertNotEmpty($tasks);
    $this->assertInstanceOf(Task::class, $tasks[0]);
  }

  public function testFindReturnsTaskOrNull()
  {
    $task = $this->repository->find(1);
    $this->assertTrue($task instanceof Task || $task === null);
  }
}
