<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script defer src="/Cinetech/src/javascript/details.js"></script>

    <link rel="stylesheet" href="/Cinetech/src/css/input.css">

    <title>Détails</title>
</head>
<body>
<!-- Pour les détails du film -->
<div class="movie-details-container">
  <div id="moviePoster"></div>
  <div class="movie-details">
    <h2 id="movieTitle"></h2>
    <div id="movieSynopsis"></div>
  </div>
</div>




<form id="commentForm" method="post">
  <div>
    <label for="comments">Comment:</label>
    <textarea id="comment" name="comments" rows="4" cols="20" required></textarea>
  </div>
  <div>
    <button id="button-form" type="submit">Submit</button>
  </div>
</form>


<div id="similarMoviesContainer"></div>



</body>
</html>
