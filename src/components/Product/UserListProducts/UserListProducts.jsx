import css from "./UserListProducts.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteProductAsync,
  updateProductAsync,
} from "../../redux/userProducts/operations.js";
import { selectUserProducts } from "../../redux/userProducts/selectors.js";
import UserProductItem from "./UserProductItem.jsx";
import { statusFilters } from "../../redux/filters/constants.js";
import { StatusFilter } from "../../StatusFilter/StatusFilter.jsx";

const getVisibleProduct = (products, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.published:
      return products.filter((product) => product.published);
    case statusFilters.unpublished:
      return products.filter((product) => !product.published);
    default:
      return products;
  }
};

const UserListProducts = () => {
  const statusFilterProducts = useSelector((state) => state.filters.status);
  const userProducts = useSelector(selectUserProducts) || [];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const visiblePublish = getVisibleProduct(userProducts, statusFilterProducts);

  const handleEdit = (id) => {
    const productToEdit = userProducts.find((product) => product.id === id);
    if (productToEdit) {
      dispatch(updateProductAsync(productToEdit));
      navigate(`/products/edit/${id}`);
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteProductAsync(id));
  };

  return (
    <div className={css.productListContainer}>
      <div className={css.header}>
        <h1 className={css.title}>New List</h1>
        <StatusFilter />
      </div>
      {visiblePublish.length === 0 ? (
        <p>No products added yet</p>
      ) : (
        <ul className={css.userProductList}>
          {visiblePublish.map((product) => (
            <UserProductItem
              key={product.id}
              product={product}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserListProducts;
