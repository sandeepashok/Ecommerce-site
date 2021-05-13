import React, { useContext } from 'react'
import './cart-summary.css'
import { CartContext } from "../../App";

export default function CartSummary() {
  const { cart } = useContext(CartContext);

  const mrpArr = [0]
  const priceArr = [0]
  cart.forEach(cartItem => {
    mrpArr.push(cartItem.mrp * cartItem.quantity)
    priceArr.push(cartItem.price * cartItem.quantity)
  })

  const totalMrp = mrpArr.reduce((acc, cv) => acc + cv)
  const totalPrice = priceArr.reduce((acc, cv) => acc + cv)

  console.log('mrp: ', totalMrp, 'price: ', totalPrice)
  return (
    <div className='cart-summary-section'>
      <div className='cart-summary'>
        <h2 className='cart-summary-heading' >PRICE DETAILS</h2>
        <div className='cart-summary-pricing' >
          <div className='summary-price'>
            <p>Price</p>
            <p className='mrp'>₹{totalMrp}</p>
          </div>
          <div className='summary-price'>
            <p>Discount</p>
            <p className='discount-price' >-₹{totalMrp - totalPrice}</p>
          </div>
          <div className='summary-total'>
            <p>Total Amount</p>
            <p>₹{totalPrice}</p>
          </div>
        </div>
      </div>
    </div>
  )
}


