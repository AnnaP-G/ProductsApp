import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./EditProduct.module.css";
import { selectProductById } from "../redux/products/selectors.js";
import { updateProduct } from "../redux/products/operations.js";
import { validationSchema } from "../utils/validationSchema.js";
import { updateProductAsync } from "../redux/userProducts/operations.js";
import { selectProductByIdFromRedux } from "../redux/userProducts/selectors.js";

const EditProduct = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productsFromApi = useSelector((state) => state.products.products);
  // const addedProducts = useSelector((state) => state.userProducts.products);

  const product = useSelector(
    (state) =>
      selectProductById(state, productId) ||
      selectProductByIdFromRedux(state, productId)
  );

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      if (productsFromApi.find((p) => p.id === productId)) {
        await dispatch(updateProduct({ ...values, id: productId }));
        navigate(`/products/`);
      } else {
        await dispatch(updateProductAsync({ ...values, id: productId }));
        navigate(`/add-product`);
      }
    } catch (error) {
      console.error("Error updating product:", error);
    } finally {
      setSubmitting(false);
    }
  };

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <Formik
      initialValues={{
        title: product.title,
        price: product.price,
        description: product.description,
        published: product.published,
        image: product.image,
        category: product.category,
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={css.form}>
          <div className={css.formGroup}>
            <label htmlFor="title">Title</label>
            <Field name="title" type="text" className={css.input} />
            <ErrorMessage name="title" component="div" className={css.error} />
          </div>

          <div className={css.formGroup}>
            <label htmlFor="price">Price</label>
            <Field
              name="price"
              type="number"
              step="0.01"
              className={css.input}
            />
            <ErrorMessage name="price" component="div" className={css.error} />
          </div>

          <div className={css.formGroup}>
            <label htmlFor="description">Description</label>
            <Field name="description" as="textarea" className={css.textarea} />
            <ErrorMessage
              name="description"
              component="div"
              className={css.error}
            />
          </div>

          <div className={css.formGroup}>
            <label htmlFor="image">Image URL</label>
            <Field name="image" type="text" className={css.input} />
            <ErrorMessage name="image" component="div" className={css.error} />
          </div>

          <div className={css.formGroup}>
            <label htmlFor="category">Category</label>
            <Field name="category" type="text" className={css.input} />
            <ErrorMessage
              name="category"
              component="div"
              className={css.error}
            />
          </div>

          <div className={css.formGroupCheckbox}>
            <label className={css.checkLabel}>
              <Field name="published" type="checkbox" />
              Published
            </label>
          </div>

          <button
            type="submit"
            className={css.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Updating..." : "Update Product"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default EditProduct;
