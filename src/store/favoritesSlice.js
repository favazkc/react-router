import { createSlice } from "@reduxjs/toolkit";

/** Shape: { set: { [productId]: true } } — object map is easy to serialize */
const initialState = { set: {} };

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const id = action.payload;
      state.set[id] ? delete state.set[id] : (state.set[id] = true);
    },
    clearFavorites: (state) => {
      state.set = {};
    }
  }
});

export const { toggleFavorite, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;