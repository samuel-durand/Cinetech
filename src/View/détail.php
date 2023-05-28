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





<form id="commentForm">
  <div>
    <label for="comment">Comment:</label>
    <textarea id="comment" name="comment" rows="4" required></textarea>
  </div>
  <div>
    <button type="submit">Submit</button>
  </div>
</form>


</body>
</html>
