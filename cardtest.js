// API Constants (replace with your actual API key)
const API_KEY = "YOUR_API_KEY_HERE";
const MOVIE_ID = 572804; // The Flash
const BASE_URL = `https://api.themoviedb.org/3/movie/${MOVIE_ID}?language=de-DE`;
const IMG_PREFIX = "https://image.tmdb.org/t/p/w500";

// Select elements
const moviePoster = document.getElementById("movie-poster");
const movieTitle = document.getElementById("movie-title");
const voteAverage = document.getElementById("vote-average");
const movieOverview = document.getElementById("movie-overview");

// Function to get the color class for the vote average
function getClassByRate(vote) {
  if (vote >= 7.5) {
    return "bg-green-600";
  } else if (vote >= 5) {
    return "bg-amber-500";
  } else {
    return "bg-red-500";
  }
}

// Fetch movie data from TMDB API
async function getMovie() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  try {
    const res = await fetch(BASE_URL, options);
    const data = await res.json();
    console.log(data);
    updateCard(data);
  } catch (error) {
    console.error("Error fetching movie data:", error);
  }
}

// Update the HTML with movie data
function updateCard(movie) {
  moviePoster.src = `${IMG_PREFIX}${movie.poster_path}`;
  moviePoster.alt = movie.title;
  movieTitle.textContent = movie.title;
  voteAverage.textContent = movie.vote_average.toFixed(1);
  voteAverage.classList.add(getClassByRate(movie.vote_average));
  movieOverview.textContent = movie.overview;
}

// Call the function to fetch and display the movie
getMovie();

// Existing functions for local storage and modal
let savedNote = localStorage.getItem("movieNote");
let noteSaved = localStorage.getItem("movieNoteSaved") === "true";
const noteButton = document.getElementById("noteButton");
const notizModal = document.getElementById("notizModal");
const noteForm = document.getElementById("noteForm");

if (noteSaved) {
  noteButton.textContent = "Notiz bearbeiten";
}

noteButton.addEventListener("click", () => {
  notizModal.classList.remove("hidden");
  if (noteSaved) {
    document.getElementById("noteInput").value = savedNote;
  }
});

function closeModal() {
  document.getElementById("notizModal").classList.add("hidden");
}

function saveNote(e) {
  e.preventDefault();
  savedNote = document.getElementById("noteInput").value;
  if (savedNote.trim() !== "") {
    noteSaved = true;
    localStorage.setItem("movieNote", savedNote);
    localStorage.setItem("movieNoteSaved", "true");
    document.getElementById("noteButton").textContent = "Notiz bearbeiten";
  }
  closeModal();
}

noteForm.addEventListener("submit", saveNote);

// Bereits gesehen
let seen = false;
const storedSeen = localStorage.getItem("movieSeen");
if (storedSeen === "true") {
  seen = true;
  document.getElementById("seen-overlay").classList.remove("hidden");
  document.getElementById("seenButton").textContent = "Als ungesehen markieren";
}

function toggleSeen() {
  const overlay = document.getElementById("seen-overlay");
  const button = document.getElementById("seenButton");
  seen = !seen;
  if (seen) {
    overlay.classList.remove("hidden");
    button.textContent = "Als ungesehen markieren";
    localStorage.setItem("movieSeen", "true");
  } else {
    overlay.classList.add("hidden");
    button.textContent = "Bereits gesehen";
    localStorage.setItem("movieSeen", "false");
  }
}

document.getElementById("seenButton").addEventListener("click", toggleSeen);
