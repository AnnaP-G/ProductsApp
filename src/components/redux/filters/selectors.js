export const selectNameFilter = (state) => state.filters.name;
export const selectFilteredProductsByName = (state) => {
  const nameFilter = selectNameFilter(state);
  const allProducts = state.products.products;

  return nameFilter
    ? allProducts.filter((product) =>
        product.title.toLowerCase().includes(nameFilter.toLowerCase())
      )
    : allProducts;
};
