import Navigation from "../Navigation/Navigation.jsx";
import css from "./AppBar.module.css";

const AppBar = () => {
  // const { isLoggedIn } = useSelector(selectIsLoggedIn);
  return (
    <header className={css.header}>
      <>
        <div>
          <Navigation />
          {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
        </div>
      </>
      <div>
        <h1 className={css.title}>Your store</h1>
      </div>
    </header>
  );
};

export default AppBar;
