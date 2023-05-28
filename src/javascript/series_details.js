const urlParams = new URLSearchParams(window.location.search);
const seriesId = urlParams.get('id');

const apiKey = '8a71cb8331edbcb8f4ba827b91a64b37';
const seriesUrl = `https://api.themoviedb.org/3/tv/${seriesId}?api_key=${apiKey}`;
const similarSeriesUrl = `https://api.themoviedb.org/3/tv/${seriesId}/similar?api_key=${apiKey}`;

fetch(seriesUrl)
  .then(response => response.json())
  .then(data => {
    const seriesTitle = data.name;
    const seriesPoster = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
    const seriesOverview = data.overview;

    document.getElementById('seriesTitle').textContent = seriesTitle;

    const posterElement = document.createElement('img');
    posterElement.src = seriesPoster;
    posterElement.alt = seriesTitle;
    document.getElementById('seriesPoster').appendChild(posterElement);

    const overviewElement = document.createElement('p');
    overviewElement.textContent = seriesOverview;
    document.getElementById('seriesOverview').appendChild(overviewElement);
  })
  .catch(error => {
    console.log('Erreur lors de la récupération des détails de la série :', error);
  });
