// app.js
const movieList = document.getElementById("movieList");
const searchInput = document.getElementById("searchInput");

const apiKey = "510353f2827923d8291bc881055c812f"; // Reemplaza con tu clave de API
const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}`;

function searchMovies(query) {
    fetch(`${apiUrl}&query=${query}`)
        .then(response => response.json())
        .then(data => {
            renderMovies(data.results);
        })
        .catch(error => {
            console.error("Error al buscar películas:", error);
        });
}

function renderMovies(movies) {
    movieList.innerHTML = "";
    movies.forEach(movie => {
        const card = document.createElement("div");
        card.classList.add("movie-card");
        card.innerHTML = `
            <h2>${movie.title}</h2>
            <p>Fecha de lanzamiento: ${movie.release_date}</p>
            <p>Calificación: ${movie.vote_average}</p>
        `;
        movieList.appendChild(card);
    });
}

searchInput.addEventListener("input", () => {
    searchMovies(searchInput.value);
});

// Renderiza las películas al cargar la página
searchMovies("Avengers"); // Puedes inicializar con una búsqueda predefinida
