import React, { useContext } from "react";
import { CartContext } from "../../App";
import { WishlistContext } from '../../App'
import "./cart-line.css";
export default function CartLine({ cartItem }) {
  const { addToCart, removeItemHandler } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  const dec = (id) => {
    addToCart(id, -1);
  };
  const inc = (id) => {
    addToCart(id, 1);
  };
  return (
    <div className="cart-card" key={cartItem.itemId}>
      <div>
        <img alt="product" className="cart-card-image" src={cartItem.imageURL} />
      </div>
      <div className='cart-product-info'>
        <p className="cart-card-title">{cartItem.title}</p>
        <p className="cart-card-description">{cartItem.description}</p>
        <div className='cart-product-pricing'>
          <p className="cart-card-price">₹{cartItem.price * cartItem.quantity}</p>
          <p className='cart-card-mrp'>₹{cartItem.mrp * cartItem.quantity}</p>
          <p className='cart-card-discount'>{cartItem.discount}% off</p>
        </div>
        <div className="counter">
          <button
            onClick={() => dec(cartItem.itemId)}
            disabled={cartItem.quantity === 1}
            className="counter-btn"
          >
            &#8722;
        </button>
          <p className="count">{cartItem.quantity}</p>
          <button onClick={() => inc(cartItem.itemId)} className="counter-btn">
            &#43;
        </button>
        </div>
        <div className="cart-wishlist-btn">
          <p
            onClick={() => removeItemHandler(cartItem.itemId)}
            className="cart-btn"
          >
            Remove
        </p>
          <p
            onClick={() => {
              addToWishlist(cartItem.itemId);
              removeItemHandler(cartItem.itemId);
            }}
            className="cart-btn"
          >
            Move to Wishlist
        </p>
          {/* <p className='cart-btn'>
            Proceed to Buy
          </p> */}
        </div>
      </div>
    </div >
  );
}
