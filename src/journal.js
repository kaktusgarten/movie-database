import "./style.css";

console.log("Journal.js geladen");

const STORAGE_KEY = "movieApp";

function loadState() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function renderMovie(movie) {
  const state = loadState()[movie.id] || { viewed: false, note: "" };

  return `
        <div data-id="${movie.id}"
          class="mb-4 movie-row flex items-center gap-4 rounded-xl px-4 py-2 h-[100px]
                 bg-gradient-to-r from-gray-100 to-gray-200 
                 hover:from-gray-200 hover:to-gray-300
                 transition-all duration-300 shadow-sm hover:shadow-lg 
                 transform hover:-translate-y-1 overflow-visible ${
                   state.viewed ? "bg-red-200" : ""
                 }"
        >
          <!-- Thumbnail + Viewed Label -->
          <div class="flex items-center gap-2 relative">
            <img src="${escapeHtml(movie.thumbnail)}" alt="Poster"
                 class="thumb w-[70px] h-[90px] object-cover rounded-md shadow transition-all duration-300 ${
                   state.viewed ? "grayscale" : ""
                 }" />
            <span class="viewed-label ${
              state.viewed ? "" : "hidden"
            } text-xs font-bold text-red-700 bg-white/80 px-2 py-0.5 rounded">VIEWED</span>
          </div>

          <!-- Inhalte -->
          <div class="flex items-center gap-4 flex-1 text-sm flex-wrap">
            <span class="font-bold text-gray-900 truncate max-w-[180px]">${escapeHtml(
              movie.title
            )}</span>
            <span class="text-gray-600">${escapeHtml(movie.genre)}</span>
            <span class="text-gray-600">${escapeHtml(movie.release)}</span>
            <span class="text-gray-600">${escapeHtml(movie.language)}</span>
            <span class="text-gray-600">${escapeHtml(movie.runtime)}</span>

            <button class="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700">mehr Details</button>

            <div class="flex gap-1">
              <button class="px-2 py-1 bg-gray-800 text-white rounded-md hover:bg-gray-700 text-xs">DE</button>
              <button class="px-2 py-1 bg-gray-800 text-white rounded-md hover:bg-gray-700 text-xs">EN</button>
            </div>

            <img src="${escapeHtml(
              movie.fsk
            )}" alt="FSK" class="w-10 h-10 object-contain" />

            <!-- Tooltip: Filminhalt -->
            <div class="tooltip">
              <button aria-expanded="false" onclick="toggleTooltip(this)"
                class="px-3 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Filminhalt</button>
              <div class="tooltip-content">
                <p class="text-sm text-gray-700 mb-2">${escapeHtml(
                  movie.description
                )}</p>
                <a href="${escapeHtml(
                  movie.moreLink || "#"
                )}" class="text-blue-600 underline text-sm">mehr</a>
              </div>
            </div>

            <button class="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700">Zur Watchlist</button>
            <button onclick="toggleViewed(this)" class="seen-btn px-3 py-1 ${
              state.viewed ? "bg-red-700" : "bg-black"
            } text-white rounded-md hover:bg-gray-800">
              ${state.viewed ? "Als ungesehen markieren" : "Bereits gesehen"}
            </button>
            <button onclick="openNoteModal('${
              movie.id
            }')" class="note-btn px-3 py-1 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
              ${state.note ? "Notiz bearbeiten" : "Notiz"}
            </button>
          </div>
        </div>
      `;
}

function escapeHtml(str) {
  if (!str && str !== 0) return "";
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

// Tooltip
function toggleTooltip(button) {
  const tooltip = button.parentElement;
  const wasOpen = tooltip.classList.contains("show");
  document.querySelectorAll(".tooltip.show").forEach((t) => {
    t.classList.remove("show");
    const btn = t.querySelector("button[aria-expanded]");
    if (btn) btn.setAttribute("aria-expanded", "false");
  });
  if (!wasOpen) {
    tooltip.classList.add("show");
    button.setAttribute("aria-expanded", "true");
  }
}
document.addEventListener("click", (e) => {
  document.querySelectorAll(".tooltip.show").forEach((t) => {
    if (!t.contains(e.target)) {
      t.classList.remove("show");
      const btn = t.querySelector("button[aria-expanded]");
      if (btn) btn.setAttribute("aria-expanded", "false");
    }
  });
});

// Viewed Toggle
function toggleViewed(button) {
  const row = button.closest(".movie-row");
  const id = row.dataset.id;
  const thumb = row.querySelector(".thumb");
  const viewedLabel = row.querySelector(".viewed-label");
  const state = loadState();
  const current = state[id] || {};

  const active = row.classList.contains("bg-red-200");
  if (active) {
    row.classList.remove("bg-red-200");
    thumb.classList.remove("grayscale");
    viewedLabel.classList.add("hidden");
    button.textContent = "Bereits gesehen";
    button.classList.remove("bg-red-700");
    button.classList.add("bg-black");
    current.viewed = false;
  } else {
    row.classList.add("bg-red-200");
    thumb.classList.add("grayscale");
    viewedLabel.classList.remove("hidden");
    button.textContent = "Als ungesehen markieren";
    button.classList.remove("bg-black");
    button.classList.add("bg-red-700");
    current.viewed = true;
  }

  state[id] = { ...current };
  saveState(state);
}

// Notiz Modal
let currentMovieId = null;
function openNoteModal(id) {
  currentMovieId = id;
  const state = loadState();
  const note = state[id]?.note || "";
  document.getElementById("noteInput").value = note;
  document.getElementById("noteModal").classList.remove("hidden");
}
function closeNoteModal() {
  document.getElementById("noteModal").classList.add("hidden");
}
function saveNote(e) {
  e.preventDefault();
  const noteText = document.getElementById("noteInput").value;
  const state = loadState();
  state[currentMovieId] = state[currentMovieId] || {};
  state[currentMovieId].note = noteText.trim();
  saveState(state);

  // Button-Text ändern
  const row = document.querySelector(`.movie-row[data-id="${currentMovieId}"]`);
  const noteBtn = row.querySelector(".note-btn");
  noteBtn.textContent = noteText.trim() ? "Notiz bearbeiten" : "Notiz";

  closeNoteModal();
}

// Beispiel-Daten
const movies = [
  {
    id: "swk",
    title: "Star Wars op Kölch",
    genre: "SciFi",
    release: "22.08.2015",
    language: "deutsch, englisch",
    runtime: "207 Min",
    thumbnail:
      "https://tse2.mm.bing.net/th/id/OIP.9kHjYBavvuQxkHvsLmk1DAHaLP?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    fsk: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/FSK_12.svg/120px-FSK_12.svg.png",
    description: "Ein epischer SciFi-Film mit großen Raumschlachten und Humor.",
    moreLink: "#",
  },
  {
    id: "hdr",
    title: "Herr der Ringe",
    genre: "Fantasy",
    release: "19.12.2001",
    language: "deutsch, englisch",
    runtime: "178 Min",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/8/87/Ringstrilogyposter.jpg",
    fsk: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/FSK_6.svg/120px-FSK_6.svg.png",
    description:
      "Ein Hobbit begibt sich auf eine epische Reise, um einen Ring zu zerstören.",
    moreLink: "#",
  },
];

const movieList = document.getElementById("movie-list");
movies.forEach((m) =>
  movieList.insertAdjacentHTML("beforeend", renderMovie(m))
);
