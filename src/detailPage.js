import "./style.css";
console.log("Detail Page");

const favs = JSON.parse(localStorage.getItem("favoriten"));
const url = new URL(window.location.href);
const id = url.searchParams.get("id");
console.log(id);

function renderFilmDetails() {
  let filmDetailsWrapper = document.getElementById("filmDetailsWrapper");

  const HTML = ` 
            <div class="mb-5">
            <h2 class="text-4xl mb-5">FILM ID: ${id}</h2>
            <p> HIer kann eine neuer Api Call statt finden ... Nicht weiter umgesetzt
            </div>
            <div>
              <h2 class="mb-5 text-xl font-bold">Titel des Films..</h2>
              <img src="/" alt="BILD" class="w-[500px] border mb-4">
              <p>Beschreibung.... usw... </p>
            </div>`;

  filmDetailsWrapper.insertAdjacentHTML("beforeend", HTML);
}

renderFilmDetails();
