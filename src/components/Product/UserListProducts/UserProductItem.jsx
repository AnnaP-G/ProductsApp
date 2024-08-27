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
      <h2>{product.title}</h2>
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
      <button className={css.editButton} onClick={() => handleEdit(product.id)}>
        Edit Product
      </button>
      <button className={css.deleteButton} onClick={() => setIsModalOpen(true)}>
        Delete Product
      </button>
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
