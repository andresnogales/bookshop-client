import classes from "./BookDetails.module.css";
const BookDetails = (props) => {
  const book = props.item;
  book.author ? console.log(book.author) : console.log("No author");

  return (
    <div className={classes.container}>
      <div className={classes.picture}>
        <img src={book.picture} alt={book.title} />
      </div>
      <div className={classes.details}>
        <h2>{book.title}</h2>
        <span>Autor: {book.author.fullName}</span>
        <span>Editorial: {book.editorial}</span>
        <span>Formato: {book.format}</span>
        <span>ISBN: {book.isbn}</span>

        <p>{book.description}</p>
      </div>
    </div>
  );
};

export default BookDetails;
