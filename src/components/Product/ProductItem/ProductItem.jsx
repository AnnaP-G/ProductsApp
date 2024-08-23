import ProductCard from "../ProductCard/ProductCard.jsx";

const ProductItem = ({ image, title, price }) => {
  return (
    <li>
      <ProductCard image={image} title={title} price={price} />
    </li>
  );
};

export default ProductItem;
