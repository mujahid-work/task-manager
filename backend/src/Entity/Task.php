<?php

namespace App\Entity;

class Task
{
    /**
     * @var int|null The task ID.
     */
    public $id;

    /**
     * @var string The task title.
     */
    public $title;

    /**
     * @var string The task description.
     */
    public $description;

    /**
     * Task constructor.
     *
     * @param int|null $id
     * @param string $title
     * @param string $description
     */
    public function __construct(?int $id, string $title, string $description)
    {
        $this->id = $id;
        $this->title = $title;
        $this->description = $description;
    }

    /**
     * Convert the Task object to an associative array.
     *
     * @return array
     */
    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description
        ];
    }
}