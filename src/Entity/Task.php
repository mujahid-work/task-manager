<?php

namespace App\Entity;

class Task
{
    public function __construct(
        public ?int $id,
        public string $title,
        public string $description
    ) {}

    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description
        ];
    }
}
