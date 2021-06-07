import { createContext, useState, useContext, useEffect } from "react";
import { ProductContext } from '../Context/ProductContext'

export const CartContext = createContext();

export default function CartContextProvider({ children }) {

  const { products } = useContext(ProductContext);


  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')) || []);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addItemToCart = (id, count) => {
    const cartItem = cart.find((product) => {
      return product.itemId === id;
    });
    if (!cartItem) {
      const selectedItem = products.find((product) => {
        return product.itemId === id;
      });
      const selectedItemCopy = { ...selectedItem };
      selectedItemCopy.quantity = count;
      setCart([...cart, selectedItemCopy]);

    } else {
      const updatedCartItem = cart.map((product) => {
        if (product === cartItem) {
          const selectedItemCopy = { ...product };
          if (!(selectedItemCopy.quantity === 1 && count !== 1)) {
            selectedItemCopy.quantity = selectedItemCopy.quantity + count;
          }

          return selectedItemCopy;
        }
        return product;
      });
      setCart(updatedCartItem);
    }
  };

  const removeItemFromCart = (id) => {
    const filteredItem = cart.filter((product) => {
      return product.itemId !== id;
    });

    setCart(filteredItem);
  };

  return <CartContext.Provider value={{ cart, setCart, addItemToCart, removeItemFromCart }}>
    {children}
  </CartContext.Provider>
}

