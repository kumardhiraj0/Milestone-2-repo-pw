const apiKey = "9455a7c";
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const movieDetailsDiv = document.getElementById('movieDetails');

searchButton.addEventListener('click', searchMovie);

function searchMovie() {
  const searchTerm = searchInput.value.trim();
  if (searchTerm === '') {
    return;
  }

  const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(searchTerm)}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.Response === 'True') {
        console.log(data.Response)
        console.log(data);
        displayMovieDetails(data);
      } else {
        movieDetailsDiv.innerHTML = `<p>No movie found with the title '${searchTerm}'</p>`;
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

function displayMovieDetails(movie) {
  const { Title, Poster, Year, Director, Plot,imdbRating } = movie;

  const movieHTML = `
  <div class="details">
    <h2>${Title} (${Year})</h2>
    <img src="${Poster}" alt="${Title}" width="200">
    <p><strong>Director:</strong> ${Director}</p>
    <p><strong>IMDB-Rating</strong>:${imdbRating}</p>
    <p><strong>Plot:</strong> ${Plot}</p>
</div>
  `;

  movieDetailsDiv.innerHTML = movieHTML;
}
