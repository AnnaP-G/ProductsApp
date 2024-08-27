import { useSelector } from "react-redux";
import { AuthNav } from "../AuthNav/AuthNav.jsx";
import Navigation from "../Navigation/Navigation.jsx";
import { UserMenu } from "../UserMenu/UserMenu.jsx";
import css from "./AppBar.module.css";
import { selectIsLoggedIn } from "../redux/auth/selectors.js";

const AppBar = () => {
  const { isLoggedIn } = useSelector(selectIsLoggedIn);
  return (
    <header className={css.header}>
      <div className={css.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};

export default AppBar;
