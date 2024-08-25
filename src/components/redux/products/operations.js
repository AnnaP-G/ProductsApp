import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../apiService/api.js";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, thunkApi) => {
    try {
      const response = await instance.get("/products");
      return response.data.products;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (newProduct, thunkApi) => {
    try {
      const response = await instance.post("/products/add", newProduct);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (product, thunkApi) => {
    try {
      const response = await instance.put(`/products/${product.id}`, product);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (productId, thunkApi) => {
    try {
      const { data } = await instance.delete(`/products/${productId}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
