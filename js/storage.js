// Storage Management for Favorites

class FavoritesStorage {
    constructor() {
        // Initialize favorites
        this.favorites = this.loadFavorites() || [];
    }

    loadFavorites() {
        // Load favorites from local storage
        const favorites = localStorage.getItem('favorites');
        return favorites ? JSON.parse(favorites) : [];
    }

    saveFavorites() {
        // Save favorites to local storage
        localStorage.setItem('favorites', JSON.stringify(this.favorites));
    }

    addFavorite(item) {
        // Add an item to favorites
        if (!this.favorites.includes(item)) {
            this.favorites.push(item);
            this.saveFavorites();
        }
    }

    removeFavorite(item) {
        // Remove an item from favorites
        this.favorites = this.favorites.filter(favorite => favorite !== item);
        this.saveFavorites();
    }

    getFavorites() {
        // Get all favorite items
        return this.favorites;
    }
}

// Example usage:
const favoritesStorage = new FavoritesStorage();

// Add a favorite item
favoritesStorage.addFavorite('item1');

// Get all favorites
console.log(favoritesStorage.getFavorites());

// Remove a favorite item
favoritesStorage.removeFavorite('item1');
