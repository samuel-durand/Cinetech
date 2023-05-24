async function callTMDbAPI() {
  const apiKey = '8a71cb8331edbcb8f4ba827b91a64b37';
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_companies=420`;

  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      const movies = data.results;

      const movieDiv = document.getElementById('movie');
      movieDiv.innerHTML = '';

      movies.forEach(movie => {
        const movieTitle = movie.title;
        const movieImage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

        const movieElement = document.createElement('div');

        const imageDiv = document.createElement('div');

        const imageElement = document.createElement('img');
        imageElement.src = movieImage;

        const titleElement = document.createElement('p');
        titleElement.textContent = movieTitle;

        imageDiv.appendChild(imageElement);
        movieElement.appendChild(imageDiv);
        movieElement.appendChild(titleElement);

        movieDiv.appendChild(movieElement);
      });
    } else {
      console.log('Erreur lors de la requête. Statut : ' + response.status);
    }
  } catch (error) {
    console.log('Erreur lors de la requête:', error);
  }
}

callTMDbAPI();
