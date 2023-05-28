<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/Cinetech/src/css/input.css">
    <script defer src="/Cinetech/src/javascript/series_details.js"></script>

    <title>Détails</title>
</head>
<body>

<h2 id="seriesTitle"></h2>
<div id="seriesPoster"></div>
<div id="seriesOverview"></div>



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