import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BookDetails from "../components/Books/BookDetails";
import { listBookDetails } from "../actions/bookActions.js";

const Details = (props) => {
  const match = useParams();
  const dispatch = useDispatch();
  const bookDetails = useSelector((state) => state.bookDetails);
  const { error, book } = bookDetails;

  useEffect(() => {
    dispatch(listBookDetails(match.id));
  }, [dispatch, match]);

  return (
    <Fragment>
      {book == null || book.author == null ? (
        <p>Not found </p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <BookDetails item={book} />
      )}
    </Fragment>
  );
};
export default Details;
