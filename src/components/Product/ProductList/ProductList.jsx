import ProductItem from "../ProductItem/ProductItem.jsx";
import css from "./ProductList.module.css";

const ProductList = ({ products }) => {
  if (!Array.isArray(products) || products.length === 0) {
    return <p>There are no products available</p>;
  }

  return (
    <div className={css.productListWrap}>
      <ul className={css.productList}>
        {products.map(({ id, image, title, price }) => {
          return (
            <ProductItem key={id} image={image} title={title} price={price} />
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
