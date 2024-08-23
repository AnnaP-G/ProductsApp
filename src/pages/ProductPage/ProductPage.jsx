import { useState } from "react";
import ProductList from "../../components/Product/ProductList/ProductList.jsx";
import { useEffect } from "react";
import axios from "axios";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function apiFetchProducts() {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    }
    apiFetchProducts();
  }, []);

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

export default ProductPage;
