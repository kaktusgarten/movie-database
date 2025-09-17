import "./style.css";
import { getTrendingMovies } from "./trending.js";

getTrendingMovies();

// DIALOG MODAL **************:
const dialog = document.getElementById("meinDialog");
const btnCloseDialog = document.getElementById("btnCloseDialog");

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

// RENDERN DER CARD - Funktion hier, Sample:
// renderCard();

// Rating Badge Farbe
function getRatingColor(rating) {
  rating = Math.max(0, Math.min(10, rating));
  const palette = [
    { max: 0.5, color: "bg-red-900" },
    { max: 1.5, color: "bg-red-700" },
    { max: 2.5, color: "bg-red-600" },
    { max: 3.5, color: "bg-orange-600" },
    { max: 4.5, color: "bg-orange-500" },
    { max: 5.5, color: "bg-yellow-500" },
    { max: 6.5, color: "bg-yellow-400" },
    { max: 7.5, color: "bg-lime-500" },
    { max: 8.5, color: "bg-green-500" },
    { max: 9.5, color: "bg-green-600" },
    { max: 10, color: "bg-green-700" },
  ];
  for (let step of palette) {
    if (rating <= step.max) return step.color;
  }
  return "bg-gray-400";
}

const rating = 7.6;
const badge = document.getElementById("rating-badge");
// badge.textContent = rating.toFixed(1).replace(".", ",");
// badge.classList.add(getRatingColor(rating));

// FSK Logo
// function setFSKLogo(fsk) {
//   const fskLogo = document.getElementById("fsk-logo");
//   let src = "";
//   switch (fsk) {
//     case 0:
//       src =
//         "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/FSK_0.svg/900px-FSK_0.svg.png";
//       break;
//     case 6:
//       src =
//         "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/FSK_6.svg/900px-FSK_6.svg.png";
//       break;
//     case 12:
//       src =
//         "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/FSK_12.svg/900px-FSK_12.svg.png";
//       break;
//     case 16:
//       src =
//         "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/FSK_16.svg/900px-FSK_16.svg.png";
//       break;
//     case 18:
//       src =
//         "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/FSK_18.svg/900px-FSK_18.svg.png";
//       break;
//     default:
//       src = "./public/img/fsk0.svg";
//   }
//   fskLogo.src = src;
// }
const fskWert = 12;
// setFSKLogo(fskWert);

// Bereits gesehen
let seen = false;
const storedSeen = localStorage.getItem("movieSeen");
if (storedSeen === "true") {
  seen = true;
  document.getElementById("seen-overlay").classList.remove("hidden");
  document.getElementById("seenButton").textContent = "Als ungesehen markieren";
}

function toggleSeen() {
  const overlay = document.getElementById("seen-overlay");
  const button = document.getElementById("seenButton");
  seen = !seen;
  if (seen) {
    overlay.classList.remove("hidden");
    button.textContent = "Als ungesehen markieren";
    localStorage.setItem("movieSeen", "true");
  } else {
    overlay.classList.add("hidden");
    button.textContent = "Bereits gesehen";
    localStorage.setItem("movieSeen", "false");
  }
}

// Card Buttons:
const noteButtons = document.getElementsByClassName("noteButton");
console.log(noteButtons);
const watchListButton = document.getElementById("watchListButton");
const seenbutton = document.getElementById("seenbutton");

//

// Button Funktonen dazu:
console.log("ERROR");
const cardWrapper = document.getElementById("initalMovie");
cardWrapper.addEventListener("click", (e) => {
  if (e.target.matches(".noteButton")) {
    console.log("Klick");
  }
});
