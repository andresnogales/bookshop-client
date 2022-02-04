import BooksList from "./BooksList";
import classes from "./BooksSection.module.css";
const BooksSection = (props) => {
  return (
    <section className={classes.section}>
      <h1>{props.title}</h1>
      {props.items && props.items.length === 0 ? (
        <p>Cargando...</p>
      ) : props.error ? (
        <p>{props.error}</p>
      ) : (
        <BooksList items={props.items} />
      )}
    </section>
  );
};

export default BooksSection;
