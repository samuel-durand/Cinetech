<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/Cinetech/src/css/input.css">
    <script defer src="/Cinetech/src/javascript/series_details.js"></script>
    <script defer src="/Cinetech/src/javascript/recommendation.js"></script>

    <title>Détails</title>
</head>
<body>

<h2 id="seriesTitle"></h2>
<div id="seriesPoster"></div>
<div id="seriesOverview"></div>



<form id="commentForm">
  <div>
    <label for="comments">Comment:</label>
    <input type="text">
  </div>
  <div>
    <button type="submit">Submit</button>
  </div>
</form>

<div id="similarSeriesContainer"></div>



</body>
</html>