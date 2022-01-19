import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Input from "../UI/Input";

import classes from "./LoginForm.module.css";
import { login } from "../../actions/authActions.js";

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

    console.log("Llamada a backend", username, password);

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
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.container}>
        <label className={classes.label}>Usuario:</label>
        <Input
          type="text"
          name="username"
          onChange={usernameInputHandler}
        ></Input>
        <label className={classes.label}>Contraseña:</label>
        <Input
          type="password"
          name="password"
          onChange={passwordInputHandler}
        ></Input>

        <button className={classes.button}>Ingresar</button>
      </div>
      {message && (
        <div className="form-group">
          <div className="alert alert-danger" role="alert">
            {message}
          </div>
        </div>
      )}
    </form>
  );
};

export default LoginForm;
