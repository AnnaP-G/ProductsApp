import ProductItem from "../ProductItem/ProductItem.jsx";

const ProductList = ({ products }) => {
  if (!Array.isArray(products) || products.length === 0) {
    return <p>There are no products available</p>;
  }

  return (
    <ul>
      {products.map(({ id, image, title, price }) => {
        return (
          <ProductItem key={id} image={image} title={title} price={price} />
        );
      })}
    </ul>
  );
};

export default ProductList;
