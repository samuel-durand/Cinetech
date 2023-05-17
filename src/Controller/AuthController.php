<?php

require_once 'Database/db.php'

namespace App\Controller;

use App\Model\UserModel;


Class AuthControll {

    public function Register() {
            //get the data from form 

            $login = trim($_POST['login']);
            $password = trim($_POST['password']);


            // clean the data use htmlchars
            $user = new user();

    }
}



?>