import "./style.css";
import { renderFav } from "./render";

let aktuelleFilmIdNotiz = "";

// LOAD FAVORITEN:
function loadFavs() {
  const favs = JSON.parse(localStorage.getItem("favoriten"));
  let favWrapper = document.getElementById("favoritenWrapper");
  favs.forEach((element) => {
    renderFav(favWrapper, element);
  });
}

loadFavs();


let favWrapper = document.getElementById("favoritenWrapper");
favWrapper.addEventListener("click", (e) => {
  // Button Notiz
  if (e.target.matches(".btnNotiz")) {
    const id = e.target.closest(".kachel").dataset.id;
    aktuelleFilmIdNotiz = id;
    dialog.showModal();
  }
  // Button Delete
  if (e.target.matches(".btnRemoveFav")) {
    const id = e.target.closest(".kachel").dataset.id;
    const favs = JSON.parse(localStorage.getItem("favoriten"));
    const filmData = favs.filter((film) => film.cardId !== id);
    localStorage.setItem("favoriten", JSON.stringify(filmData));
    window.location.reload();
  }
});

// POPUP Notiz:
const dialog = document.getElementById("meinDialog");
const btnCloseDialog = document.getElementById("btnCloseDialog");
btnCloseDialog.addEventListener("click", (e) => {
  dialog.close();
});

// Notizen Form Submit
const notizForm = document.getElementById("notizForm");
notizForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = e.target.querySelector("input[name='notizString']").value;

  // NOTIZ Text+Id in LocalStore:
  let favoriten = JSON.parse(localStorage.getItem("favoriten")) || [];
  favoriten = favoriten.map((film) => {
    if (film.cardId === aktuelleFilmIdNotiz) {
      return { ...film, notiz: inputValue }; // Neues Objekt mit Notiz
    }
    return film; // Alle anderen unverändert lassen
  });

  localStorage.setItem("favoriten", JSON.stringify(favoriten));
  dialog.close();
  window.location.reload();
});

// Button Delete ALL
const btnDeleteAll = document.getElementById("btnDeleteFav");
btnDeleteAll.addEventListener("click", () => {
  localStorage.setItem("favoriten", JSON.stringify([]));
  window.location.reload();
});
