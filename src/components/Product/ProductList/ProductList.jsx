import { useState } from "react";
import { useSelector } from "react-redux";
import ProductItem from "../ProductItem/ProductItem.jsx";
import Loader from "../../Loader/Loader.jsx";
import ErrorMessage from "../../ErrorMessage/ErrorMessage.jsx";
import {
  selectProducts,
  selectProductsError,
  selectProductsIsLoading,
} from "../../redux/products/selectors.js";
import clsx from "clsx";
import css from "./ProductList.module.css";

const ProductList = ({ onShowMore }) => {
  const isLoading = useSelector(selectProductsIsLoading);
  const isError = useSelector(selectProductsError);
  const products = useSelector(selectProducts);
  const [limit, setLimit] = useState(8);

  const handleShow8Products = () => setLimit(8);
  const handleShow16Products = () => setLimit(16);
  const handleShowAllProducts = () => setLimit(products.length);

  if (!Array.isArray(products) || products.length === 0) {
    return <p>There are no products available</p>;
  }

  return (
    <div className={css.productListWrap}>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <div className={css.productListButton}>
        <button
          className={clsx(css.button, {
            [css.activeButton]: limit === 8,
          })}
          onClick={handleShow8Products}
        >
          Show 8 products
        </button>
        <button
          className={clsx(css.button, {
            [css.activeButton]: limit === 16,
          })}
          onClick={handleShow16Products}
        >
          Show 16 products
        </button>
        <button
          className={clsx(css.button, {
            [css.activeButton]: limit === products.length,
          })}
          onClick={handleShowAllProducts}
        >
          Show all products
        </button>
      </div>
      <ul className={css.productList}>
        {products.slice(0, limit).map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onShowMore={onShowMore}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
