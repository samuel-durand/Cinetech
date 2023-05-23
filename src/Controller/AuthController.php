<?php

namespace App\Controller;

use App\Model\UserModel;


class AuthController {
    public function register($login, $password)
    {   
        $login = htmlspecialchars(trim($login));
        $password = htmlspecialchars(trim($password));

        // Vérification des champs
        if (empty($login) || empty($password)) {
            echo "Veuillez saisir un login et un mot de passe.";
            exit();
        }

        // Hachage du mot de passe
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        $userModel = new UserModel();

        // Vérification si l'utilisateur existe déjà
        if ($userModel->findId($login) !== null) {
            echo "Cet utilisateur existe déjà. Veuillez choisir un autre login.";
            exit();
        }

        // Insertion de l'utilisateur dans la base de données
        $userModel->register($login, $hashedPassword);

        echo "Inscription réussie !";

        exit();
    }
}





?>