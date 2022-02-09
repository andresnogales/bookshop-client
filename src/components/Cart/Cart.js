import { useContext } from "react";
import CartContext from "../../context/CartContext";
import Button from "../UI/Button";
import CartItem from "./CartItem";

const Cart = () => {
  const cartContext = useContext(CartContext);

  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul style={{ "list-style": "none" }}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          title={item.title}
          picture={item.picture}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
      <h2>Total: ${cartContext.totalAmount}</h2>
      <Button label="Ordenar" />
    </ul>
  );
  return (
    <div>
      <h1>Mi carrito</h1>
      {cartContext.items.length > 0 ? cartItems : <p>No hay nada aquí</p>}
    </div>
  );
};

export default Cart;
