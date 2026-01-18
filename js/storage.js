// storage.js

// Initialize storage for favorites
function initializeStorage() {
    if (!localStorage.getItem('favorites')) {
        localStorage.setItem('favorites', JSON.stringify([]));
    }
}

// Get favorites from storage
function getFavorites() {
    return JSON.parse(localStorage.getItem('favorites')) || [];
}

// Add a favorite to storage
function addFavorite(item) {
    const favorites = getFavorites();
    if (!isFavorite(item)) {
        favorites.push(item);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
}

// Remove a favorite from storage
function removeFavorite(item) {
    let favorites = getFavorites();
    favorites = favorites.filter(favorite => favorite !== item);
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Check if an item is a favorite
function isFavorite(item) {
    const favorites = getFavorites();
    return favorites.includes(item);
}

// Clear all favorites from storage
function clearFavorites() {
    localStorage.setItem('favorites', JSON.stringify([]));
}