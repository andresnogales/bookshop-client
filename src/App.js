import { Fragment } from "react";
import "./App.css";
import BooksList from "./components/Books/BooksList";
import Header from "./components/Layout/Header";
import Main from "./components/Layout/Main";

function App() {
  const dummyBooks = [
    {
      id: 1,
      title: "Harry Potter",
      author: "Rowling, J.K.",
      price: 1900.95,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/41whDWDj3VL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    },
    {
      id: 2,
      title: "One Hundred Years of Solitude",
      author: "Marquez",
      price: 1400.0,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/5164gibO9ZL._SX327_BO1,204,203,200_.jpg",
    },
    {
      id: 3,
      title: "Hamlet, Prince of Denmark",
      author: "Shakespeare",
      price: 709.95,
      image: "https://m.media-amazon.com/images/I/5121-7LJJtL._SY346_.jpg",
    },
    {
      id: 4,
      title: "Lord of the Rings",
      author: "Tolkien, J.R.",
      price: 2700.45,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/41vN31PD7SL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    },
  ];

  return (
    <Fragment>
      <Header />
      <Main>
        <BooksList items={dummyBooks}></BooksList>
      </Main>
    </Fragment>
  );
}

export default App;
