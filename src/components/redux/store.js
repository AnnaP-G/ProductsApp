import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/slise.js";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
