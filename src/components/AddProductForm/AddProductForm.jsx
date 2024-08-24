import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import css from "./AddProductForm.module.css";
import { addProduct } from "../redux/products/operations.js";
import { validationSchema } from "../utils/validationSchema.js";

const AddProductForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        title: "",
        price: "",
        description: "",
        published: false,
        image: "",
        category: "",
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const productData = {
          ...values,
          price: parseFloat(values.price),
          createdAt: new Date().toISOString(),
        };

        try {
          await dispatch(addProduct(productData)).unwrap();
          resetForm();
          navigate("/products");
        } catch (error) {
          console.error("Error adding product:", error);
        } finally {
          setSubmitting(false);
        }
      }}
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
            <label>
              <Field name="published" type="checkbox" />
              Published
            </label>
          </div>

          <button
            type="submit"
            className={css.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Add Product"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AddProductForm;
