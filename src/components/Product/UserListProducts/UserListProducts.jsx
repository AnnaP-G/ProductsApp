import css from "./UserListProducts.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import DeleteProductModal from "../../DeleteProductModal/DeleteProductModal.jsx";
import { selectUserProducts } from "../../redux/userProducts/selectors.js";
import { deleteProductAsync } from "../../redux/userProducts/operations.js";
import { useNavigate } from "react-router-dom";

const UserListProducts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const userProducts = useSelector(selectUserProducts) || [];

  const handleEdit = (id) => {
    navigate(`/products/edit/${id}`);
  };

  const handleDelete = (id) => {
    setSelectedProductId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProductId(null);
  };

  const confirmDelete = () => {
    if (selectedProductId) {
      dispatch(deleteProductAsync(selectedProductId));
    }
    setIsModalOpen(false);
    setSelectedProductId(null);
  };

  return (
    <div className={css.productList}>
      <h1>User Products</h1>
      {userProducts.length === 0 ? (
        <p>No products added yet</p>
      ) : (
        userProducts.map((product) => (
          <div key={product.id} className={css.productDetailsInfo}>
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
            <button
              className={css.editButton}
              onClick={() => handleEdit(product.id)}
            >
              Edit Product
            </button>
            <button
              className={css.deleteButton}
              onClick={() => handleDelete(product.id)}
            >
              Delete Product
            </button>
            {isModalOpen && (
              <DeleteProductModal
                isOpen={isModalOpen}
                onClose={closeModal}
                onConfirm={confirmDelete}
              />
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default UserListProducts;
