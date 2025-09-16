import "./style.css";
import { getTrendingMovies } from "./trending.js";

getTrendingMovies();

// DIALOG MODAL **************:
// Der Button zum öffnen des Notiz-Dialog-Feldes muss so heißen wie hier deklariert, oder hier anpasst werden:
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

// NOTIZ FORM ****************:
const notizForm = document.getElementById("notizForm");
notizForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = e.target.querySelector("input[name='notizString']").value;
  // NOTIZ STRING HIER abgreifen:
  console.log(inputValue);
  alert("NOTIZ IST: " + inputValue);
});

// SEARCH FORM ****************:
const searchForm = document.getElementById("searchForm");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = e.target.querySelector("input[name='searchString']").value;
  // SEARCH STRING HIER abgreifen:
  console.log(inputValue);
  alert("SUCHE NACH: " + inputValue);
});
