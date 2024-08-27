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
        state.products[index] = {
          ...state.products[index],
          ...action.payload,
        };
      }
    },
    deleteUserProduct(state, action) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    togglePublished(state, action) {
      const index = state.products.findIndex(
        (product) => product.id === action.payload
      );
      if (index !== -1) {
        state.products[index].published = !state.products[index].published;
        state.products[index].publicationDate = state.products[index].published
          ? new Date().toISOString()
          : null;
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
