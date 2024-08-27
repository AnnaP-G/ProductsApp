import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <>
      <nav>
        <NavLink
          className={({ isActive }) =>
            clsx(css.link, { [css.active]: isActive }, css.logo)
          }
          to="/"
        >
          Your logo
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx(css.link, { [css.active]: isActive })
          }
          to="/"
          end
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx(css.link, { [css.active]: isActive })
          }
          to="/products"
        >
          Products
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx(css.link, { [css.active]: isActive })
          }
          to="/add-product"
        >
          Add Product
        </NavLink>
      </nav>
    </>
  );
};

export default Navigation;
