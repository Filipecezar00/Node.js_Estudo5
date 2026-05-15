import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItens, setCartItens] = useState([]);

  const addToCart = (itemToAdd) => {
    const checkItemAlready = cartItens.find((cartItem) => {
      return cartItem._id === itemToAdd._id;
    });

    if (!checkItemAlready) {
      itemToAdd.quantity = 1;
      setCartItens([...cartItens, itemToAdd]);
      console.log("Item added correctly");
    } else {
      console.log("Item is already on cart");
    }
    console.log(cartItens);
  };

  const removeFromCart = (itemId) => {};

  return (
    <CartContext.Provider value={{ removeFromCart, addToCart, cartItens }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    console.log("you are out of CartContext");
  }

  return context;
};
