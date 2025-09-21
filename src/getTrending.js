import { renderCard } from "./render";
const trendingContainer = document.getElementById("trending-movies");

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzYyYTY5MjY2OTcwNzkyODc1ZTU3YWIxYTc5MmI3ZCIsIm5iZiI6MTc1Nzk0MjA3Ni4zMDA5OTk5LCJzdWIiOiI2OGM4MTEzYzQzZmQzYWQ5NWIyMjA0OWMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.u_KfRlWCHzMbOG5QJQuEQfNIzbtozHga86FRQ7DDwv8";

function getTrendingMovies() {
  const url = "https://api.themoviedb.org/3/trending/movie/week?language=de-DE";
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
      movieList.splice(4);
      movieList.forEach((element) => {
        renderCard("initalMovieWrapper", element);
      });
    })
    .catch((err) => console.error(err));
}

export { getTrendingMovies };
