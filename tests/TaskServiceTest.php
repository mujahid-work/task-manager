<?php

use PHPUnit\Framework\TestCase;
use App\Service\TaskService;
use App\Entity\Task;
use App\Repository\Contracts\TaskRepositoryInterface;

final class TaskServiceTest extends TestCase
{
    public function testCanCreateTask(): void
    {
        $fakeRepo = new class implements TaskRepositoryInterface {
            public function all(): array {
                return [];
            }

            public function save(Task $task): Task {
                $task->id = 1;
                return $task;
            }
        };

        $service = new TaskService($fakeRepo);
        $task = $service->create([
            'title' => 'Test Task',
            'description' => 'This is a test task'
        ]);

        $this->assertNotNull($task->id);
        $this->assertEquals('Test Task', $task->title);
        $this->assertEquals('This is a test task', $task->description);
    }
}
