import { createSlice } from "@reduxjs/toolkit";

const userProductsInitialState = {
  products: [],
};

const userProductsSlice = createSlice({
  name: "userProducts",
  initialState: userProductsInitialState,
  reducers: {
    addUserProduct: {
      reducer(state, action) {
        state.products.push(action.payload);
      },
    },

    deleteUserProduct(state, action) {
      const index = state.findIndex((task) => task.id === action.payload);
      state.splice(index, 1);
    },
    togglePublished(state, action) {
      for (const product of state) {
        if (product.id === action.payload) {
          product.completed = !product.completed;
          break;
        }
      }
    },
  },
});

export const { addUserProduct, deleteUserProduct, togglePublished } =
  userProductsSlice.actions;
export const userProductsReducer = userProductsSlice.reducer;
