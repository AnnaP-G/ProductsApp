import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import css from "./ProductDetailsPage.module.css";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      setProduct(response.data);
    }
    fetchProduct();
  }, [productId]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className={css.productDetails}>
      <div className={css.productDetailsImage}>
        <img
          src={product.image}
          alt={product.title}
          className={css.productImg}
        />
      </div>
      <div className={css.productDetailsInfo}>
        <h1>{product.title}</h1>
        <p>Category: {product.category}</p>
        <p>Price: ${product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
