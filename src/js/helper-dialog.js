const dialogContainer = document.getElementById("dialog-container");

function headerHelper() {
  const headerTempOne = `
          <dialog
          id="meinDialog"
          class="sticky top-0 m-auto p-5 border rounded-3xl flex flex-col"
        >
          <p class="text-xl pb-3">Notiz eingeben:</p>
          <form id="notizForm" class="flex flex-row pb-8">
            <input
              id="noteInput"
              name="notizString"
              type="text"
              placeholder="Notiz eingeben"
              class="border p-2 mr-4"
            />
            <button id="btnSearch" class="border p-2">Speichern</button>
          </form>
          <button id="btnCloseDialog" class="border p-2">Schließen</button>
        </dialog>`;

  dialogContainer.innerHTML = headerTempOne;
}
export { headerHelper };
