import css from "./UserProductItem.module.css";
import DeleteProductModal from "../../DeleteProductModal/DeleteProductModal.jsx";
import { useState } from "react";

const UserProductItem = ({ product, handleEdit, handleDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const confirmDelete = () => {
    handleDelete(product.id);
    setIsModalOpen(false);
  };

  return (
    <li className={css.productItem}>
      <h2 className={css.productTitle}>{product.title}</h2>
      <div>
        <img
          className={css.productImg}
          src={product.image}
          alt={product.title}
        />
      </div>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      <div className={css.productBtnWrap}>
        <button
          className={css.editButton}
          onClick={() => handleEdit(product.id)}
        >
          Edit
        </button>
        <button
          className={css.deleteButton}
          onClick={() => setIsModalOpen(true)}
        >
          Delete
        </button>
      </div>
      {isModalOpen && (
        <DeleteProductModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onConfirm={confirmDelete}
        />
      )}
    </li>
  );
};

export default UserProductItem;
