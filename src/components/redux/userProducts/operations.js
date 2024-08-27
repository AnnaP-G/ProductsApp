import { createAction } from "@reduxjs/toolkit";
import { deleteUserProduct, updateUserProduct } from "./slice.js";

export const updateProductAsync = (product) => (dispatch) => {
  dispatch(updateUserProduct(product));
};
export const deleteProduct = createAction("DELETE_PRODUCT");

export const deleteProductAsync = (id) => async (dispatch) => {
  dispatch(deleteUserProduct(id));
};
