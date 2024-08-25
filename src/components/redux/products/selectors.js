export const selectProducts = (state) => state.products.products;

export const selectProductById = (state, productId) =>
  state.products.products.find((product) => product.id === productId);

export const selectProductsStatus = (state) => state.products.status;

export const selectProductsError = (state) => state.products.error;

export const selectProductsIsLoading = (state) =>
  state.products.status === "loading";

export const selectProductsIsError = (state) =>
  state.products.status === "failed";

export const selectTotalProducts = (state) => state.products.products.length;
