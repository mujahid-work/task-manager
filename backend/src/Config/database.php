<?php

namespace App\Config;

use PDO;
use PDOException;

/**
 * Class Database
 * 
 * Manages the application's PDO database connection.
 * Provides methods to initialize and retrieve the connection.
 */
class Database
{
    private static PDO $connection;

    /**
     * Initialize the PDO database connection using configuration values.
     * 
     * @param array $config The database configuration (host, name, user, pass).
     */
    public static function initialize(array $config): void
    {
        try {
            $dsn = sprintf('mysql:host=%s;dbname=%s;charset=utf8mb4', $config['DB_HOST'], $config['DB_NAME']);
            self::$connection = new PDO($dsn, $config['DB_USER'], $config['DB_PASS'], [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
            ]);
        } catch (PDOException $e) {
            http_response_code(500);
            die(json_encode(['error' => 'Database connection failed: ' . $e->getMessage()]));
        }
    }

    /**
     * Retrieve the PDO database connection.
     * 
     * @return PDO The PDO connection instance.
     */
    public static function getConnection(): PDO
    {
        return self::$connection;
    }
}
