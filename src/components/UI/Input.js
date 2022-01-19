import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <input
      className={classes.input}
      type={props.type}
      name={props.name}
      onChange={props.onChange}
    ></input>
  );
};

export default Input;
