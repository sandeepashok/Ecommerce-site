import WishlistLine from "../wishlistLine/WishlistLine";
import "./wishlist-page.css";
export default function WishlistPage({
  wishlist,
}) {
  return (
    <>
      <div className="card-container">
        {wishlist.map((wishlistItem, index) => {
          return (
            <WishlistLine
              key={index}
              wishlistItem={wishlistItem}
            />
          );
        })}
      </div>
    </>
  );
}
