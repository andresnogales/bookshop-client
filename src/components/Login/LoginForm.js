import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Input from "../UI/Input";

import classes from "./LoginForm.module.css";
import { login } from "../../actions/authActions.js";

import Form from "react-bootstrap/Form";
import Button from "../UI/Button";

const LoginForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  const usernameInputHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordInputHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    setLoading(true);

    dispatch(login(username, password))
      .then(() => {
        props.history.push("/");
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.inputBox}>
          <label>Username</label>
          <Input
            type="text"
            name="username"
            value=""
            onChange={usernameInputHandler}
          />
        </div>
        <div className={classes.inputBox}>
          <label>Password</label>
          <Input
            type="password"
            name="text"
            value=""
            onChange={passwordInputHandler}
          />
        </div>
        <Button type="submit" label="Login" />
        <div className={classes.error}>
          {message ? <p>Usuario o contraseña incorrectos</p> : ""}
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
