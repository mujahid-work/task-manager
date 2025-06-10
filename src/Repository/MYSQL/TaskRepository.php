<?php

namespace App\Repository\MySQL;

use App\Config\Database;
use App\Entity\Task;
use App\Repository\Contracts\TaskRepositoryInterface;
use PDO;
use PDOException;
use RuntimeException;

/**
 * Class TaskRepository
 * 
 * Implements the TaskRepositoryInterface for MySQL database operations.
 * Handles fetching and saving tasks using PDO.
 */
class TaskRepository implements TaskRepositoryInterface
{
    private PDO $db;

    /**
     * TaskRepository constructor.
     * 
     * Initializes the PDO database connection.
     */
    public function __construct()
    {
        $this->db = Database::getConnection();
    }

    /**
     * Retrieve all tasks from the database.
     * 
     * @return array Returns an array of all tasks as associative arrays.
     */
    public function all(): array
    {
        try {
            $stmt = $this->db->query("SELECT * FROM tasks");
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            throw new RuntimeException("Failed to fetch tasks: " . $e->getMessage(), 500);
        }
    }

    /**
     * Save a new task to the database.
     * 
     * @param Task $task The task entity to save.
     * @return Task Returns the saved task with its new ID.
     */
    public function save(Task $task): Task
    {
        try {
            $stmt = $this->db->prepare("INSERT INTO tasks (title, description) VALUES (:title, :description)");
            $stmt->execute([
                'title' => $task->title,
                'description' => $task->description
            ]);
            $task->id = (int)$this->db->lastInsertId();
            return $task;
        } catch (PDOException $e) {
            throw new RuntimeException("Failed to create task: " . $e->getMessage(), 500);
        }
    }
}
