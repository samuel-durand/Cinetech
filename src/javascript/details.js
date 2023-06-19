const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');
const apiKey = '8a71cb8331edbcb8f4ba827b91a64b37';

const movieUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;
const similarMoviesUrl = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${apiKey}`;

// Fonction pour effectuer une requête GET à l'API
async function fetchMovieData(url) {
  const response = await fetch(url);
  return response.json();
}

// Afficher les détails du film principal
fetchMovieData(movieUrl)
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

// Afficher les films similaires
fetchMovieData(similarMoviesUrl)
  .then(data => {
    const similarMovies = data.results;
    const similarMoviesContainer = document.getElementById('similarMoviesContainer');

    similarMovies.forEach(movie => {
      const movieTitle = movie.title;
      const moviePoster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

      const movieElement = document.createElement('div');
      movieElement.classList.add('similar-movie');

      const posterElement = document.createElement('img');
      posterElement.src = moviePoster;
      posterElement.alt = movieTitle;
      movieElement.appendChild(posterElement);

      const titleElement = document.createElement('p');
      titleElement.textContent = movieTitle;
      movieElement.appendChild(titleElement);

      similarMoviesContainer.appendChild(movieElement);
    });
  })
  .catch(error => {
    console.log('Erreur lors de la récupération des films similaires :', error);
  });
