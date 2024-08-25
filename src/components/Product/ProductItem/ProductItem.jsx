import ProductCard from "../ProductCard/ProductCard.jsx";
import css from "./ProductItem.module.css";

const ProductItem = ({ product, onShowMore }) => {
  const imageUrl = product.images[0];

  return (
    <li className={css.productItem}>
      <ProductCard
        image={imageUrl}
        title={product.title}
        price={product.price}
      />
      <div className={css.buttonContainer}>
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
