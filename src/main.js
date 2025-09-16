import "./style.css";
import { getTrendingMovies } from "./trending.js";

getTrendingMovies();

// Dialog Modal:
// Der Button zum öffnen des Notiz-Dialog-Feldes muss so heißen, oder hier anpassen:
const btnEnterNotizDialog = document.getElementById("btnEnterNotizDialog");
const dialog = document.getElementById("meinDialog");
const btnCloseDialog = document.getElementById("btnCloseDialog");

btnEnterNotizDialog.addEventListener("click", (e) => {
  console.log("dialog");
  dialog.showModal(); // Öffnet den Dialog modal
});

btnCloseDialog.addEventListener("click", (e) => {
  dialog.close(); // Öffnet den Dialog modal
});

// SEARCH FORM
const searchForm = document.getElementById("searchForm");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = e.target.querySelector("input[name='searchString']").value;
  console.log(inputValue);
  alert("Suche nach: " + inputValue);
});
