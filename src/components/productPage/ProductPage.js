import { useContext } from 'react'
import { ProductContext } from '../../Context/ProductContext'
import ProductCard from "../Productcard/ProductCard";
import Sidebar from "../FilterSidebar/FilterSidebar"
import "./product-page.css";
export default function ProductPage() {

  const { products } = useContext(ProductContext);

  return (
    <div className='product-page-container'>
      <Sidebar />
      <div className="card-container">
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
  );
}
