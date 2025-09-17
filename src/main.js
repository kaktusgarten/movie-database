import "./style.css";
import { getTrendingMovies } from "./trending.js";
import { getSearchMovies } from "./search.js";

getTrendingMovies();
getSearchMovies("spiderman");

// Dialog Modal:
const btnSearchDialog = document.getElementById("btnSearchDialog");
const dialog = document.getElementById("meinDialog");
const btnCloseDialog = document.getElementById("btnCloseDialog");

btnSearchDialog.addEventListener("click", () => {
  console.log("dialog");
  dialog.showModal(); // Öffnet den Dialog modal
});

btnCloseDialog.addEventListener("click", () => {
  dialog.close(); // Öffnet den Dialog modal
});
