import css from "./UserProductItem.module.css";
import DeleteProductModal from "../../DeleteProductModal/DeleteProductModal.jsx";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { togglePublished } from "../../redux/userProducts/slice.js";

const UserProductItem = ({ product, handleEdit, handleDelete }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const confirmDelete = () => {
    handleDelete(product.id);
    setIsModalOpen(false);
  };

  const handleTogglePublished = (id) => {
    dispatch(togglePublished(id));
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
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
      <p className={css.productText}>Category: {product.category}</p>
      <p className={css.productText}>Price: ${product.price}</p>
      <p className={css.productText}>{product.description}</p>
      <p className={css.productText}>Created At: {formatDate(product.createdAt)}</p>
      <p className={css.productText}>
        Published At:{" "}
        {product.publicationDate
          ? formatDate(product.publicationDate)
          : "Not Published"}
      </p>
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
      <button
        className={css.togglePublishedButton}
        onClick={() => handleTogglePublished(product.id)}
      >
        {product.published ? "Unpublish" : "Publish"}
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
