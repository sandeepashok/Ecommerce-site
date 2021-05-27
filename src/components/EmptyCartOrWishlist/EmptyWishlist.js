import React from 'react'
import { Link } from 'react-router-dom'
import './empty-cart-wishlist.css'

export default function EmptyWishlist() {
  return (
    <div className='empty-page-img-container'>
      <img alt='empty-cart' src='https://res.cloudinary.com/dkavbodkk/image/upload/v1622102865/empty%20cart%20and%20wishlist/empty_wishlist.svg' className='empty-img' />
      <h2 className='empty-message'>Wishlist is Empty ☹️</h2>
      <Link to='/shop' className='goto-shop' >Shop Now</Link >
    </div>
  )
}
