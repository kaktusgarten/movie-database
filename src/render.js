function renderCard(renderPlace, data) {
  const cardWrapper = document.getElementById(renderPlace);

  const HTML = `
      <article class="[ kachel ] border flex flex-col p-3" data-id="${data.id}">
            <img
              class="[ img ] mb-4 border object-contain h-[500px] bg-[#333]"
              src="https://media.themoviedb.org/t/p/w220_and_h330_face/${data.backdrop_path}"
              alt="${data.title}"
            />
            <h3 class="[ title ] mb-4 font-bold text-xl h-[60px] overflow-auto">${data.title}</h3>
            <p class="[ overviewText ] mb-4  overflow-auto h-[200px]">${data.overview}</p>
            <button class="[ btnAddFavorit ] border p-2 bg-[#e5e5e5] mb-2 cursor-pointer">
              Zu Favoriten hinzufügen
            </button>
            <button class="[ btnDetails ] border p-2 bg-[#e5e5e5] mb-2 cursor-pointer">
              Details
            </button>
          </article>
  `;
  cardWrapper.insertAdjacentHTML("beforeend", HTML);
}

function renderFav(renderPlace, element) {
  const HTML = `
           <article class="[ kachel ] border p-4 mb-3 flex" data-id="${
             element.cardId
           }">
            <img
              src="https://media.themoviedb.org/t/p/w220_and_h330_face/${
                element.img
              }"
              class="h-[200px] object-contain mr-3"
              titel="Bild"
            />
            <div class="flex flex-col justify-between items-start">
              <h3 class="text-3xl font-bold">${element.title}</h3>
              <p class="mb-4">${element.overviewText}</p>
              <div>
              <button class="[ btnRemoveFav ] border p-2 mr-4 bg-black text-white cursor-pointer">
                Von Favoriten entfernen
              </button>
              <button class="[ btnNotiz ] border p-2 px-5 bg-[#e5e5e5] mb-2 cursor-pointer">
                Notiz
              </button>
              </div>
                ${
                  element.notiz
                    ? `<div class="border p-3"><p>Notizen:</p> ${element.notiz}</div>`
                    : ""
                }
            </div>
          </article>`;
  renderPlace.insertAdjacentHTML("beforeend", HTML);
}

export { renderCard, renderFav };
