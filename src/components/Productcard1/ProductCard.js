import "./product-card.css";
import { useContext } from "react";
import { WishlistContext } from "../../Context/WishlistContext"
import { CartContext } from '../../Context/CartContext'
import { FaHeart } from 'react-icons/fa';
import { Link } from "react-router-dom";
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

export default function ProductCard({ product }) {
  const { cart, addItemToCart } = useContext(CartContext);
  const { removeItemFromWishlist, addItemToWishlist, wishlist } = useContext(WishlistContext);

  const wishListItems = wishlist.find((wishlistItem) => {
    return wishlistItem.itemId === product.itemId;
  });

  const cartItems = cart && cart.find((cartItem) => {
    return cartItem.itemId === product.itemId;
  });

  return (
    <div className="card" >
      <img alt="product" src={product.imageURL} className="card-image" />
      <p className='product-brand'>{product.brand}</p>
      <p className='product-title' >{product.title}</p>
      <Box component="fieldset" mb={3} borderColor="transparent" className='product-rating'>
        <Rating name="read-only" className='product-rating-stars' value={product.rating} readOnly />
      </Box>
      <div className='product-pricing'>
        <p className='product-price'>₹{product.price}</p>
        <p className='product-mrp'>₹{product.mrp}</p>
        <p className='product-discount'>{product.discount}% off</p>
      </div>
      <div className="cart-wishlist-but">
        {!!cartItems ? <Link to="/cart" disabled={!product.inStock} className={product.inStock ? "addOrDel-link-btn" : "out-of-stock"}>{product.inStock ? 'Go to Cart' : 'Out of Stock'}</Link> : <button
          disabled={!product.inStock}
          onClick={() => {
            addItemToCart(product.itemId, 1);
          }}
          className={product.inStock ? "addOrDel-link-btn" : "out-of-stock"}
        >
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
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
