import AddProductForm from "../../components/AddProductForm/AddProductForm.jsx";
import UserListProducts from "../../components/Product/UserListProducts/UserListProducts.jsx";
import css from "./AddProductPage.module.css";

const AddProductPage = () => {
  return (
    <div className={css.addProductPage}>
      <h1 className={css.addProductPageTitle}>Add New Product</h1>
      <AddProductForm />
      <UserListProducts />
    </div>
  );
};

export default AddProductPage;
