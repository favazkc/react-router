import { createSlice } from "@reduxjs/toolkit";

/** Shape: { items: { [productId]: quantity } } */
const initialState = { items: {} };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      state.items[id] = (state.items[id] || 0) + 1;
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      if (!state.items[id]) return;
      state.items[id] -= 1;
      if (state.items[id] <= 0) delete state.items[id];
    },
    setQuantity: (state, action) => {
      const { id, qty } = action.payload;
      if (qty <= 0) delete state.items[id];
      else state.items[id] = qty;
    },
    clearCart: (state) => {
      state.items = {};
    }
  }
});

export const { addToCart, removeFromCart, setQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;