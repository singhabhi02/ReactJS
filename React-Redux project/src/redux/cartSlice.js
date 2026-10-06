import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addtoCart: (state, action) => {
      state.items.push(action.payload);
    },

    clearCart: (state) => {
      state.items = [];
    },

    removeCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addtoCart, removeCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
