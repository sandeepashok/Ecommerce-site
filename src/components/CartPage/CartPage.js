import { useContext } from "react";
import CartLine from "../CartLine/CartLine";
import "./cart-page.css";
import { Link } from 'react-router-dom';
import { CartContext } from "../../Context/CartContext";
import CartSummary from '../CartSummary/CartSummary'
import EmptyCart from "../EmptyCartOrWishlist/EmptyCart";
export default function CartPage() {
  const { cart } = useContext(CartContext);

  return (
    Array.isArray(cart) && cart.length ? <div className="cart-card-container">
      <hr className='section-divider'></hr>
      <div className='cart-map-section'>
        {cart && cart.map((cartItem) => {

          return (
            <CartLine
              key={cartItem.itemId}
              cartItem={cartItem}
            />
          );
        })}
      </div>

      <div className='cartsummary-proceed-section'>

        <CartSummary />

        <Link to='/checkout' ><button className='proceed-to-buy'>
          Proceed to Buy
          </button></Link>

        <hr className='section-divider'></hr>

      </div>


    </div> : <EmptyCart />
  );
}
