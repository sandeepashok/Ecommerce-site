import React from 'react'
import { FaOpencart } from 'react-icons/fa';
import { Link, NavLink } from "react-router-dom";
import './navbar.css'


export default function Navbar() {
  return (
    <nav className='nav-bar'>
      <div className='brand'>
        <Link to="/" className='brand-name'><span className='brand-name'>FitMerch</span><FaOpencart className='brand-logo' /></Link>
      </div>
      <div className='nav-links'>
        <NavLink to="/" end={true} activeClassName='active-nav-link' className='nav-link' >
          Shop
    </NavLink>
        <NavLink to="/wishlist" activeClassName='active-nav-link' className='nav-link'>
          Wishlist
    </NavLink>
        <NavLink to="/cart" activeClassName='active-nav-link' className='nav-link'>
          Cart
    </NavLink>
      </div>
    </nav>
  )
}
