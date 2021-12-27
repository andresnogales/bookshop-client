import classes from "./BookItem.module.css";

const BookItem = (props) => {
  return (
    <div className={classes.item}>
      <img className={classes.image} src={props.image} alt="item image" />
      <h3 className={classes.title}>{props.title}</h3>
      <p className={classes.author}>{props.author}</p>
      <p className={classes.price}>${props.price}</p>
    </div>
  );
};

export default BookItem;
