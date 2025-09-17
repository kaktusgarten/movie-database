export const renderCard = (img, title) => {
  const cardWrapper = document.getElementById("initalMovie");

  const html = `
    <section class="flex items-start gap-6 flex-wrap justify-center">
      <div class="flip-card w-[385px] h-[580px] relative">
        <div class="flip-card-inner">
          <!-- Vorderseite -->
          <div class="flip-card-front p-2 rounded-xl relative">
            <div class="h-[480px] w-full relative overflow-hidden rounded-xl">
              <img
                src="https://image.tmdb.org/t/p/original${img}"
                alt="Film Poster"
                class="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105 rounded-xl border-4 border-gray-200"
              />
              <div
                id="rating-badge"
                class="absolute top-3 right-3 px-3 py-1.5 rounded-full text-white text-base font-bold shadow-lg ring-2 ring-white/70 transform transition-transform duration-300 hover:scale-110"
              >
                0.1
              </div>

              <!-- Bereits gesehen Overlay -->
              <div id="seen-overlay" class="hidden">Bereits gesehen</div>
            </div>
            <div class="p-4 flex flex-col h-[80px] relative">
              <h2 class="text-2xl font-bold mb-2 text-black">${title}</h2>
              <div class="text-gray-700 flex justify-start text-sm mt-auto">
                <span class="m-2">01.01.2025</span>
                <span class="m-2">Action</span>
              </div>
              <div class="corner"></div>
            </div>
          </div>

          <!-- Rückseite -->
          <div
            class="flip-card-back flex flex-col p-2 rounded-xl border-2 border-white/20 text-gray-900"
          >
            <!-- Obere Sektion -->
            <div
              class="bg-white rounded-lg p-3 mx-1 flex flex-col gap-1 shadow-sm"
            >
              <div class="grid grid-cols-3 gap-3">
                <!-- Linke Spalte -->
                <div class="col-span-2 flex flex-col gap-0.5">
                  <h2 class="text-base font-bold">Star Wars op Kölch</h2>
                  <div class="text-xs text-gray-700 leading-snug">
                    <p><span class="font-semibold">Genre:</span> SciFi</p>
                    <p>
                      <span class="font-semibold">Erscheinung:</span> 22.08.2015
                    </p>
                    <p><span class="font-semibold">Länge:</span> 207 Minuten</p>
                    <p>
                      <span class="font-semibold">Sprache:</span> deutsch,
                      englisch
                    </p>
                    <p>
                      <span class="font-semibold">Regie:</span> Röland Emmerich
                    </p>

                    <!-- FSK Logo -->
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

                <!-- Rechte Spalte -->
                <div class="col-span-1 flex items-center justify-center">
                  <img
                    src="https://tse2.mm.bing.net/th/id/OIP.9kHjYBavvuQxkHvsLmk1DAHaLP?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
                    alt="Poster Thumbnail"
                    class="w-full h-auto rounded-md shadow object-cover"
                  />
                </div>
              </div>

              <!-- Mehr-Button -->
              <button
                class="mt-1 px-3 py-1 bg-blue-600 text-white text-xs rounded-md hover:bg-blue-700 transition self-start"
              >
                mehr
              </button>
            </div>

            <!-- Mittlere Sektion -->
            <div
              class="bg-white rounded-lg p-3 mx-1 flex flex-col gap-1 shadow-sm mt-1 flex-1"
            >
              <h3 class="text-sm font-semibold">Handlungsauszug:</h3>
              <p class="text-xs text-gray-700 leading-snug flex-1">
                - Blindtext - Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.
              </p>
              <button
                class="mt-1 px-3 py-1 bg-blue-600 text-white text-xs rounded-md hover:bg-blue-700 transition self-start"
              >
                mehr
              </button>
            </div>

            <!-- Untere Sektion -->
            <div
              class="bg-white rounded-lg p-3 mx-1 flex flex-col gap-2 shadow-sm mt-1"
            >
              <div class="flex justify-between items-center gap-2">
                <button
                  class="[ noteButton ] flex-1 h-[50px] px-3 py-1 bg-gray-200 text-gray-800 text-xs rounded-md hover:bg-gray-300 transition"
                >
                  Notiz
                </button>
                <button
                  class="[ watchListButton ] flex-1 h-[50px] px-3 py-1 bg-blue-600 text-white text-xs rounded-md hover:bg-blue-700 transition"
                >
                  Zur Watchlist
                </button>
                <button
                  class="[ seenbutton ] flex-1 h-[50px] px-3 py-1 bg-black text-white text-xs rounded-md hover:bg-gray-800 transition"
                >
                  Bereits gesehen
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`;

  cardWrapper.insertAdjacentHTML("beforeend", html);
};
