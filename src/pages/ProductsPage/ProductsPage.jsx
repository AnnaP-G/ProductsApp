import ProductList from "../../components/Product/ProductList/ProductList.jsx";
import css from "./ProductsPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectProductsIsLoading } from "../../components/redux/products/selectors.js";
import { useEffect } from "react";
import { fetchProducts } from "../../components/redux/products/operations.js";
import { useNavigate } from "react-router-dom";

const ProductsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectProductsIsLoading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleShowMore = (product) => {
    navigate(`/products/${product.id}`);
  };
  return (
    <div className={css.productsPageWrap}>
      {isLoading && <p>Request in progress...</p>}
      <ProductList onShowMore={handleShowMore} />
    </div>
  );
};

export default ProductsPage;
