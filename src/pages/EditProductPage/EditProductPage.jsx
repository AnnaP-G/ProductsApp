import { useNavigate } from "react-router-dom";
import EditProduct from "../../components/EditProduct/EditProduct.jsx";
import css from "./EditProductPage.module.css";

const EditProductPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={css.pageContainer}>
      <button className={css.goBackButton} onClick={handleGoBack}>
        Go Back
      </button>
      <div className={css.contentContainer}>
        <h1>Edit Product</h1>
        <EditProduct />
      </div>
    </div>
  );
};

export default EditProductPage;
