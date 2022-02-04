import classes from "./Header.module.css";
import logo from "../../assets/logo.png";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Hero from "./Hero";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = (props) => {
  const [isHome, setIsHome] = useState(false);
  const history = useNavigate();
  let location = useLocation();

  useEffect(() => {
    console.log("Ejecutando efecto");
    console.log(location.pathname);
    if (location.pathname === "/") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [history]);

  return (
    <header className={classes.header}>
      <div className={classes["header-top"]}>
        <div className={classes.logo}>
          <Link to="/">
            <img className={classes.logo} src={logo} alt="logo" />
          </Link>
        </div>
        <div className={classes.search}>
          <input className={classes["search__input"]} type="text"></input>
          <button className={classes["search__button"]}>
            <FaSearch />
          </button>
        </div>
      </div>
      {isHome ? <Hero /> : ""}
    </header>
  );
};

export default Header;
