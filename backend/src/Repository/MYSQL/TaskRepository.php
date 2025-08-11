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
      $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
      $tasks = [];
      foreach ($rows as $row) {
        $tasks[] = new Task($row['id'], $row['title'], $row['description']);
      }
      return $tasks;
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
  public function find(int $id): ?Task
  {
    try {
      $stmt = $this->db->prepare("SELECT * FROM tasks WHERE id = :id");
      $stmt->execute(['id' => $id]);
      $data = $stmt->fetch(PDO::FETCH_ASSOC);
      if ($data) {
        return new Task($data['id'], $data['title'], $data['description']);
      }
      return null;
    } catch (PDOException $e) {
      throw new RuntimeException("Failed to find task: " . $e->getMessage(), 500);
    }
  }
}
