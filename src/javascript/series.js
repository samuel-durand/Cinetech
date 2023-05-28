const apiKey = '8a71cb8331edbcb8f4ba827b91a64b37';
const marvelCompanyId = 420;
const disneyCompanyId = 2;

async function getSeriesByCompany(companyId, totalPages) {
  const seriesPerPage = 20; // Nombre de séries par page
  const series = [];

  for (let page = 1; page <= totalPages; page++) {
    const url = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_companies=${companyId}&page=${page}`;

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        const pageSeries = data.results;
        series.push(...pageSeries);
      } else {
        console.log('Erreur lors de la requête. Statut : ' + response.status);
      }
    } catch (error) {
      console.log('Erreur lors de la requête :', error);
    }
  }

  return series;
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

const marvelSeries = getSeriesByCompany(marvelCompanyId, 2); // Récupère 2 pages de séries Marvel (40 séries au total)
const disneySeries = getSeriesByCompany(disneyCompanyId, 2); // Récupère 2 pages de séries Disney (40 séries au total)

Promise.all([marvelSeries, disneySeries])
  .then(([marvelSeries, disneySeries]) => {
    const allSeries = [...marvelSeries, ...disneySeries];
    displaySeries(allSeries, 'series');
  })
  .catch((error) => {
    console.log('Erreur lors de la récupération des séries Marvel et Disney :', error);
  });
