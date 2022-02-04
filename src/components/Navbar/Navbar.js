import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import { logout } from "../../actions/authActions.js";
import NavbarCartButton from "./NavbarCartButton";

const Navbar = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logOutHandler = () => {
    dispatch(logout());
  };

  return (
    <nav className={classes.nav}>
      <ul className={classes["nav-links"]}>
        <li className={classes["item"]}>
          <Link className={classes["item-link"]} to="/">
            Home
          </Link>
        </li>
        <li className={classes["item"]}>
          {!isLoggedIn ? (
            <Link className={classes["item-link"]} to="/login">
              Login
            </Link>
          ) : (
            <div className={classes["logout"]} onClick={logOutHandler}>
              Cerrar sesión
            </div>
          )}
        </li>
        <li>
          <Link className={classes["item-link"]} to="/cart">
            <NavbarCartButton />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
