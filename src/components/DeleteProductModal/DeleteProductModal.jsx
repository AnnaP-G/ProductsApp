import css from "./DeleteProductModal.module.css";

const DeleteProductModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className={css.modalBackdrop} onClick={onClose}>
      <div className={css.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>Are you sure you want to delete this product?</h2>
        <div className={css.buttonGroup}>
          <button className={css.confirmButton} onClick={onConfirm}>
            Yes
          </button>
          <button className={css.cancelButton} onClick={onClose}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteProductModal;
