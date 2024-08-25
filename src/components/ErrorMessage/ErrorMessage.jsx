import css from "./ErrorMessage.module.css";

const ErrorMessage = ({
  message = "Oopsie! Something went wrong. Please try again!🙃",
}) => {
  return <p className={css.textError}>{message}</p>;
};

export default ErrorMessage;
