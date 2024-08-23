import ProductList from "../../components/Product/ProductList/ProductList.jsx";

const ProductPage = ({ products }) => {
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

export default ProductPage;
