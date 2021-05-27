import React, { useContext } from 'react'
import './home.css'
import { ProductContext } from '../../Context/ProductContext'
import { Link } from 'react-router-dom'

export default function Home() {
  const { categorySelectionHandler, brandSelectionHandler } = useContext(ProductContext);
  return (
    <div className='homepage-container'>

      <div className='sale-offers'>
        <p>Discounts on various products upto 60% Off <Link to='/shop' className='sales-link'><span>Shop Now</span></Link></p>
      </div>

      <Link to='/shop'><img alt='banner' src='https://res.cloudinary.com/dkavbodkk/image/upload/v1622017930/landing-page-images/hero-img.jpg' className='hero-image' /></Link>

      <h2 className='headings'>Featured Categories</h2>

      <div className='categories-container'>
        <Link to='/shop' className='card-link' onClick={() => categorySelectionHandler('Sweatshirts')}>
          <div className='category-card'>
            <img alt='category-img' src='https://res.cloudinary.com/dkavbodkk/image/upload/v1622022289/landing-page-images/sweatshirt.svg' className='category-img' />
            <h3 className='category-label'>Sweatshirts</h3>
          </div>
        </Link>
        <Link to='/shop' className='card-link' onClick={() => categorySelectionHandler('Track Pants')}>
          <div className='category-card' >
            <img alt='category-img' src='https://res.cloudinary.com/dkavbodkk/image/upload/v1622022289/landing-page-images/trackpants.svg' className='category-img' />
            <h3 className='category-label'>Trackpants</h3>
          </div>
        </Link>
        <Link to='/shop' className='card-link' onClick={() => categorySelectionHandler('T-shirts')}>
          <div className='category-card' >
            <img alt='category-img' src='https://res.cloudinary.com/dkavbodkk/image/upload/v1622022290/landing-page-images/tshirt.svg' className='category-img' />
            <h3 className='category-label'>Shirts</h3>
          </div>
        </Link>
        <Link to='/shop' className='card-link' onClick={() => categorySelectionHandler('Shoes')}>
          <div className='category-card' >
            <img alt='category-img' src='https://res.cloudinary.com/dkavbodkk/image/upload/v1622022289/landing-page-images/shoe.svg' className='category-img' />
            <h3 className='category-label'>Shoes</h3>
          </div>
        </Link>
      </div>

      <h2 className='headings'>Best of Brands</h2>

      <div className='brands-container'>
        <Link to='/shop' className='card-link'>
          <div className='brand-card' onClick={() => brandSelectionHandler('NIKE')}>
            <img alt='brand-img' src='https://res.cloudinary.com/dkavbodkk/image/upload/v1622014025/landing-page-images/nike.jpg' className='brand-img' />
            <h3 className='brand-label'>NIKE</h3>
          </div>
        </Link>
        <Link to='/shop' className='card-link'>
          <div className='brand-card' onClick={() => brandSelectionHandler('PUMA')}>
            <img alt='brand-img' src='https://res.cloudinary.com/dkavbodkk/image/upload/v1622014025/landing-page-images/puma.jpg' className='brand-img' />
            <h3 className='brand-label'>PUMA</h3>
          </div>
        </Link>
        <Link to='/shop' className='card-link'>
          <div className='brand-card' onClick={() => brandSelectionHandler('ADIDAS')}>
            <img alt='brand-img' src='https://res.cloudinary.com/dkavbodkk/image/upload/v1622014025/landing-page-images/adidas.jpg' className='brand-img' />
            <h3 className='brand-label'>ADIDAS</h3>
          </div>
        </Link>
        <Link to='/shop' className='card-link'>
          <div className='brand-card' onClick={() => brandSelectionHandler('UNDERARMOUR')}>
            <img alt='brand-img' src='https://res.cloudinary.com/dkavbodkk/image/upload/v1622014026/landing-page-images/underarmour.jpg' className='brand-img' />
            <h3 className='brand-label'>UA</h3>
          </div>
        </Link>
        <Link to='/shop' className='card-link'>
          <div className='brand-card' onClick={() => brandSelectionHandler('HRX')}>
            <img alt='brand-img' src='https://res.cloudinary.com/dkavbodkk/image/upload/v1622028258/landing-page-images/hrx.png' className='brand-img' />
            <h3 className='brand-label'>HRX</h3>
          </div>
        </Link>
      </div>

    </div>
  )
}
