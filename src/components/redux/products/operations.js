import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../apiService/api.js";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await instance.get("/products");
    return response.data.products;
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (product) => {
    const response = await instance.post("/products/add", product);
    return response.data;
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (product) => {
    const response = await instance.put(`/products/${product.id}`, product);
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (productId) => {
    await instance.delete(`/products/${productId}`);
    return productId;
  }
);
