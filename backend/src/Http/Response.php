<?php

namespace App\Http;

/**
 * Class Response
 * 
 * Represents an HTTP response to be sent to the client.
 * Handles setting the status code, headers, and encoding data as JSON.
 */
class Response
{
    /**
     * @var array The response data to send as JSON.
     */
    private $data;

    /**
     * @var int The HTTP status code (default 200).
     */
    private $status;

    /**
     * Construct a new Response instance.
     * 
     * @param array $data   The response data to send as JSON.
     * @param int   $status The HTTP status code (default 200).
     */
    public function __construct(array $data = [], int $status = 200)
    {
        $this->data = $data;
        $this->status = $status;
    }

    /**
     * Send the response to the client.
     * 
     * Sets the HTTP status code, content type header, and outputs JSON-encoded data.
     * 
     * @return string The JSON-encoded response data.
     */
    public function send(): string
    {
        http_response_code($this->status);
        header('Content-Type: application/json');
        return json_encode($this->data);
    }
}