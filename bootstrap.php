<?php
require __DIR__ . '/vendor/autoload.php';

use App\Config\Database;

// Load environment variables
$env = parse_ini_file(__DIR__ . '/.env');

// Register database connection
Database::initialize($env);
