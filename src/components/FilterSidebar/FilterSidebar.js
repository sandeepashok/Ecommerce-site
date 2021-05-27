import React, { useContext, useState } from 'react'
import "./filter-sidebar.css"
import { ProductContext } from '../../Context/ProductContext'

export default function Sidebar() {

  const { productList, clearAll, sortProductCards, departmentSelectionHandler, categorySelectionHandler, brandSelectionHandler, showAccordingToRatingsHandler, includeOutOfStockDisplayHandler, filterState } = useContext(ProductContext);

  const Categories = []
  const brands = []
  const productListCopy = [...productList];

  productListCopy.forEach(product => {
    if (Categories.indexOf(product.category) === -1) {
      Categories.push(product.category)
    }
    if (brands.indexOf(product.brand) === -1) {
      brands.push(product.brand)
    }
  })

  const [isIncludeOutOfStock, setIsIncludeOutOfStock] = useState(true)

  return (
    <div className='sidebar-container'>
      <header className='header'>
        <h2 className='heading'>Filters</h2>
        <p className='clear-all' onClick={() => clearAll()} >Clear All</p>
      </header>
      <ul className='filters-container'>

        <li className='sub-heading'>Sort By</li>
        <li className='list-items'>
          <label className="form-label" ><input className="form-checkbox-field" type="radio" name="sort" value="low-to-high" checked={filterState.sort.includes('asc')} onChange={() => sortProductCards('asc')} />Price low to high</label>
        </li>
        <li className='list-items'>
          <label className="form-label" ><input className="form-checkbox-field" type="radio" name="sort" value="high-to-low" checked={filterState.sort.includes('dec')} onChange={() => sortProductCards('dec')} />Price high to low</label>
        </li>
        <hr className='filter-divider-line'></hr>
        <li className='sub-heading'>Department</li>
        <li className='list-items'>
          <label className="form-label" ><input className="form-checkbox-field" type="checkbox" name="Department" value="women" checked={filterState.department.includes('women')} onChange={() => departmentSelectionHandler('women')} />Women's</label>
        </li>
        <li className='list-items'>
          <label className="form-label" ><input className="form-checkbox-field" type="checkbox" name="men" value="Department" checked={filterState.department.includes('men')} onChange={() => departmentSelectionHandler('men')} />Men's</label>
        </li>
        <hr className='filter-divider-line'></hr>
        <li className='sub-heading'>Categories</li>
        {
          Categories.map((category) => {
            return (
              <li key={category} className='list-items' >
                <label className="form-label" ><input className="form-checkbox-field" type="checkbox" name='category' value={category} checked={filterState.categories.includes(category)} onChange={() => categorySelectionHandler(category)} />{category}</label>
              </li>
            );
          })
        }
        <hr className='filter-divider-line'></hr>
        <li className='sub-heading'>Brands</li>
        {
          brands.map((brand) => {
            return (
              <li key={brand} className='list-items' >
                <label className="form-label" ><input className="form-checkbox-field" type="checkbox" value='brand' value={brand} checked={filterState.brands.includes(brand)} onChange={() => brandSelectionHandler(brand)} />{brand}</label>
              </li>
            );
          })
        }
        <hr className='filter-divider-line'></hr>
        <li className='sub-heading'>Customer Ratings</li>

        <li className='list-items'>
          <label className="form-label" ><input className="form-checkbox-field" type="checkbox" name="rating" value="1 stars & above" checked={filterState.rating === 1} onChange={() => showAccordingToRatingsHandler(1)} />1 stars & above</label>
        </li>
        <li className='list-items'>
          <label className="form-label" ><input className="form-checkbox-field" type="checkbox" name="rating" value="2 stars & above" checked={filterState.rating === 2} onChange={() => showAccordingToRatingsHandler(2)} />2 stars & above</label>
        </li>
        <li className='list-items'>
          <label className="form-label" ><input className="form-checkbox-field" type="checkbox" name="rating" value="3 stars & above" checked={filterState.rating === 3} onChange={() => showAccordingToRatingsHandler(3)} />3 stars & above</label>
        </li>
        <li className='list-items'>
          <label className="form-label" ><input className="form-checkbox-field" type="checkbox" name="rating" value="4 stars & above" checked={filterState.rating === 4} onChange={() => showAccordingToRatingsHandler(4)} />4 stars & above</label>
        </li>
        <li className='list-items'>
          <label className="form-label"><input className="form-checkbox-field" type="checkbox" name="rating" value="3 stars & above" checked={filterState.rating === 5} onChange={() => showAccordingToRatingsHandler(5)} />5 stars</label>
        </li>
        <hr className='filter-divider-line'></hr>
        <li className='list-items'>
          <label className="form-label" ><input className="form-checkbox-field" type="checkbox" name="out-of-stock" value="Include out of stock" checked={isIncludeOutOfStock} onClick={() => {
            setIsIncludeOutOfStock(!isIncludeOutOfStock)
            includeOutOfStockDisplayHandler(isIncludeOutOfStock)
          }} />
          Include out of stock
          </label>
        </li>
      </ul>
    </div>
  )
}


