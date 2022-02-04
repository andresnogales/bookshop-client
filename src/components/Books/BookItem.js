import { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./BookItem.module.css";
import CartContext from "../../context/CartContext";
import Button from "../UI/Button";

const BookItem = (props) => {
  const cartContext = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: props.id,
      title: props.title,
      amount: amount,
      price: props.price,
    });
  };

  const addItemHandler = () => {
    addToCartHandler(1);
  };

  return (
    <div className={classes.item}>
      <img className={classes.image} src={props.image} alt="imagen de libro" />
      <div className={classes.title}>
        <Link className={classes["title-link"]} to={"/details/" + props.id}>
          {props.title}
        </Link>
      </div>
      <p className={classes.author}>{props.author}</p>
      <p className={classes.price}>${props.price}</p>
      <Button label="Agregar" onClick={addItemHandler} />
    </div>
  );
};

export default BookItem;
