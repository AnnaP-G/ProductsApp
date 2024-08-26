import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import css from "./ProductDetailsPage.module.css";
import { instance } from "../../components/apiService/api.js";
import DeleteProductModal from "../../components/DeleteProductModal/DeleteProductModal.jsx";
import { deleteProduct } from "../../components/redux/products/operations.js";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleEdit = () => {
    navigate(`/products/edit/${product.id}`);
  };

  const handleDelete = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const confirmDelete = () => {
    dispatch(deleteProduct(product.id));
    setIsModalOpen(false);
    navigate(`/products`);
  };

  useEffect(() => {
    async function fetchProduct() {
      const response = await instance.get(`/products/${productId}`);
      setProduct(response.data);
    }
    fetchProduct();
  }, [productId]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className={css.productDetails}>
      <button className={css.goBackButton} onClick={handleGoBack}>
        Go Back
      </button>
      <div className={css.productDetailsImage}>
        <img
          src={product.image}
          alt={product.title}
          className={css.productImg}
        />
      </div>
      <div className={css.productDetailsInfo}>
        <h2 className={css.productDetailsInfoTitle}>{product.title}</h2>
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
      {isModalOpen && (
        <DeleteProductModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onConfirm={confirmDelete}
        />
      )}
    </div>
  );
};

export default ProductDetailsPage;
