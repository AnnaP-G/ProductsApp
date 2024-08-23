import { defaultData } from "../../utils/utils.js";

const ProductCard = ({
  image = defaultData.image,
  title = defaultData.title,
  price = defaultData.price,
}) => {
  return (
    <div>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>Price: {price} credits</p>
    </div>
  );
};

export default ProductCard;
