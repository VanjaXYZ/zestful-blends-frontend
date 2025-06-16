import { CartItemType } from "@/app/model/cartItemType";
import { wishListItems } from "@/lib/mock/WishListItems";
import { create } from "zustand";
import useCartStore from "./cartStore";

interface WishlistStore {
  wishlist: CartItemType[];
  removeFromWishlist: (id: string) => void;
  moveToCart: (id: string) => void;
}

const useWishlistStore = create<WishlistStore>((set) => ({
  wishlist: wishListItems,
  removeFromWishlist: (id: string) =>
    set((state: WishlistStore) => ({
      wishlist: state.wishlist.filter((item) => item.id !== id),
    })),

  moveToCart: (id: string) => {
    const state = useWishlistStore.getState();
    const item = state.wishlist.find((item: CartItemType) => item.id === id);

    if (item) {
      // Using the cart store's function to add the item
      const cartStore = useCartStore.getState();
      cartStore.addItemFromWishlist(item);

      // Remove from wishlist
      useWishlistStore.getState().removeFromWishlist(id);
    }
  },
}));

export default useWishlistStore;
