const initialState = {
  name: "",
  username: "",
  password: "",
};

export const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { username: action.username, password: action.password };
    case "LOGIN_FAIL":
      return { error: action.payload };
    default:
      return state;
  }
};
