// trending.js / used to load 3 actual trending movies

// importing .env variables to get API_KEY
import dotenv from "dotenv";
dotenv.config();

const API_KEY = process.env.API_KEY;
const URL_TRENDING = process.env.URL_TRENDING;
const IMG_PREFIX = process.env.IMG_PREFIX;

function getTrendingMovies() {
  // actual code here
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
        console.log(
          `${element.id}: ${element.title}, Story: ${element.overview}`
        );
        console.log(`${IMG_PREFIX}${element.poster_path}`);
      });
    })
    .catch((err) => console.error(err));
}

getTrendingMovies();
