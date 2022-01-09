import axios from "axios";

export const listBooks = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/book");

    dispatch({
      type: "BOOK_LIST_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "BOOK_LIST_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listBookDetails = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/book/${id}`);
    dispatch({
      type: "BOOK_DETAILS_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "BOOK_DETAILS_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
