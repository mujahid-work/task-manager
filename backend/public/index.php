<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit();
}

// Load application bootstrap file (autoloaders, environment, etc.)
require_once __DIR__ . '/../bootstrap.php';

// Import necessary classes for handling HTTP requests and routing
use App\Http\Request;
use App\Routing\Router;

try {
  // Capture the current HTTP request
  $request = Request::capture();

  // Route the request and get the response
  $response = (new Router())->handle($request);

  // Send the response to the client
  echo $response->send();
} catch (\Throwable $e) {
  http_response_code(500);
  echo json_encode(['error' => $e->getMessage()]);
}
