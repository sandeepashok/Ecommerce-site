import { useContext } from "react";
import CartLine from "../CartLine/CartLine";
import "./cart-page.css";
import { CartContext } from "../../App";
import CartSummary from '../cartSummary/CartSummary'
export default function CartPage() {
  const { cart } = useContext(CartContext);

  return (
    <div className="cart-card-container">
      <div className='cart-map-section'>
        {cart.map((cartItem) => {

          return (
            <CartLine
              key={cartItem.itemId}
              cartItem={cartItem}
            />
          );
        })}
      </div>
      <CartSummary />
    </div>
  );
}
