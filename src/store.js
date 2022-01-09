import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { bookDetailsReducer, bookListReducer } from "./reducers/bookReducer";

const reducer = combineReducers({
  bookList: bookListReducer,
  bookDetails: bookDetailsReducer,
});

const middleware = [thunk];

// create Store
const store = createStore(reducer, applyMiddleware(...middleware));

export default store;
