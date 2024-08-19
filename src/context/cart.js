import { useContext, useState, useEffect, createContext } from 'react';

const CartContext = createContext();

function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = get_items();
    setItems(storedItems);
  }, []);

  const get_items = () => {
    try {
      const cartItems = JSON.parse(localStorage.getItem('cart'));
      return cartItems || [];
    } catch (error) {
      console.error('Failed to parse cart items from localStorage:', error);
      return [];
    }
  };

  const calculate_item_total = (price, quantity) => {
    return price * quantity;
  };

  const add_to_cart = (product) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((i) => i._id === product._id);
      let updatedItems;

      if (existingItem) {
        updatedItems = prevItems.map((i) =>
          i._id === product._id
            ? {
                ...i,
                quantity: i.quantity + 1,
                total: calculate_item_total(i.price, i.quantity + 1),
              }
            : i
        );
      } else {
        updatedItems = [
          ...prevItems,
          {
            ...product,
            quantity: 1,
            total: calculate_item_total(product.price, 1),
          },
        ];
      }

      localStorage.setItem('cart', JSON.stringify(updatedItems));
      return updatedItems;
    });

    return true;
  };

  const remove_from_cart = (itemId) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item._id !== itemId);
      localStorage.setItem('cart', JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const update_cart = (itemId, quantity) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item._id === itemId
          ? {
              ...item,
              quantity,
              total: calculate_item_total(item.price, quantity),
            }
          : item
      );
      localStorage.setItem('cart', JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const get_total_cost = () => {
    return items.reduce((total, item) => total + item.total, 0);
  };

  const clear_cart = () => {
    setItems([]);
    localStorage.removeItem('cart');
  };

  return (
    <CartContext.Provider
      value={{
        items,
        get_items,
        add_to_cart,
        remove_from_cart,
        update_cart,
        get_total_cost,
        clear_cart,
      }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  return useContext(CartContext);
}

export { useCart, CartProvider };
