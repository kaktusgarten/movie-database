// importing style
import "./style.css";
const API_KEY = import.meta.env.VITE_API_KEY;
const movieContainer = document.getElementById("journalFilme"); //journalFilme
VITE_IMG_PREFIX = "https://image.tmdb.org/t/p/original";

// loading favmovie-key from local storage
const movieIds = JSON.parse(localStorage.getItem("favmovies")) || [];

// function to store movie object as string
const addToFav = (movieId) => {
  movieIds.push(movieId);
  localStorage.setItem("favmovies", JSON.stringify(movieIds));
  console.log(movieIds);
};

// creating an example object for the localstorage object
const exampleObject = {
  id: 1078605,
  title: "The Flash",
  overview:
    "The Flash is a superhero appearing in American comic books published by DC Comics. The character was created by writer Geoff Johns and artist Grant Morrison.",
  poster_path:
    "https://m.media-amazon.com/images/M/MV5BZjQ3MjY4NzYtY2M2Yy00MjEyLTk0MjAtZjYwNTYwMzQ2ZTQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_.jpg",
  overview:
    "The Flash is a superhero appearing in American comic books published by DC Comics. The character was created by writer Geoff Johns and artist Grant Morrison.",
};
// pushing the example object into the array
addToFav(exampleObject);

// adding forEach-Loop to display localstorage objects
movieIds.forEach((movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId.id}?language=de-DE`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => {
      const movie = json;
      console.log(movie);
      addMovieToJournal(movie);
    })
    .catch((err) => console.error(err));
});

function addMovieToJournal(movie) {
  const movieCard = document.createElement("div");
  movieCard.classList.add("movie-card");

  const movieImage = document.createElement("img");
  movieImage.src = `${VITE_IMG_PREFIX}${movie.poster_path}`;
  movieImage.alt = movie.title;

  const movieTitle = document.createElement("h2");
  movieTitle.textContent = movie.title;

  const movieOverview = document.createElement("p");
  movieOverview.textContent = movie.overview;

  movieCard.appendChild(movieImage);
  movieCard.appendChild(movieTitle);
  movieCard.appendChild(movieOverview);
  movieContainer.appendChild(movieCard);
}
