
<header>
        <?php

        if (isset($_SESSION['login'])) {
            echo '<a href="/Cinetech/home">Home</a>';
            echo '<a href="/Cinetech/home/details">Détails</a>';
            echo '<a href="/Cinetech/home/film">Film</a>';
            echo '<a href="/Cinetech/home/series">Series</a>';
            echo '<a href="src/View/logout.php">Déconnexion</a>';
        } else {
            echo '<a href="/Cinetech/home">Home</a>';
            echo '<a href="/Cinetech/home/login">Connexion</a>';
            echo '<a href="/Cinetech/home/register">Inscription</a>';
            echo '<a href="/Cinetech/home/détails">Détails</a>';
            echo '<a href="/Cinetech/home/film-and-series">Film et Series</a>';
        }
        ?>
    </header>