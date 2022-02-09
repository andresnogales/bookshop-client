import classes from "./Button.module.css";
const Button = (props) => {
  return (
    <button
      className={classes.btn}
      type={props.type}
      onClick={props.onClick}
      width={props.width}
    >
      {props.label}
    </button>
  );
};

export default Button;
