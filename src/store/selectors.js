// Cart
export const selectCartItemsMap = (state) => state.cart.items;
export const selectCartCount = (state) =>
  Object.values(state.cart.items).reduce((a, b) => a + b, 0);

// Favorites
export const selectFavoritesSet = (state) => new Set(Object.keys(state.favorites.set));
export const selectIsFavorite = (id) => (state) => Boolean(state.favorites.set[id]);