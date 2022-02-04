import classes from "./NavbarCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

const NavbarCartButton = () => {
  const cartContext = useContext(CartContext);
  const numberOfItems = cartContext.items.reduce((currentNumber, item) => {
    return currentNumber + Number(item.amount);
  }, 0);
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default NavbarCartButton;
