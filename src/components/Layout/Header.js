import classes from "./Header.module.css";
import logo from "../../assets/logo.png";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
const Header = () => {
  return (
    <header className={classes.header}>
      <img className={classes.logo} src={logo} alt="logo" />

      <div className={classes.search}>
        <input className={classes["search__input"]} type="text"></input>

        <button className={classes["search__button"]}>
          <FaSearch />
        </button>
        <div>
          <FaShoppingCart />
        </div>
      </div>
    </header>
  );
};

export default Header;
