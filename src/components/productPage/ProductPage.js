import ProductCard from "../productcard/ProductCard";
import "./product-page.css";
export default function ProductPage({ products, wishlist, addItemToWishlist }) {
  return (
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
  );
}
