import React, { useContext } from "react";
import "./wishlist-line.css";
import { CartContext } from "../../App";
import { WishlistContext } from "../../App";
import { FaHeart } from 'react-icons/fa';
import { Link } from "react-router-dom";

export default function WishlistLine({ wishlistItem }) {
  const { cart, addItemToCart } = useContext(CartContext);
  const { removeItemFromWishlist } = useContext(WishlistContext);


  const cartItems = cart.find((cartItem) => {
    return cartItem.itemId === wishlistItem.itemId;
  });
  return (
    <div className="cards" key={wishlistItem.itemId}>
      <img alt="product" className="card-image" src={wishlistItem.imageURL} />
      <p className='product-title'>{wishlistItem.title}</p>
      <p className='product-description'>{wishlistItem.description}</p>
      <div className='product-pricing'>
        <p className='product-price'>₹{wishlistItem.price}</p>
        <p className='product-mrp'>₹{wishlistItem.mrp}</p>
        <p className='product-discount'>{wishlistItem.discount}% off</p>
      </div>
      <div className="cart-wishlist-but">
        <FaHeart className='wishlist-btn-filled' onClick={() => {
          removeItemFromWishlist(wishlistItem.itemId);
        }} />
        {!!cartItems ? <Link to="/cart" className="addOrDel-link-btn">Go to Cart</Link> : <button
          onClick={() => {
            addItemToCart(wishlistItem.itemId, 1);
          }}
          className="addOrDel-btn"
        >
          Add to Cart
        </button>}
      </div>
    </div>
  );
}
