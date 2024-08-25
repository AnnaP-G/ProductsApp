import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../Product/ProductCard/ProductCard.jsx";
import DeleteProductModal from "../../DeleteProductModal/DeleteProductModal.jsx";
import css from "./ProductItem.module.css";
import sprite from "../../../assets/images/icon.svg";

const ProductItem = ({ product, onShowMore, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const imageUrl = product.images[0];

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
    onDelete(product.id);
    setIsModalOpen(false);
  };

  return (
    <>
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
            Show info
          </button>
          <button className={css.editButton} onClick={handleEdit}>
            <svg className={css.icon} aria-hidden="true">
              <use xlinkHref={`${sprite}#icon-edit`} />
            </svg>
          </button>
          <button className={css.deleteButton} onClick={handleDelete}>
            <svg className={css.icon} aria-hidden="true">
              <use xlinkHref={`${sprite}#icon-trash`} />
            </svg>
          </button>
        </div>
      </li>
      {isModalOpen && (
        <DeleteProductModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onConfirm={confirmDelete}
        />
      )}
    </>
  );
};

export default ProductItem;
