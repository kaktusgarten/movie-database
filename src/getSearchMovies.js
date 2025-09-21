const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzYyYTY5MjY2OTcwNzkyODc1ZTU3YWIxYTc5MmI3ZCIsIm5iZiI6MTc1Nzk0MjA3Ni4zMDA5OTk5LCJzdWIiOiI2OGM4MTEzYzQzZmQzYWQ5NWIyMjA0OWMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.u_KfRlWCHzMbOG5QJQuEQfNIzbtozHga86FRQ7DDwv8";

function getSearchMovies(suchString) {
  console.log("Suche nach: " + suchString);
  const url = `https://api.themoviedb.org/3/search/movie?query=${suchString}`;
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
      document.getElementById("searchMovieWrapper").innerHTML = "";
      movieList.forEach((element) => {
        renderCard("searchMovieWrapper", element);
      });
    })
    .catch((err) => console.error(err));
  console.log("get Searched Movies");
}

import { renderCard } from "./render";

export { getSearchMovies };
