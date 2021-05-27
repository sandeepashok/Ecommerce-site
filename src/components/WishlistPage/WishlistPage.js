import { useContext } from 'react'
import { WishlistContext } from '../../Context/WishlistContext'
import EmptyWishlist from '../EmptyCartOrWishlist/EmptyWishlist';
import WishlistLine from "../WishlistLine/WishlistLine";
import "./wishlist-page.css";
export default function WishlistPage() {
  const { wishlist } = useContext(WishlistContext);

  return (

    Array.isArray(wishlist) && wishlist.length ? <div className="card-container">
      {wishlist.map((wishlistItem) => {
        return (
          <WishlistLine
            key={wishlistItem.itemId}
            wishlistItem={wishlistItem}
          />
        );
      })}
    </div> : <EmptyWishlist />
  );
}
