import "./static/style.css";
document.getElementById("app").style.justifyContent = "space-between"; // :3
import { getTrendingMovies } from "./js/trending.js";
import { getSearchMovies } from "./js/search.js";
// import { showWatchlist } from "./js/journal.js";

if (
  window.location.pathname === "/" ||
  window.location.pathname === "/index.html"
) {
  getTrendingMovies();
}
if (window.location.pathname === "/target-movie.html") {
  // getSearchMovies();
}
if (window.location.pathname === "/journal.html") {
  watchlist();
}
// getTrendingMovies();
// getSearchMovies();
// renderTarget();
