import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import "./styles.css";
import Navbar from './components/navbar/Navbar'
import ProductPage from "./components/productPage/ProductPage";
import WishlistPage from "./components/wishlistPage/WishlistPage";
import CartPage from "./components/CartPage/CartPage";
import { Routes, Route, NavLink } from "react-router-dom";

export const CartContext = createContext();
export const WishlistContext = createContext();
export const ProductContext = createContext();

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([{
    imageURL:
      "https://rukminim1.flixcart.com/image/495/594/k1s6ljk0/sweatshirt/h/h/j/m-bv2646-010-nike-original-imafh9v2wfepyahn.jpeg?q=50",
    title: "Product",
    description: "Printed round neck sweat-shirt",
    price: 899,
    mrp: 1999,
    discount: 60,
    itemId: 1,
    quantity: 1
  },
  {
    imageURL:
      "https://rukminim1.flixcart.com/image/495/594/kg6vfrk0/sweatshirt/n/e/y/s-58977801-puma-original-imafwhgypxm7krhw.jpeg?q=50",
    title: "Product 1",
    description: "Printed round neck sweat-shirt",
    price: 899,
    mrp: 1999,
    discount: 60,
    itemId: 2,
    quantity: 1
  },
  ]);
  const [wishlist, setWishlist] = useState([{
    imageURL:
      "https://rukminim1.flixcart.com/image/495/594/k1s6ljk0/sweatshirt/h/h/j/m-bv2646-010-nike-original-imafh9v2wfepyahn.jpeg?q=50",
    title: "Product",
    description: "Printed round neck sweat-shirt",
    price: 899,
    mrp: 1999,
    discount: 60,
    itemId: 1,
    quantity: 1
  },
  {
    imageURL:
      "https://rukminim1.flixcart.com/image/495/594/kg6vfrk0/sweatshirt/n/e/y/s-58977801-puma-original-imafwhgypxm7krhw.jpeg?q=50",
    title: "Product 1",
    description: "Printed round neck sweat-shirt",
    price: 899,
    mrp: 1999,
    discount: 60,
    itemId: 2,
    quantity: 1
  },
  ]);

  useEffect(() => {
    axios("https://learningexpress.sandeepashok.repl.co/products").then(
      (productList) => {
        setProducts(productList.data);
      }
    );
  }, []);

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

  const removeItemFromWishlist = (id) => {
    const filteredItem = wishlist.filter((product) => {
      return product.itemId !== id;
    });

    setWishlist(filteredItem);
  };

  return (
    <div className="App">

      <Navbar />

      <CartContext.Provider value={{ cart, addItemToCart, removeItemFromCart, }}>
        <WishlistContext.Provider
          value={{ wishlist, addItemToWishlist, removeItemFromWishlist }}
        >
          <ProductContext.Provider value={{ products }}>
            <Routes>
              <Route
                path="/"
                element={
                  <ProductPage
                    products={products}
                  />
                }
              />
              <Route
                path="/cart"
                element={
                  <CartPage wishlist={cart} />
                }
              />
              <Route
                path="/wishlist"
                element={
                  <WishlistPage
                    wishlist={wishlist}
                  />
                }
              />
            </Routes>
          </ProductContext.Provider>
        </WishlistContext.Provider>
      </CartContext.Provider>
    </div>
  );
}
