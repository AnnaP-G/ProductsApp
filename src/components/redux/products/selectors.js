export const selectProducts = (state) => state.products.products;

export const selectProductById = (state, productId) =>
  state.products.products.find((product) => product.id === productId);

export const selectProductsStatus = (state) => state.products.status;

export const selectProductsError = (state) => state.products.error;

export const selectProductsIsLoading = (state) => state.products.loading;

export const selectTotalProducts = (state) => state.products.products.length;

export const selectNameFilter = (state) => state.filters.name;

export const selectProductsAll = (state) => state.products.products;
