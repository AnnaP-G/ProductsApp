import { useNavigate } from "react-router-dom";
import ProductList from "../../components/Product/ProductList/ProductList.jsx";
import css from "./ProductsPage.module.css";

const ProductsPage = () => {
  const navigate = useNavigate();

  const handleShowMore = (product) => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div className={css.productsPageWrap}>
      <ProductList onShowMore={handleShowMore} />
    </div>
  );
};

export default ProductsPage;
