<button
  onclick="openNoteModal('${
          movie.id
        }')"
  class="note-btn px-3 py-1 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
>
  ${state.note ? "Notiz bearbeiten" : "Notiz"}
</button>;

//
<div>
  <span class="text-gray-600 text-xs font-bold">Handlung: </span>$
  {movie.overview}
</div>;

//
