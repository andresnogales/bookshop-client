import Button from "../UI/Button";
import classes from "./CartItem.module.css";
const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li>
      <div className={classes["container"]}>
        <img src={props.picture} width="100" alt={props.title} />

        <div className={classes["details"]}>
          <h2>{props.title}</h2>
          <div className={classes["price"]}>
            <span>{price}</span>
            <span className={classes["amount"]}>x {props.amount}</span>
          </div>
          <Button onClick={props.onRemove} label="-" width="50"></Button>
          <Button onClick={props.onAdd} label="+" width="50"></Button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
