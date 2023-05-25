<?php


use App\Controller\AuthController;

require_once("vendor/autoload.php");

$router = new AltoRouter();

$router->setBasePath('/Cinetech');


$router->map( 'GET', '/home', function() {
    session_start();
    include('src/View/header.php');

    require_once('src/View/home.php');


}, 'homepage');
// map homepage


$router->map( 'GET', '/home/film', function() {
    session_start();
    include('src/View/header.php');

    require_once('src/View/film.php');


}, 'film');




$router->map( 'GET', '/home/series', function() {
    session_start();
    include('src/View/header.php');

    require_once('src/View/series.php');


}, 'series');

$router->map( 'GET', '/home/details', function() {
    session_start();
    include('src/View/header.php');

    require_once('src/View/détail.php');


}, 'details');


$router->map('GET', '/home/details', function() {
    session_start();
    include('src/View/header.php');

    require_once('src/View/détail.php');
});

$router->map( 'GET', '/home/register', function() {

    include('src/View/header.php');

    require_once('src/View/register.php');

}, 'register');

$router->map('POST', '/home/register', function() {
    $authController = new AuthController();
    $authController->register($_POST['login'], $_POST['password']);
});


$router->map( 'GET', '/home/login', function() {
    include('src/View/header.php');

    require_once('src/View/login.php');


}, 'login');

$router->map('POST', '/home/login', function() {
    $authController = new AuthController();
    $authController->login($_POST['login'], $_POST['password']);
});

$router->map('GET', '/home/profil', function() {
    session_start(); 

    include('src/View/header.php');
    require_once('src/View/profil.php');
}, 'profil');








// match current request url
$match = $router->match();

// call closure or throw 404 status
if( is_array($match) && is_callable( $match['target'] ) ) {
	call_user_func_array( $match['target'], $match['params'] ); 
} else {
	// no route was matched
	header( $_SERVER["SERVER_PROTOCOL"] . ' 404 Not Found');
}

?>