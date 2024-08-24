import { useEffect, useState } from "react";
import ProductItem from "../ProductItem/ProductItem.jsx";
import css from "./ProductList.module.css";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(8);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products?limit=${limit}`
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, [limit]);

  const handleShow8Products = () => setLimit(8);
  const handleShow16Products = () => setLimit(16);
  const handleShowAllProducts = () => setLimit(20);

  if (!Array.isArray(products) || products.length === 0) {
    return <p>There are no products available</p>;
  }

  return (
    <div className={css.productListWrap}>
      <div className={css.productListButton}>
        <button className={css.button} onClick={handleShow8Products}>
          Show 8 products
        </button>
        <button className={css.button} onClick={handleShow16Products}>
          Show 16 products
        </button>
        <button className={css.button} onClick={handleShowAllProducts}>
          Show all products
        </button>
      </div>
      <ul className={css.productList}>
        {products.map(({ id, image, title, price }) => {
          return (
            <ProductItem key={id} image={image} title={title} price={price} />
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
