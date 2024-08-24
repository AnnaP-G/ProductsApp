import ProductCard from "../ProductCard/ProductCard.jsx";
import css from "./ProductItem.module.css";

const ProductItem = ({ product, onShowMore }) => {
  return (
    <li className={css.productItem}>
      <ProductCard
        image={product.image}
        title={product.title}
        price={product.price}
      />
      <div>
        <button
          className={css.showMoreButton}
          onClick={() => onShowMore(product)}
        >
          Show more
        </button>
      </div>
    </li>
  );
};

export default ProductItem;
