const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');

const apiKey = '8a71cb8331edbcb8f4ba827b91a64b37';
const movieUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;
const seriesUrl = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${apiKey}`;

fetch(movieUrl)
  .then(response => response.json())
  .then(data => {
    const movieTitle = data.title;
    const moviePoster = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
    const movieSynopsis = data.overview;

    document.getElementById('movieTitle').textContent = movieTitle;

    const posterElement = document.createElement('img');
    posterElement.src = moviePoster;
    posterElement.alt = movieTitle;
    document.getElementById('moviePoster').appendChild(posterElement);

    const synopsisElement = document.createElement('p');
    synopsisElement.textContent = movieSynopsis;
    document.getElementById('movieSynopsis').appendChild(synopsisElement);
  })
  .catch(error => {
    console.log('Erreur lors de la récupération des détails du film :', error);
  });

 