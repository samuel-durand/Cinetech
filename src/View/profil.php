<?php


if (isset($_SESSION['login'])) {
    $userData = $_SESSION['login'];
    $login = $userData['login'];
    echo "Login: $login";
} else {
    echo "Session de connexion non trouvée.";
}


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>profil</title>
</head>
<body>
    <section>
        <main>
            <div>
                <form action="" method="POST">
                    <label for="login">Nouveau Login :</label>
                    <input type="text" placeholder="login" name="login" >

                    <input type="submit" value="Mettre à jour">
                </form>
            </div>
        </main>
    </section>
    
</body>
</html>