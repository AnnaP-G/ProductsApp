import AddProductForm from "../../components/AddProductForm/AddProductForm.jsx";
import UserListProducts from "../../components/Product/UserListProducts/UserListProducts.jsx";
import css from "./AddProductPage.module.css";

const AddProductPage = () => {
  return (
    <div className={css.addProductPage}>
      <div>
        <h1 className={css.addProductPageTitle}>Add New Product</h1>
        <AddProductForm />
      </div>
      <UserListProducts />
    </div>
  );
};

export default AddProductPage;
