import { Route, Routes } from "react-router-dom";
import Layout from "./Layout.jsx";
import { lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const ProductsPage = lazy(() =>
  import("./pages/ProductsPage/ProductsPage.jsx")
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
          <Route path="*" element={<NotFoundPages />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
