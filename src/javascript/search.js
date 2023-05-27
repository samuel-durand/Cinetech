const apiKey = '8a71cb8331edbcb8f4ba827b91a64b37';
let autocompleteTimeout;

function searchTMDb(query) {
  const searchUrl = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${encodeURIComponent(query)}`;

  fetch(searchUrl)
    .then(response => response.json())
    .then(data => {
      const results = data.results;
      const searchResultsContainer = document.getElementById('searchResults');
      searchResultsContainer.innerHTML = '';

      results.forEach(result => {
        const title = result.title || result.name;
        const posterPath = result.poster_path;
        const mediaType = result.media_type;
        const id = result.id;

        const resultLink = document.createElement('a');
        resultLink.href = `/Cinetech/home/details?id=${id}`;

        const resultElement = document.createElement('div');
        resultElement.classList.add('searchResult');

        const titleElement = document.createElement('h3');
        titleElement.textContent = title;
        resultElement.appendChild(titleElement);

        if (posterPath) {
          const posterUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;
          const posterElement = document.createElement('img');
          posterElement.src = posterUrl;
          posterElement.alt = title;
          resultElement.appendChild(posterElement);
        }

        resultLink.appendChild(resultElement);
        searchResultsContainer.appendChild(resultLink);
      });
    })
    .catch(error => {
      console.log('Error while searching TMDb:', error);
    });
}
function autocompleteTMDb(query) {
    const autocompleteUrl = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${encodeURIComponent(query)}`;
  
    fetch(autocompleteUrl)
      .then(response => response.json())
      .then(data => {
        const results = data.results;
        const autocompleteResultsContainer = document.getElementById('autocompleteResults');
        autocompleteResultsContainer.innerHTML = '';
  
        results.forEach(result => {
          const title = result.title || result.name;
          const mediaType = result.media_type;
          const id = result.id;
  
          const resultLink = document.createElement('a');
          resultLink.href = `/Cinetech/home/details?id=${id}`;
  
          const resultElement = document.createElement('div');
          resultElement.classList.add('autocomplete-item');
          resultElement.textContent = title;
  
          resultLink.appendChild(resultElement);
          autocompleteResultsContainer.appendChild(resultLink);
        });
      })
      .catch(error => {
        console.log('Error while autocompleting TMDb:', error);
      });
  }
  

const searchInput = document.getElementById('searchInput');
const autocompleteResultsContainer = document.getElementById('autocompleteResults');
const searchResultsContainer = document.getElementById('searchResults');
const searchOverlay = document.getElementById('searchOverlay');

searchInput.addEventListener('input', () => {
  const query = searchInput.value;

  clearTimeout(autocompleteTimeout);

  if (query) {
    autocompleteTimeout = setTimeout(() => {
      autocompleteTMDb(query);
      searchOverlay.style.display = 'block';
    }, 300); 
  } else {
    autocompleteResultsContainer.innerHTML = '';
    searchOverlay.style.display = 'none';
  }
});

const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', () => {
  const query = searchInput.value;
  searchTMDb(query);
});

document.addEventListener('click', (event) => {
  if (!searchResultsContainer.contains(event.target) && !searchInput.contains(event.target)) {
    searchOverlay.style.display = 'none';
  }
});
