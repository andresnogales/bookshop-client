import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { bookDetailsReducer, bookListReducer } from "./reducers/bookReducer";
import { authReducer } from "./reducers/authReducer";
import { messageReducer } from "./reducers/messageReducer";

const reducer = combineReducers({
  bookList: bookListReducer,
  bookDetails: bookDetailsReducer,
  auth: authReducer,
  message: messageReducer,
});

const middleware = [thunk];

// create Store
const store = createStore(reducer, applyMiddleware(...middleware));

export default store;
