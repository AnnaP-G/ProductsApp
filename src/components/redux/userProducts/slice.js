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

    deleteUserProduct(state, action) {
      const index = state.products.findIndex(
        (product) => product.id === action.payload
      );
      if (index !== -1) {
        state.products.splice(index, 1);
      }
    },

    togglePublished(state, action) {
      for (const product of state.products) {
        if (product.id === action.payload) {
          product.published = !product.published;
          break;
        }
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
