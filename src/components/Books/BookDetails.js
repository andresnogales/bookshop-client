import { useContext, useEffect } from "react";
import CartContext from "../../context/CartContext";
import Button from "../UI/Button";
import classes from "./BookDetails.module.css";
const BookDetails = (props) => {
  const cartContext = useContext(CartContext);

  const book = props.item;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: book.id,
      title: book.title,
      amount: amount,
      price: book.price,
    });
  };

  const addItemHandler = () => {
    addToCartHandler(1);
  };

  return (
    <div className={classes.container}>
      <div className={classes.picture}>
        <img src={book.picture} alt={book.title} />
      </div>
      <div className={classes.details}>
        <h2>{book.title}</h2>
        <p className={classes.price}>${book.price}</p>
        <span>Autor: {book.author.fullName}</span>
        <span>Editorial: {book.editorial}</span>
        <span>Formato: {book.format}</span>
        <span>ISBN: {book.isbn}</span>

        <p className={classes.description}>{book.description}</p>
        <div className={classes.controls}>
          <p>
            <span>Cantidad: </span>
            <select class="form-control">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </p>

          <Button label="Añadir al carrito" onClick={addItemHandler} />
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
