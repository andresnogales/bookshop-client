import BookItem from "./BookItem";
import classes from "./BooksList.module.css";

const BooksList = (props) => {
  return (
    <ul className={classes.list}>
      {props.items.map((book) => {
        return (
          <BookItem
            key={book.id}
            id={book.id}
            image={book.picture}
            title={book.title}
            author={book.author.fullName}
            price={book.price}
          />
        );
      })}
    </ul>
  );
};

export default BooksList;
