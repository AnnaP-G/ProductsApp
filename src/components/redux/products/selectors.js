// features/selectors.js
export const selectProducts = (state) => state.products.products;
export const selectProductById = (state, productId) =>
  state.products.products.find((product) => product.id === productId);
export const selectProductsStatus = (state) => state.products.status;
export const selectProductsError = (state) => state.products.error;
