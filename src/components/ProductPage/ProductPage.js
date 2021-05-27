import { useContext, useState } from 'react'
import { ProductContext } from '../../Context/ProductContext'
import ProductCard from "../Productcard/ProductCard";
import Sidebar from "../FilterSidebar/FilterSidebar"
import TuneIcon from '@material-ui/icons/Tune';
import "./product-page.css";
export default function ProductPage() {

  const { products } = useContext(ProductContext);
  const [showFilter, setShowFilter] = useState(false)
  let cardClass = 'card-container'
  let sidebarClass = 'hide-sidebar-container'
  if (showFilter) {
    cardClass = 'hide-card-container'
    sidebarClass = 'sidebar-container'
  } else {
    cardClass = 'card-container'
    sidebarClass = 'hide-sidebar-container'
  }
  return (
    <>
      <TuneIcon className='filter-btn' onClick={() => {
        setShowFilter(!showFilter)
      }} />
      <div className='product-page-container '>
        <Sidebar sidebarClass={sidebarClass} />
        <div className={cardClass}>
          {products.map((product) => {
            return (
              <ProductCard
                key={product.itemId}
                product={product}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
