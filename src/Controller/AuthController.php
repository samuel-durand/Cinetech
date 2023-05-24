<?php


namespace App\Controller;

use App\Model\UserModel;

class AuthController {
    public function register($login, $password)
    {   
        $login = htmlspecialchars(trim($login));
        $password = htmlspecialchars(trim($password));

        if (empty($login) || empty($password)) {
            echo "Veuillez saisir un login et un mot de passe.";
            exit();
        }

        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        $userModel = new UserModel();

        if ($userModel->findId($login) !== null) {
            echo "Cet utilisateur existe déjà. Veuillez choisir un autre login.";
            exit();
        }

        $userModel->register($login, $hashedPassword);

        echo "Inscription réussie !";

        exit();
    }
    
    public function login($login, $password)
    {
        $login = htmlspecialchars(trim($login));
        $password = htmlspecialchars(trim($password));
    
        if (empty($login) || empty($password)) {
            echo "Veuillez saisir un login et un mot de passe.";
            exit();
        }
    
        $userModel = new UserModel();
    
        $userData = $userModel->getUserByLogin($login, $password);
    
        if ($userData) {
            $hashedPassword = $userData['password'];
    
            if (password_verify($password, $hashedPassword)) {
                session_start();
                $_SESSION['login'] = $userData; 
                var_dump($userData);
                header("Location: /Cinetech/home/profil");
                exit();
            }
        }
    
        echo "Identifiants invalides. Veuillez réessayer.";
        exit();
    }


    
    
    
}





?>