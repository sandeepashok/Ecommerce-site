import React, { useContext } from "react";
import "./wishlist-line.css";
import { WishlistContext } from "../../Context/WishlistContext";
import { CartContext } from '../../Context/CartContext'
import { FaHeart } from 'react-icons/fa';
import { Link } from "react-router-dom";
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

export default function WishlistLine({ wishlistItem }) {
  const { cart, addItemToCart } = useContext(CartContext);
  const { removeItemFromWishlist } = useContext(WishlistContext);


  const cartItems = cart && cart.find((cartItem) => {
    return cartItem.itemId === wishlistItem.itemId;
  });
  return (
    <div className="card" key={wishlistItem.itemId}>
      <img alt="product" className="card-image" src={wishlistItem.imageURL} />
      <p className='product-title'>{wishlistItem.title}</p>
      <Box component="fieldset" mb={3} borderColor="transparent" className='product-rating'>
        <Rating name="read-only" className='product-rating-stars' value={wishlistItem.rating} readOnly />
      </Box>
      {/* <p className='product-description'>{wishlistItem.description}</p> */}
      <div className='product-pricing'>
        <p className='product-price'>₹{wishlistItem.price}</p>
        <p className='product-mrp'>₹{wishlistItem.mrp}</p>
        <p className='product-discount'>{wishlistItem.discount}% off</p>
      </div>
      <div className="cart-wishlist-but">
        <FaHeart className='wishlist-btn-filled' onClick={() => {
          removeItemFromWishlist(wishlistItem.itemId);
        }} />
        {!!cartItems ? <Link to="/cart" disabled={!wishlistItem.inStock} className={wishlistItem.inStock ? "addOrDel-link-btn" : "out-of-stock"}>Go to Cart</Link> : <button
          onClick={() => {
            addItemToCart(wishlistItem.itemId, 1);
          }}
          disabled={!wishlistItem.inStock} className={wishlistItem.inStock ? "addOrDel-link-btn" : "out-of-stock"}
        >
          {wishlistItem.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>}
      </div>
    </div>
  );
}
