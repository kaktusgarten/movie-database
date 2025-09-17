// trending.js / used to load 3 actual trending movies
import "./flipcard.css";

// importing dotenv to get variables from .env-file with vite as bundler
// import dotenv from "dotenv";
// dotenv.config();

const API_KEY = import.meta.env.VITE_API_KEY;
const URL_TRENDING = import.meta.env.VITE_URL_TRENDING;
const IMG_PREFIX = import.meta.env.VITE_IMG_PREFIX;
const trendingContainer = document.getElementById("trending-movies");

function getClassByRate(vote) {
  vote = Math.max(0, Math.min(10, vote));
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
    if (vote <= step.max) return step.color;
  }
  return "bg-gray-400";
}

const addTrendingMovies = (movie) => {
  const movieElement = document.createElement("div");
  movieElement.classList.add("movie");
  movieElement.insertAdjacentHTML(
    "beforeend",
    `
    <section class="flex items-start gap-6 flex-wrap justify-center">
      <div class="flip-card w-[385px] h-[580px] relative">
        <div class="flip-card-inner">
          <div class="flip-card-front p-2 rounded-xl relative">
            <div class="h-[480px] w-full relative overflow-hidden rounded-xl">
              <img
                src="${IMG_PREFIX}${movie.poster_path}"
                alt="Film Poster"
                class="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105 rounded-xl border-4 border-gray-200"
              />
              <div
                id="rating-badge"
                class="absolute top-3 right-3 px-3 py-1.5 rounded-full text-white text-base font-bold shadow-lg ring-2 ring-white/70 ${getClassByRate(
                  movie.vote_average
                )} transform transition-transform duration-300 hover:scale-110"
              >
                ${movie.vote_average.toFixed(1)}
              </div>

              <div id="seen-overlay" class="hidden">Bereits gesehen</div>
            </div>
            <div class="p-4 flex flex-col h-[80px] relative">
              <h2 class="text-sm font-bold mb-2 text-black">${movie.title}</h2>
              <div class="text-gray-700 flex justify-start text-sm mt-auto">
                <span class="m-2">${movie.release_date}</span>
                <span class="m-2">Action</span>
              </div>
              <div class="corner"></div>
            </div>
          </div>

          <div class="flip-card-back flex flex-col p-2 rounded-xl border-2 border-white/20 text-gray-900">
            <div class="bg-white rounded-lg p-3 mx-1 flex flex-col gap-1 shadow-sm">
              <div class="grid grid-cols-3 gap-3">
                <div class="col-span-2 flex flex-col gap-0.5">
                  <h2 class="text-base font-bold">${movie.title}</h2>
                  <div class="text-xs text-gray-700 leading-snug">
                    <p><span class="font-semibold">Genre:</span> Action</p>
                    <p><span class="font-semibold">Erscheinung:</span> ${
                      movie.release_date
                    }</p>
                    <p><span class="font-semibold">Länge:</span> 207 Minuten</p>
                    <p><span class="font-semibold">Sprache:</span> deutsch, englisch</p>
                    <p><span class="font-semibold">Regie:</span> Röland Emmerich</p>

                    <div class="mt-2">
                      <img
                        id="fsk-logo"
                        src=""
                        alt="FSK"
                        class="w-[45px] h-[45px] object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div class="col-span-1 flex items-center justify-center">
                  <img
                    src="${IMG_PREFIX}${movie.poster_path}"
                    alt="Poster Thumbnail"
                    class="w-full h-auto rounded-md shadow object-cover"
                  />
                </div>
              </div>

              <button
                class="mt-1 px-3 py-1 bg-blue-600 text-white text-xs rounded-md hover:bg-blue-700 transition self-start"
              >
                mehr
              </button>
            </div>

            <div class="bg-white rounded-lg p-3 mx-1 flex flex-col gap-1 shadow-sm mt-1 flex-1">
              <h3 class="text-sm font-semibold">Handlungsauszug:</h3>
              <p class="text-xs text-gray-700 leading-snug flex-1">
                ${movie.overview}
              </p>
              <button
                class="mt-1 px-3 py-1 bg-blue-600 text-white text-xs rounded-md hover:bg-blue-700 transition self-start"
              >
                mehr
              </button>
            </div>

            <div class="bg-white rounded-lg p-3 mx-1 flex flex-col gap-2 shadow-sm mt-1">
              <div class="flex justify-between items-center gap-2">
                <button
                  id="noteButton"
                  onclick="openModal()"
                  class="flex-1 h-[50px] px-3 py-1 bg-gray-200 text-gray-800 text-xs rounded-md hover:bg-gray-300 transition"
                >
                  Notiz
                </button>
                <button
                  class="flex-1 h-[50px] px-3 py-1 bg-blue-600 text-white text-xs rounded-md hover:bg-blue-700 transition"
                >
                  Zur Watchlist
                </button>
                <button
                  id="seenButton"
                  onclick="toggleSeen()"
                  class="flex-1 h-[50px] px-3 py-1 bg-black text-white text-xs rounded-md hover:bg-gray-800 transition"
                >
                  Bereits gesehen
                </button>
              </div>
            </div>

            <div
              id="notizModal"
              class="fixed inset-0 bg-black/50 flex items-center justify-center hidden z-50"
            >
              <div
                class="bg-white rounded-xl shadow-xl w-[90%] max-w-md p-6 relative"
              >
                <button
                  onclick="closeModal()"
                  class="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                >
                  ✕
                </button>
                <h2 class="text-lg font-bold mb-3">Notiz hinzufügen</h2>
                <form onsubmit="saveNote(event)" class="flex flex-col gap-3">
                  <textarea
                    id="noteInput"
                    rows="5"
                    class="w-full p-2 border rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                    placeholder="Deine Notiz..."
                  ></textarea>
                  <div class="flex justify-end gap-2">
                    <button
                      type="button"
                      onclick="closeModal()"
                      class="px-3 py-1 bg-gray-200 rounded-md text-sm hover:bg-gray-300"
                    >
                      Abbrechen
                    </button>
                    <button
                      type="submit"
                      class="px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
                    >
                      Speichern
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    `
  );
  trendingContainer.appendChild(movieElement);
};

function getTrendingMovies() {
  const url = URL_TRENDING;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => {
      const movieList = json.results;
      console.log(movieList);
      console.log("Top 3 Trending Movies:");
      movieList.splice(3);
      movieList.forEach((element) => {
        // console.log(
        //   `${element.id}: ${element.title}, Story: ${element.overview}`
        // );
        addTrendingMovies(element);
        // console.log(`${IMG_PREFIX}${element.poster_path}`);
      });
    })
    .catch((err) => console.error(err));
}

export { getTrendingMovies };
