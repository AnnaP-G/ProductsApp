import { useSelector } from "react-redux";
import { selectProducts } from "../../redux/products/selectors.js";

const UserListProducts = () => {
  const products = useSelector(selectProducts);
  return <div> Add Product</div>;
};

export default UserListProducts;
