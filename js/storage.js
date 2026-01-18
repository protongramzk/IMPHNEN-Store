// Storage management for favorites using localStorage

function initializeStorage() {
    if (!localStorage.getItem('favorites')) {
        localStorage.setItem('favorites', JSON.stringify([]));
    }
}

function getFavorites() {
    return JSON.parse(localStorage.getItem('favorites')) || [];
}

function addFavorite(item) {
    const favorites = getFavorites();
    if (!favorites.includes(item)) {
        favorites.push(item);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
}

function removeFavorite(item) {
    let favorites = getFavorites();
    favorites = favorites.filter(favorite => favorite !== item);
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

function isFavorite(item) {
    const favorites = getFavorites();
    return favorites.includes(item);
}

function clearFavorites() {
    localStorage.removeItem('favorites');
}

// Initialize storage
initializeStorage();