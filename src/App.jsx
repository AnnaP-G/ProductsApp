import { Route, Routes } from "react-router-dom";
import Layout from "./Layout.jsx";
import { lazy } from "react";
import EditProduct from "./components/EditProduct/EditProduct.jsx";
import EditProductPage from "./pages/EditProductPage/EditProductPage.jsx";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const ProductsPage = lazy(() =>
  import("./pages/ProductsPage/ProductsPage.jsx")
);
const ProductDetailsPage = lazy(() =>
  import("./pages/ProductDetailsPage/ProductDetailsPage.jsx")
);
const AddProductPage = lazy(() =>
  import("./pages/AddProductPage/AddProductPage.jsx")
);
const NotFoundPages = lazy(() =>
  import("./pages/NotFoundPages/NotFoundPages.jsx")
);

const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:productId" element={<ProductDetailsPage />} />
          <Route
            path="/products/edit/:productId"
            element={<EditProductPage />}
          />
          <Route path="/add-product" element={<AddProductPage />} />
          <Route path="*" element={<NotFoundPages />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
