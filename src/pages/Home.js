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

  const latest =
    books.length >= 5
      ? books.slice(books.length - 5, books.length).reverse()
      : books.reverse();

  useEffect(() => {
    dispatch(listBooks());
  }, [dispatch]);

  return (
    <Fragment>
      <BooksSection title="Destacados" items={featured} error={error} />
      <BooksSection title="Últimos agregados" items={latest} error={error} />
    </Fragment>
  );
};

export default Home;
