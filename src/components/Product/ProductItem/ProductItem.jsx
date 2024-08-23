import ProductCard from "../ProductCard/ProductCard.jsx";
import css from './ProductItem.module.css'

const ProductItem = ({ image, title, price }) => {
  return (
    <li className={css.productItem}>
      <ProductCard image={image} title={title} price={price} />
    </li>
  );
};

export default ProductItem;
