import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BooksList from "../components/Books/BooksList";
import { listBooks } from "../actions/bookActions.js";
import BooksSection from "../components/Books/BooksSection";

const Home = (props) => {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.bookList);
  const { error, books } = bookList;

  const featured = books.filter((book) => {
    return book.featured === true;
  });

  useEffect(() => {
    dispatch(listBooks());
  }, [dispatch]);

  return (
    <Fragment>
      <BooksSection title="Destacados" items={featured} error={error} />
      <BooksSection title="Últimos agregados" items={books} error={error} />
    </Fragment>
  );
};

export default Home;
