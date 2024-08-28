import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../Product/ProductCard/ProductCard.jsx";
import DeleteProductModal from "../../DeleteProductModal/DeleteProductModal.jsx";
import css from "./ProductItem.module.css";
import sprite from "../images/icon.svg";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/products/operations.js";

const ProductItem = ({ product, onShowMore }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

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
  };

  return (
    <>
      <li className={css.productItem}>
        <ProductCard
          image={product.image}
          title={product.title}
          price={product.price}
        />
        <div className={css.buttonContainer}>
          <button
            className={css.showInfoButton}
            onClick={() => onShowMore(product)}
          >
            Show info
          </button>
          <button className={css.editButton} onClick={handleEdit}>
            <svg className={css.iconEdit} aria-hidden="true">
              <use href={`${sprite}#icon-edit`} />
            </svg>
          </button>
          <button className={css.deleteButton} onClick={handleDelete}>
            <svg className={css.iconDelete} aria-hidden="true">
              <use href={`${sprite}#icon-trash`} />
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
