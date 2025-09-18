// import { showOverviewDialog } from "./helper-modal.js";

const API_KEY = import.meta.env.VITE_API_KEY;
const URL_TRENDING = import.meta.env.VITE_URL_TRENDING;
const URL_DETAILS = import.meta.env.VITE_URL_DETAILS;
const IMG_PREFIX = import.meta.env.VITE_IMG_PREFIX;
const LANG_POST = "&language=de-DE";

const targetContainer = document.getElementById("target-container");

function getMovieId() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id");
}

// A function to fetch movie details from the TMDB API
async function getMovieDetails(movieId) {
  const url = `${URL_DETAILS}/${movieId}?${LANG_POST}`;
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
      const data = json;
      // code here
      const title = data.title;
      const overview = data.overview;
      const poster_path = data.poster_path;
      const backdrop_path = data.backdrop_path;
      const release_date = data.release_date;
      const runtime = data.runtime;
      const genres = data.genres;
      const vote_average = data.vote_average;
      const vote_count = data.vote_count;
      const production_companies = data.production_companies;
      const production_countries = data.production_countries;
      const spoken_languages = data.spoken_languages;
      const rating = data.rating;
      const original_language = data.original_language;
      const original_title = data.original_title;
      const isAdult = data.adult;
      const reflink = data.homepage;

      const targetHTML = `
<!-- HEADER -->
      <header id="header">
        <!-- HERO -->
        <section
          id="heroSection"
          class="relative overflow-hidden min-h-[400px]"
        >
          <!-- Hintergrund-Video -->
          <div class="absolute inset-0 w-full h-full overflow-hidden -z-10">
            <iframe
              class="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 scale-[2.5]"
              src="https://www.youtube.com/embed/z_mGY35pPP4?autoplay=1&mute=1&loop=1&playlist=z_mGY35pPP4&controls=0&showinfo=0&modestbranding=1"
              title="YouTube video player"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
          </div>

          <!-- Inhalt -->
          <div
            class="relative z-0 flex flex-col sm:flex-row items-start p-6 sm:p-[6em] bg-black/40 gap-6"
          >
            <!-- Textbereich -->
            <div class="flex flex-col gap-2 max-w-xl">
              <h1 class="text-4xl sm:text-5xl text-white blockbuster-font">
                Aktueller Filmtitel
              </h1>
              <p class="text-white text-lg sm:text-xl">
                Genre: Action, FSK: 12, Laufzeit: 120 Min, Erscheinungsdatum:
                17.09.2025
              </p>
              <div class="flex flex-row gap-4 mt-4">
                <button
                  class="px-6 py-2 bg-blue-600 text-white font-blockbuster rounded-lg shadow-lg shadow-blue-500/50 hover:shadow-blue-400/70 transition duration-300"
                >
                  Zur Watchlist
                </button>
                <button
                  class="px-6 py-2 bg-green-600 text-white font-blockbuster rounded-lg shadow-lg shadow-green-500/50 hover:shadow-green-400/70 transition duration-300"
                >
                  Notiz
                </button>
                <button
                  class="px-6 py-2 bg-red-600 text-white font-blockbuster rounded-lg shadow-lg shadow-red-500/50 hover:shadow-red-400/70 transition duration-300"
                >
                  Bereits gesehen
                </button>
              </div>
            </div>

            <!-- Plakat & Bewertung -->
            <div class="flex flex-col items-center gap-4">
              <!-- 3D Plakat -->
              <div
                id="poster"
                class="w-[200px] h-[290px] rounded-2xl shadow-2xl cursor-pointer"
              >
                <img
                  src="https://i.pinimg.com/1200x/d3/c6/9a/d3c69a7a98cba59db3a32d7a9ce6ef7d.jpg"
                  alt="Plakat"
                  class="w-full h-full object-cover rounded-2xl"
                />
              </div>

              <!-- Durchschnittsbewertung -->
              <div
                class="bg-yellow-400 text-black font-bold px-4 py-2 rounded-lg text-lg shadow-md"
              >
                ⭐ 8.7/10
              </div>
            </div>
          </div>
        </section>
      </header>
      <!-- Content Section -->
      <main class="px-8 lg:px-16 py-10 max-w-5xl mx-auto">
        <h2 class="blockbuster-font text-2xl font-bold mb-4">Filmdetails</h2>
        <ul class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          <li class="text-gray-800">Originaltitel: ${original_title}</li>
          <li class="text-gray-800">Lauflänge: ${runtime}</li>
          <li class="text-gray-800">Ersterscheinung: ${release_date}</li>
          <li class="text-gray-800">Sprachen: ${spoken_languages}</li>
          <li class="text-gray-800">Drehbuch: ${original_language}</li>
          <li class="text-gray-800">Regie: ${production_companies}</li>
          <li class="text-gray-800">Herkunftsland: ${production_countries}</li>
          <li class="text-gray-800">Produktionsfirmen: ${production_companies[0].name}</li>
        </ul>
        <h2 class="blockbuster-font text-2xl font-bold mb-4">Über den Film</h2>
        <p class="text-gray-700 leading-relaxed mb-8">
          Ein Hobbit begibt sich auf eine epische Reise, um einen Ring zu
          zerstören. Begleitet wird er von einer Gemeinschaft aus Gefährten, die
          den Lauf der Welt verändern.
        </p>

        <h2 class="blockbuster-font text-2xl font-bold mb-4">Hauptbesetzung</h2>
        <ul class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          <li class="text-gray-800">Elijah Wood – Frodo</li>
          <li class="text-gray-800">Ian McKellen – Gandalf</li>
          <li class="text-gray-800">Viggo Mortensen – Aragorn</li>
          <li class="text-gray-800">Orlando Bloom – Legolas</li>
        </ul>

        <h2 class="blockbuster-font text-2xl font-bold mb-4">Trailer</h2>
        <div class="aspect-video bg-black rounded-lg overflow-hidden shadow">
          <iframe
            class="w-full h-full"
            src="https://www.youtube.com/embed/V75dMMIW2B4"
            title="YouTube trailer"
            allowfullscreen
          >
          </iframe>
        </div>
      </main>
`;
      targetContainer.innerHTML = targetHTML;
      return null;
    })
    .catch((err) => console.error(err));
}

const mid = getMovieId();
console.log(mid);
getMovieDetails(mid);
