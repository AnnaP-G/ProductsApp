import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required("Title is required")
    .min(3, "Title is too short"),
  price: Yup.number()
    .required("Price is required")
    .min(0.01, "Price must be greater than 0")
    .positive("Price must be positive"),
  description: Yup.string()
    .required("Description is required")
    .min(5, "Description is too short"),
  published: Yup.boolean().required("Published is required"),
  image: Yup.string().url("Invalid image URL"),
  category: Yup.string().required("Category is required"),
});
