import { createSlice } from "@reduxjs/toolkit";

const userProductsInitialState = {
  products: [],
};

const userProductsSlice = createSlice({
  name: "userProducts",
  initialState: userProductsInitialState,
  reducers: {
    addUserProduct(state, action) {
      state.products.push(action.payload);
    },
    updateUserProduct(state, action) {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
    deleteUserProduct(state, action) {
      const index = state.products.findIndex(
        (product) => product.id === action.payload
      );
      if (index !== -1) {
        state.products.splice(index, 1);
      }
    },
    togglePublished(state, action) {
      const index = state.products.findIndex(
        (product) => product.id === action.payload
      );
      if (index !== -1) {
        state.products[index].published = !state.products[index].published;
      }
    },
  },
});

export const {
  addUserProduct,
  updateUserProduct,
  deleteUserProduct,
  togglePublished,
} = userProductsSlice.actions;

export const userProductsReducer = userProductsSlice.reducer;
