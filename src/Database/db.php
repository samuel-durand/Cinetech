<?php 

class Database
{
    private $host = 'localhost';
    private $username = 'root';
    private $password = '';
    private $database = 'cinetech';

    public function connect()
    {
        $conn = new mysqli($this->host, $this->username, $this->password, $this->database);
        if ($conn->connect_error) {
            die('Erreur de connexion à la base de données : ' . $conn->connect_error);
        }
        return $conn;
    }
}



?>