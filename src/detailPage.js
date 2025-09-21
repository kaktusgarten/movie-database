import "./style.css";
console.log("Detail Page");

const favs = JSON.parse(localStorage.getItem("favoriten"));
const url = new URL(window.location.href);
const id = url.searchParams.get("id");
console.log(id);
console.log(favs);

const filmData = favs.filter((film) => film.cardId === id);
console.log(filmData);

function renderFilmDetails() {
  let filmDetailsWrapper = document.getElementById("filmDetailsWrapper");

  const HTML = ` 
            <div>
              <h2 class="mb-5 text-xl font-bold">${filmData[0].title}</h2>
              <img src="${filmData[0].img}" alt="BILD" class="w-[500px] border mb-4">
              <p>${filmData[0].overviewText}</p>
            </div>`;

  filmDetailsWrapper.insertAdjacentHTML("beforeend", HTML);
}

renderFilmDetails();
