import { createSlice } from "@reduxjs/toolkit";
import {
  fetchProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "./operations";

const initialState = {
  products: [],
  status: "idle", // idle, loading, succeeded, failed
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex(
          (product) => product.id === action.payload.id
        );
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        );
      });
  },
});

export default productsSlice.reducer;
