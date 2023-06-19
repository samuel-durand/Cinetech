<?php 

namespace App\Model;

use PDO;




class UserModel {
    public function register($login, $password) {
        $database = new PDO('mysql:host=localhost;dbname=cinetech', 'root', '');
        $sql = "INSERT INTO users (login, password) VALUES (?, ?)";
        $stmt = $database->prepare($sql);
        $stmt->execute(array($login, $password));
    }

    public function findId($login) {
        $database = new PDO('mysql:host=localhost;dbname=cinetech', 'root', '');
        $sql = "SELECT id FROM users WHERE login = ?";
        $stmt = $database->prepare($sql);
        $stmt->execute(array($login));
        
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($result) {
            return $result['id'];
        } else {
            return null; 
        }
    }

    public function getUserByLogin($login)
{
    $database = new PDO('mysql:host=localhost;dbname=cinetech', 'root', '');
    $sql = "SELECT * FROM users WHERE login = ?";
    $stmt = $database->prepare($sql);
    $stmt->execute([$login]);

    return $stmt->fetch(PDO::FETCH_ASSOC);
}


public function insertComment($comments, $commentTime)
{
    $database = new PDO('mysql:host=localhost;dbname=cinetech', 'root', '');
    $sql = "INSERT INTO comments (user_id, comments, comments_time) 
            SELECT id, ?, ?
            FROM users
            WHERE users.login = ?";
    $stmt = $database->prepare($sql);

    // Récupérer le login de l'utilisateur depuis la session ou toute autre source appropriée
    $login = $_SESSION['login']; // Remplacez 'login' par la clé appropriée pour obtenir le login

    $stmt->execute([$comments, $commentTime, $login]);

    return true;
}




    




}
    
    
    
    









?>