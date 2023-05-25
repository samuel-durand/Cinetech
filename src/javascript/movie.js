const apiKey = '8a71cb8331edbcb8f4ba827b91a64b37';
const marvelCompanyId = 420; 
const disneyCompanyId = 2; 

async function getMoviesByCompany(companyId) {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_companies=${companyId}`;

  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      const movies = data.results;
      return movies;
    } else {
      console.log('Erreur lors de la requête. Statut : ' + response.status);
      return [];
    }
  } catch (error) {
    console.log('Erreur lors de la requête :', error);
    return [];
  }
}

function displayMovies(movies, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  movies.forEach((movie) => {
    const movieLink = document.createElement('a');
    movieLink.href = 'src/View/détail.php?id=' + movie.id; 

    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');

    const movieTitle = document.createElement('h3');
    movieTitle.textContent = movie.title;
    movieElement.appendChild(movieTitle);

    const moviePoster = document.createElement('img');
    moviePoster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    moviePoster.alt = movie.title;
    movieElement.appendChild(moviePoster);

    movieLink.appendChild(movieElement);
    container.appendChild(movieLink);
  });
}


getMoviesByCompany(marvelCompanyId)
  .then((movies) => {
    displayMovies(movies, 'movie');
  })
  .catch((error) => {
    console.log('Erreur lors de la récupération des films Marvel :', error);
  });

getMoviesByCompany(disneyCompanyId)
  .then((movies) => {
    displayMovies(movies, 'movie');
  })
  .catch((error) => {
    console.log('Erreur lors de la récupération des films Disney :', error);
  });

