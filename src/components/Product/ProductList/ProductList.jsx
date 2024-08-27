import { useState } from "react";
import { useSelector } from "react-redux";
import ProductItem from "../ProductItem/ProductItem.jsx";
import Loader from "../../Loader/Loader.jsx";
import ErrorMessage from "../../ErrorMessage/ErrorMessage.jsx";
import {
  selectProductsError,
  selectProductsIsLoading,
} from "../../redux/products/selectors.js";
import { selectFilteredProductsByName } from "../../redux/filters/selectors.js";
import clsx from "clsx";
import css from "./ProductList.module.css";
import SearchBox from "../../SearchBox/SearchBox.jsx";
import { useNavigate } from "react-router-dom";

const ProductList = ({ onShowMore }) => {
  const navigate = useNavigate();

  const isLoading = useSelector(selectProductsIsLoading);
  const isError = useSelector(selectProductsError);
  const filteredProducts = useSelector(selectFilteredProductsByName);
  const [limit, setLimit] = useState(8);

  const handleShow8Products = () => setLimit(8);
  const handleShow16Products = () => setLimit(16);
  const handleShowAllProducts = () => setLimit(filteredProducts.length);

  const handleGoBack = () => {
    navigate(-1);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorMessage />;
  }

  return (
    <div className={css.productListWrap}>
      <div className={css.productListButton}>
        <button className={css.goBackButton} onClick={handleGoBack}></button>
        <div className={css.searchBox}>
          <SearchBox />
          {filteredProducts.length === 0 && (
            <p className={css.noResultsMessage}>No products found</p>
          )}
        </div>
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
            [css.activeButton]: limit === filteredProducts.length,
          })}
          onClick={handleShowAllProducts}
        >
          Show all products
        </button>
      </div>
      <ul className={css.productList}>
        {filteredProducts.slice(0, limit).map((product) => (
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
