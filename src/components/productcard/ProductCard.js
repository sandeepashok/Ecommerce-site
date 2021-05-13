import "./product-card.css";
import { useEffect, useRef, useContext } from "react";
import { CartContext, WishlistContext } from "../../App";
import { FaHeart } from 'react-icons/fa';
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const { cart, addItemToCart } = useContext(CartContext);
  const { removeItemFromWishlist, addItemToWishlist, wishlist } = useContext(WishlistContext);

  const pTag = useRef();

  useEffect(() => {

  }, [cart]);

  const wishListItems = wishlist.find((wishlistItem) => {
    return wishlistItem.itemId === product.itemId;
  });

  const cartItems = cart.find((cartItem) => {
    return cartItem.itemId === product.itemId;
  });

  return (
    <div className="cards">
      <img alt="product" src={product.imageURL} className="card-image" />
      <p className='product-title' >{product.title}</p>
      <p className='product-description'>{product.description}</p>
      <div className='product-pricing'>
        <p className='product-price'>₹{product.price}</p>
        <p className='product-mrp'>₹{product.mrp}</p>
        <p className='product-discount'>{product.discount}% off</p>
      </div>
      <div className="cart-wishlist-but">
        {!!cartItems ? <Link to="/cart" className="addOrDel-link-btn">Go to Cart</Link> : <button
          onClick={() => {
            addItemToCart(product.itemId, 1);
          }}
          className="addOrDel-btn"
        >
          Add to Cart
        </button>}
        {!!wishListItems ? <FaHeart className='wishlist-btn-filled' onClick={() => {
          removeItemFromWishlist(product.itemId);
        }} /> : <FaHeart className='wishlist-btn-empty' onClick={() => {
          addItemToWishlist(product.itemId);
        }} />}
      </div>
    </div>
  );
}
