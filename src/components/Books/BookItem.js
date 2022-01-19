import { Link } from "react-router-dom";
import classes from "./BookItem.module.css";

const BookItem = (props) => {
  const itemClickHadler = () => {
    console.log(props.id);
  };

  return (
    <div className={classes.item} onClick={itemClickHadler}>
      <img className={classes.image} src={props.image} alt="imagen de libro" />
      <div className={classes.title}>
        <Link className={classes["title-link"]} to={"/details/" + props.id}>
          {props.title}
        </Link>
      </div>
      <p className={classes.author}>{props.author}</p>
      <p className={classes.price}>${props.price}</p>
      <button>Agregar</button>
    </div>
  );
};

export default BookItem;
