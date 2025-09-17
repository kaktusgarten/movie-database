const API_KEY = import.meta.env.VITE_API_KEY;
const URL_SEARCH = import.meta.env.VITE_URL_SEARCH;
const IMG_PREFIX = import.meta.env.VITE_IMG_PREFIX;
const URL_POST = "&page=1";

// const searchContainer = document.getElementById("search-movies");

// fetch function to catch a special movie
const getSearchMovies = (searchTerm) => {
  const url = `${URL_SEARCH}${searchTerm}${URL_POST}`;
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
      const fetchedMovie = json.results;
      console.log("found movie with id:" + fetchedMovie[0].id);
      console.log(fetchedMovie);

      //   fetchedMovie.forEach((element) => {
      // console.log(
      //   `${element.id}: ${element.title}, Story: ${element.overview}`
      // );

      // addTrendingMovies(element);

      // console.log(`${IMG_PREFIX}${element.poster_path}`);
      //   });
    })
    .catch((err) => console.error(err));
};

export { getSearchMovies };
