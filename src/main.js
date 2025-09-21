import "./style.css";
import { getTrendingMovies } from "./getTrending.js";
import { getSearchMovies } from "./getSearchMovies.js";
import { localStorageAddFavorite } from "./localStorage.js";

const mainSection = document.getElementById("main");

// SEARCH FORM ****************:
const searchForm = document.getElementById("searchForm");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = e.target.querySelector("input[name='searchString']").value;
  getSearchMovies(inputValue);
});

// Akutelle Filme laden und anzeigen:
getTrendingMovies();

// BUTTONS
mainSection.addEventListener("click", (e) => {
  
  // BUTTON - ADD FAVORIT
  if (e.target.matches(".btnAddFavorit")) {
    const cardId = e.target.closest(".kachel").dataset.id;
    const img = e.target.closest(".kachel").querySelector(".img").src;
    const title = e.target
      .closest(".kachel")
      .querySelector(".title").textContent;
    const overviewText = e.target
      .closest(".kachel")
      .querySelector(".overviewText").textContent;

    localStorageAddFavorite(cardId, img, title, overviewText);
    alert("Zu Favoriten hinzugefügt!");
  }

  // BUTTON - DETAIL PAGE
  if (e.target.matches(".btnDetails")) {
    const cardId = e.target.closest(".kachel").dataset.id;
    window.location.href = `/detail.html?id=${cardId}`;
  }
});
