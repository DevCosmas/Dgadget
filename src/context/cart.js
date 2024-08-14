import { useContext, useState, useEffect, createContext } from 'react';

const CartContext = createContext();

function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setItems(cartItems);
  }, []);

  const add_to_cart = (item) => {
    const updatedItems = [...items, item];
    setItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
  };

  const remove_from_cart = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
  };

  const update_cart = (itemId, quantity) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, quantity } : item
    );
    setItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
  };

  return (
    <CartContext.Provider
      value={{ items, add_to_cart, remove_from_cart, update_cart }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  return useContext(CartContext);
}

export { useCart, CartProvider };
