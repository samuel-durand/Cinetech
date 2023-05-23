<?php 

namespace App\Model;

use PDO;




class UserModel {
    public function register($login, $password) {
        $database = new PDO('mysql:host=localhost;dbname=cinetech;charset=utf8;port=3306', 'root', '');
        $registerDate = date('Y-m-d H:i:s'); 
        
        $sql = "INSERT INTO users (login, password, register_date) VALUES (?, ?, ?)";
        $stmt = $database->prepare($sql);
        $stmt->execute(array($login, $password, $registerDate));
    }

    public function findId($login) {
        $database = new PDO('mysql:host=localhost;dbname=cinetech;charset=utf8;port=3306', 'root', '');
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
    

}



?>