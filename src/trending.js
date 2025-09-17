// trending.js / used to load 3 actual trending movies

// importing dotenv to get variables from .env-file with vite as bundler
// import dotenv from "dotenv";
// dotenv.config();

const API_KEY = import.meta.env.VITE_API_KEY;
const URL_TRENDING = import.meta.env.VITE_URL_TRENDING;
const IMG_PREFIX = import.meta.env.VITE_IMG_PREFIX;
const trendingContainer = document.getElementById("trending-movies");

function getClassByRate(vote) {
  if (vote >= 7.5) {
    return "bg-green-600";
  } else if (vote >= 5) {
    return "bg-amber-500";
  } else {
    return "bg-red-500";
  }
}

const addTrendingMovies = (movie) => {
  const movieElement = document.createElement("div");
  movieElement.classList.add("movie");
  movieElement.innerHTML = `
        <img src="${IMG_PREFIX}${movie.poster_path}" alt="${movie.title}" />
        <div class="movie-info">
            <h3>${movie.title}</h3>
            <span class="${getClassByRate(
              movie.vote_average
            )} text-black px-2 py-1 rounded ">${movie.vote_average}</span>
        </div>
        <div class="overview">
            <h3>Handlung:</h3>
            ${movie.overview.slice(0, 333)}<a href="${movie.id}">[...]</a>
        </div>
    `;
  trendingContainer.appendChild(movieElement);
};

function getTrendingMovies() {
  const url = URL_TRENDING;
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
      const movieList = json.results;
      console.log(movieList);
      console.log("Top 3 Trending Movies:");
      movieList.splice(3);
      movieList.forEach((element) => {
        // console.log(
        //   `${element.id}: ${element.title}, Story: ${element.overview}`
        // );
        addTrendingMovies(element);
        // console.log(`${IMG_PREFIX}${element.poster_path}`);
      });
    })
    .catch((err) => console.error(err));
}

export { getTrendingMovies };
