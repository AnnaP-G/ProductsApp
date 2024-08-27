import { defaultData } from "../../utils/utils.js";
import css from "./ProductCard.module.css";

const ProductCard = ({
  image = defaultData.image,
  title = defaultData.title,
  price = defaultData.price,
}) => {
  return (
    <div className={css.productCard}>
      <img className={css.productImg} src={image} alt={title} />
      <h2 className={css.productTitle}>{title}</h2>
      <p className={css.productPrice}>Price: {price} credits</p>
    </div>
  );
};

export default ProductCard;
