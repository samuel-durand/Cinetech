const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');

const apiKey = '8a71cb8331edbcb8f4ba827b91a64b37';
const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const movieTitle = data.title;
    const movieDirector = data.director;
    const movieGenres = data.genres;
    const movieCountry = data.country;
    const movieSummary = data.summary;
    const movieActors = data.actors;

    document.getElementById('movieTitle').textContent = movieTitle;
    document.getElementById('movieDirector').textContent = movieDirector;
    document.getElementById('movieGenres').textContent = movieGenres.join(', ');
    document.getElementById('movieCountry').textContent = movieCountry;
    document.getElementById('movieSummary').textContent = movieSummary;
    document.getElementById('movieActors').textContent = movieActors.join(', ');
  })
  .catch(error => {
    console.log('Erreur lors de la récupération des détails du film:', error);
  });
