import React from "react";
import "./styles.css";
import Navbar from './components/Navbar/Navbar'
import ProductPage from "./components/ProductPage/ProductPage";
import WishlistPage from "./components/WishlistPage/WishlistPage";
import Home from "./components/Home/Home"
import CartPage from "./components/CartPage/CartPage";
import { Routes, Route } from "react-router-dom";
import CartContextProvider from './Context/CartContext'
import ProductContextProvider from './Context/ProductContext'
import WishlistContextProvider from './Context/WishlistContext'
import Checkout from "./components/Checkout/Checkout";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductContextProvider>
        <CartContextProvider>
          <WishlistContextProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </WishlistContextProvider>
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}
