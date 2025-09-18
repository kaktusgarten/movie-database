function importFavMovies() {
  const favMovies = JSON.parse(localStorage.getItem("favmovies"));
  return favMovies;
}

export { importFavMovies };
