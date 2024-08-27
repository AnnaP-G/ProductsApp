import { Route, Routes } from "react-router-dom";
import Layout from "./Layout.jsx";
import { lazy, useEffect } from "react";
import EditProductPage from "./pages/EditProductPage/EditProductPage.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "./components/redux/auth/selectors.js";
import { refreshUser } from "./components/redux/auth/operations.js";
import { RestrictedRoute } from "./RestrictedRoute.jsx";

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
const RegisterPage = lazy(() =>
  import("./pages/RegisterPage/RegisterPage.jsx")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage.jsx"));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing); // Виправлено тут

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/products"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/products"
                component={<LoginPage />}
              />
            }
          />
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
