import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../ProductItem/ProductItem.jsx";
import css from "./ProductList.module.css";
import {
  selectProducts,
  selectProductsError,
  selectProductsStatus,
} from "../../redux/products/selectors.js";
import { fetchProducts } from "../../redux/products/operations.js";

const ProductList = ({ onShowMore }) => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const status = useSelector(selectProductsStatus);
  const error = useSelector(selectProductsError);

  const [limit, setLimit] = useState(8);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleShow8Products = () => setLimit(8);
  const handleShow16Products = () => setLimit(16);
  const handleShowAllProducts = () => setLimit(20);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;
  if (!Array.isArray(products) || products.length === 0) {
    return <p>There are no products available</p>;
  }

  return (
    <div className={css.productListWrap}>
      <div className={css.productListButton}>
        <button className={css.button} onClick={handleShow8Products}>
          Show 8 products
        </button>
        <button className={css.button} onClick={handleShow16Products}>
          Show 16 products
        </button>
        <button className={css.button} onClick={handleShowAllProducts}>
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
