import { useEffect, useState } from "react";
import { createContext } from "react";
import { addToLS, getFromLS } from "./helperFunctions";
import { CART_LSKEY } from "./enums";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(null);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const deleteFromCart = (item) => {
    setCartItems(cartItems.filter((book) => book?.id != item?.id));
  };

  useEffect(() => {
    const data = getFromLS(CART_LSKEY);
    data ? setCartItems(data) : setCartItems([]);
  }, []);

  useEffect(() => {
    addToLS(CART_LSKEY, cartItems);
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
