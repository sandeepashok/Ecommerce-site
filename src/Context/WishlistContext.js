import { useState, createContext, useContext } from 'react'
import { ProductContext } from '../Context/ProductContext'


export const WishlistContext = createContext();

export default function WishlistContextProvider({ children }) {

  const { products } = useContext(ProductContext);

  const [wishlist, setWishlist] = useState([]);

  const addItemToWishlist = (id) => {
    const wishlistItemExists = wishlist.find((product) => {
      return product.itemId === id;
    });
    if (!wishlistItemExists) {
      const selectedItem = products.find((product) => {
        return product.itemId === id;
      });

      const wishlistCopy = [...wishlist]
      const selectedItemCopy = { ...selectedItem };

      wishlistCopy.push(selectedItemCopy)
      setWishlist(wishlistCopy)

    }
  };

  const removeItemFromWishlist = (id) => {
    const filteredItem = wishlist.filter((product) => {
      return product.itemId !== id;
    });

    setWishlist(filteredItem);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addItemToWishlist, removeItemFromWishlist }} >
      {children}
    </WishlistContext.Provider>
  )
}

