<?php

use App\Controller\AuthControll;
use App\Controller\AuthController;

require_once("vendor/autoload.php");

$router = new AltoRouter();

$router->setBasePath('/Cinetech');


$router->map( 'GET', '/home', function() {
    require_once('src/View/home.php');


}, 'homepage');
// map homepage


$router->map( 'GET', '/home/register', function() {
    require_once('src/View/register.php');

}, 'register');

$router->map('POST', '/home/register', function() {
    $authController = new AuthController();
    $authController->register($_POST['login'], $_POST['password']);
});


$router->map( 'GET', '/home/login', function() {
    require_once('src/View/login.php');


}, 'login');

$router->map('POST', '/home/login', function() {
    $authController = new AuthController();
    $authController->login($_POST['login'], $_POST['password']);
});

$router->map('GET', '/home/profil', function() {
    session_start(); 
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