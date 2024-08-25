import { createSlice } from "@reduxjs/toolkit";
import {
  fetchProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "./operations";

const initialState = {
  products: [],
  status: "idle",
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

      .addCase(addProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products.push(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(updateProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        const index = state.products.findIndex(
          (product) => product.id === action.payload.id
        );
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(deleteProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        );
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
