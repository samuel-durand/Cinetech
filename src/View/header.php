<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

<header>
    <?php
    if (isset($_SESSION['login'])) {
        echo '<a href="/Cinetech/home" class="header-link">Home</a>';
        echo '<a href="/Cinetech/home/film" class="header-link">Film</a>';
        echo '<a href="/Cinetech/home/series" class="header-link">Series</a>';
        echo '<a href="/Cinetech/home/profil" class="header-link">profil</a>';
        echo '<a href="/Cinetech/src/View/logout.php" class="header-link">Déconnexion</a>';
    } else {
        echo '<a href="/Cinetech/home" class="header-link">Home</a>';
        echo '<a href="/Cinetech/home/register" class="header-link">Inscription</a>';
        echo '<a href="/Cinetech/home/login" class="header-link">Connexion</a>';
        echo '<a href="/Cinetech/home/film-and-series" class="header-link">Film et Series</a>';
    }
    ?>
    <?php require_once('research.php') ?>
</header>
