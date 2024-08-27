export const selectProducts = (state) => state.products;
export const selectUserProducts = (state) => state.userProducts.products;
export const selectProductByIdFromRedux = (state, productId) => {
  // Вибирає продукти з частини стану userProducts
  const products = state.userProducts.products;

  // Повертає продукт, який відповідає переданому productId
  return products.find((product) => product.id === productId);
};
