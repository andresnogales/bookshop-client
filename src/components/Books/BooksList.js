import { Fragment } from "react";
import BookItem from "./BookItem";
import classes from "./BooksList.module.css";

const BooksList = (props) => {
  return (
    <ul className={classes.list}>
      {props.items.map((book) => {
        return (
          <BookItem
            key={book.id}
            image={book.image}
            title={book.title}
            author={book.author}
            price={book.price}
          />
        );
      })}
    </ul>
  );
};

export default BooksList;
