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
      

    } else {
      console.log('Erreur lors de la requête. Statut : ' + response.status);
    }
  } catch (error) {
    console.log('Erreur lors de la requête:', error);
  }
}

callTMDbAPI();
