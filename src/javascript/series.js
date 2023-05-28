const apiKey = '8a71cb8331edbcb8f4ba827b91a64b37';
const marvelCompanyId = 420;
const disneyCompanyId = 2;

async function getSeriesByCompany(companyId) {
  const url = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_companies=${companyId}`;

  try {
    const response = await fetch(url);
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

function redirectToDetails(serieId) {
  const urlParams = new URLSearchParams();
  urlParams.set('id', serieId);
  window.location.href = '/Cinetech/home/series_details?' + urlParams.toString();
}

function displaySeries(series, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  series.forEach((serie) => {
    const serieElement = document.createElement('div');
    serieElement.classList.add('serie');

    const serieTitle = document.createElement('h3');
    serieTitle.textContent = serie.name;
    serieElement.appendChild(serieTitle);

    const seriePoster = document.createElement('img');
    seriePoster.src = `https://image.tmdb.org/t/p/w500${serie.poster_path}`;
    seriePoster.alt = serie.name;

    seriePoster.addEventListener('click', () => {
      redirectToDetails(serie.id);
    });

    serieElement.appendChild(seriePoster);

    container.appendChild(serieElement);
  });
}

getSeriesByCompany(marvelCompanyId)
  .then((series) => {
    displaySeries(series, 'series');
  })
  .catch((error) => {
    console.log('Erreur lors de la récupération des séries Marvel :', error);
  });

getSeriesByCompany(disneyCompanyId)
  .then((series) => {
    displaySeries(series, 'series');
  })
  .catch((error) => {
    console.log('Erreur lors de la récupération des séries Disney :', error);
  });
