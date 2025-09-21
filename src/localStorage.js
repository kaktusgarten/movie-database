function localStorageAddFavorite(cardId, img, title, overviewText, id) {
  console.log("Local Storage start...");

  // Bisherige Favoriten laden (oder leeres Array starten)
  let favoriten = JSON.parse(localStorage.getItem("favoriten")) ?? [];

  const favorit = {
    cardId: cardId,
    img: img,
    title: title,
    overviewText: overviewText,
  };

  favoriten.push(favorit);
  localStorage.setItem("favoriten", JSON.stringify(favoriten));
}

export { localStorageAddFavorite };
