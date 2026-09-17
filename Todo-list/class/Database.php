<?php

class Database
{
    private SQLite3 $db;

    public function __construct(string $filename)
    {
        $this->db = new SQLite3($filename);
    }

    public function initiliaze()
    {
        $query = "CREATE TABLE IF NOT EXISTS task 
                (
                    id INT NOT NULL, d
                    one BOOLEAN NOT NULL, 
                    name VARCHAR(255) NOT NULL, 
                    PRIMARY KEY('id', AUTOINCREMENT)
                );";

        $this->exec($query);
    }

    private function exec(string $query)
    {
        $this->db->exec($query);
        $this->db->exec($query);
    }
}