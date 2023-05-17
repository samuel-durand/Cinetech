<?php

require_once("vendor/autoload.php");

$router = new AltoRouter();

$router->setBasePath('/Cinetech');


$router->map( 'GET', '/home', function() {
    require_once('src/View/home.php');


}, 'homepage');
// map homepage


// map user details page
$router->map( 'GET', '/home/user', function(  ) {
});

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