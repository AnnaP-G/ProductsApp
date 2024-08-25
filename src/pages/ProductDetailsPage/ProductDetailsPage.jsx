import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import css from "./ProductDetailsPage.module.css";
import { instance } from "../../components/apiService/api.js";
import { deleteProduct } from "../../components/redux/products/operations.js";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const response = await instance.get(`/products/${productId}`);
      setProduct(response.data);
    }
    fetchProduct();
  }, [productId]);

  const handleDelete = async () => {
    try {
      await dispatch(deleteProduct(productId)).unwrap();
      navigate("/products");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleEdit = () => {
    navigate(`/products/edit/${productId}`);
  };

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className={css.productDetails}>
      <div className={css.productDetailsImage}>
        <img
          src={product.images[0]}
          alt={product.title}
          className={css.productImg}
        />
      </div>
      <div className={css.productDetailsInfo}>
        <h1>{product.title}</h1>
        <p>Category: {product.category}</p>
        <p>Price: ${product.price}</p>
        <p>{product.description}</p>
        <button className={css.editButton} onClick={handleEdit}>
          Edit Product
        </button>
        <button className={css.deleteButton} onClick={handleDelete}>
          Delete Product
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
