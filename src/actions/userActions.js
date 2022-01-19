import axios from "axios";

export const LoginUser = (username, password) => async (dispatch) => {
  try {
    const { data } = await axios.post("/api/authentication/sign-in", {
      username: username,
      password: password,
    });

    dispatch({
      type: "LOGIN_SUCCESS",
      username: data.username,
      password: data.password,
    });

    if (data.token) {
      localStorage.setItem("user", JSON.stringify(data));
    }
  } catch (error) {
    dispatch({
      type: "LOGIN_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
