import { createAction } from "@reduxjs/toolkit";
import { deleteUserProduct } from "./slice.js";

export const deleteProduct = createAction("DELETE_PRODUCT");

export const deleteProductAsync = (id) => async (dispatch) => {
  dispatch(deleteUserProduct(id));
};
