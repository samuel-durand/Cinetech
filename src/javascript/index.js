async function callTMDbAPI() {
  const apiKey = '8a71cb8331edbcb8f4ba827b91a64b37';
  const movieUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_companies=420`;
  const seriesUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_companies=420`;

  try {
    const movieResponse = await fetch(movieUrl);
    const seriesResponse = await fetch(seriesUrl);

    if (movieResponse.ok && seriesResponse.ok) {
      const movieData = await movieResponse.json();
      const seriesData = await seriesResponse.json();

      const movies = movieData.results;
      const series = seriesData.results;

      const movieDiv = document.getElementById('movie');
      movieDiv.innerHTML = '';
      movieDiv.classList.add('movie-container');

      const seriesDiv = document.getElementById('series');
      seriesDiv.innerHTML = '';
      seriesDiv.classList.add('movie-container');

      movies.forEach(movie => {
        const movieTitle = movie.title;
        const movieImage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        const movieId = movie.id;
        const moviePoster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-item');

        const imageElement = document.createElement('img');
        imageElement.src = movieImage;
        imageElement.classList.add('movie-image');

        const titleElement = document.createElement('p');
        titleElement.textContent = movieTitle;
        titleElement.classList.add('movie-title');

        movieContainer.appendChild(imageElement);
        movieContainer.appendChild(titleElement);
        movieDiv.appendChild(movieContainer);

        movieContainer.addEventListener('click', () => {
          const movieUrlFr = `/Cinetech/home/details?id=${movieId}&poster=${encodeURIComponent(moviePoster)}`;

          window.location.href = movieUrlFr;
        });
      });

      displaySeries(series, seriesDiv);

      const moviePrevButton = document.getElementById('moviePrevButton');
      const movieNextButton = document.getElementById('movieNextButton');
      const seriesPrevButton = document.getElementById('seriesPrevButton');
      const seriesNextButton = document.getElementById('seriesNextButton');

      moviePrevButton.addEventListener('click', () => {
        movieDiv.scrollBy({
          left: -300,
          behavior: 'smooth'
        });
      });

      movieNextButton.addEventListener('click', () => {
        movieDiv.scrollBy({
          left: 300,
          behavior: 'smooth'
        });
      });

      seriesPrevButton.addEventListener('click', () => {
        seriesDiv.scrollBy({
          left: -300,
          behavior: 'smooth'
        });
      });

      seriesNextButton.addEventListener('click', () => {
        seriesDiv.scrollBy({
          left: 300,
          behavior: 'smooth'
        });
      });
    } else {
      console.log('Erreur lors de la requête. Statut : ' + response.status);
    }
  } catch (error) {
    console.log('Erreur lors de la requête:', error);
  }
}

async function getSeriesByCompany(companyId) {
  const apiKey = '8a71cb8331edbcb8f4ba827b91a64b37';
  const seriesUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_companies=${companyId}`;

  try {
    const response = await fetch(seriesUrl);
    if (response.ok) {
      const data = await response.json();
      const series = data.results;
      return series;
    } else {
      console.log('Erreur lors de la requête. Statut : ' + response.status);
      return [];
    }
  } catch (error) {
    console.log('Erreur lors de la requête :', error);
    return [];
  }
}

function redirectToDetails(serieId, seriePoster) {
  const serieUrlFr = `/Cinetech/home/series_details?id=${serieId}&poster=${encodeURIComponent(seriePoster)}`;
  window.location.href = serieUrlFr;
}

function displaySeries(series, seriesDiv) {
  series.forEach(serie => {
    const serieTitle = serie.name;
    const serieImage = `https://image.tmdb.org/t/p/w500${serie.poster_path}`;
    const serieId = serie.id;
    const seriePoster = `https://image.tmdb.org/t/p/w500${serie.poster_path}`;

    const serieContainer = document.createElement('div');
    serieContainer.classList.add('movie-item');

    const imageElement = document.createElement('img');
    imageElement.src = serieImage;
    imageElement.classList.add('movie-image');

    const titleElement = document.createElement('p');
    titleElement.textContent = serieTitle;
    titleElement.classList.add('movie-title');

    serieContainer.appendChild(imageElement);
    serieContainer.appendChild(titleElement);
    seriesDiv.appendChild(serieContainer);

    serieContainer.addEventListener('click', () => {
      redirectToDetails(serieId, seriePoster);
    });
  });
}

const marvelCompanyId = 420;
const disneyCompanyId = 2;

getSeriesByCompany(marvelCompanyId)
  .then((series) => {
    const seriesDiv = document.getElementById('series');
    seriesDiv.innerHTML = '';
    seriesDiv.classList.add('movie-container');
    displaySeries(series, seriesDiv);
  })
  .catch((error) => {
    console.log('Erreur lors de la récupération des séries Marvel :', error);
  });

callTMDbAPI();
