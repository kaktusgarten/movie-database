import "./style.css";
import { getTrendingMovies } from "./trending.js";

getTrendingMovies();

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
