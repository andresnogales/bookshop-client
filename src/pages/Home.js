import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BooksList from "../components/Books/BooksList";
import { listBooks } from "../actions/bookActions.js";

const Home = (props) => {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.bookList);
  const { error, books } = bookList;

  useEffect(() => {
    dispatch(listBooks());
  }, [dispatch]);

  return (
    <Fragment>
      <h1>Latest Books</h1>

      {books && books.length === 0 ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <BooksList items={books} />
      )}
    </Fragment>
  );
};

export default Home;
