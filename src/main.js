import "./static/style.css";
import { getTrendingMovies } from "./js/trending.js";
import { getSearchMovies } from "./js/search.js";

if (window.location.pathname === "/") {
  getTrendingMovies();
}
if (window.location.pathname === "/target-movie.html") {
  // getSearchMovies();
}
// getTrendingMovies();
// getSearchMovies();
// renderTarget();
