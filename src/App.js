import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import "./App.css";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/Cart/CartProvider";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import Navbar from "./components/Navbar/Navbar";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Header />
          <main className="main">
            <div className="wrapper">
              <Routes>
                <Route path="/libro/:id" element={<Details />} />
                <Route path="/login" element={<Login />} />
                <Route path="/carrito" element={<Cart />} />
                <Route path="/" exact={true} element={<Home />} />
              </Routes>
            </div>
          </main>
        </CartProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
