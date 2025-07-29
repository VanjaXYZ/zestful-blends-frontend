// import { CartItemType } from "@/app/model/cartItemType";
// import { mockWishListItems } from "@/lib/mock/WishListItems";
// import { create } from "zustand";
// import useCartStore from "./cartStore";

// interface WishlistStore {
//   wishlist: CartItemType[];
//   addToWishlist: (item: CartItemType) => void;
//   removeFromWishlist: (id: string) => void;
//   moveToCart: (id: string) => void;
// }

// const useWishlistStore = create<WishlistStore>((set) => ({
//   wishlist: mockWishListItems,
//   removeFromWishlist: (id: string) =>
//     set((state: WishlistStore) => ({
//       wishlist: state.wishlist.filter((item) => item.id !== id),
//     })),

//   moveToCart: (id: string) => {
//     const state = useWishlistStore.getState();
//     const item = state.wishlist.find((item: CartItemType) => item.id === id);

//     if (item) {
//       // Using the cart store's function to add the item
//       const cartStore = useCartStore.getState();
//       cartStore.addItemFromWishlist(item);

//       // Remove from wishlist
//       useWishlistStore.getState().removeFromWishlist(id);
//     }
//   },

//   addToWishlist: (item: CartItemType) =>
//   set((state: WishlistStore) => {
//     return { wishlist: [...state.wishlist, item] };
//   }),

// }));

// export default useWishlistStore;


import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartItemType } from "@/app/model/cartItemType";
import useCartStore from "./cartStore";
import { mockWishListItems } from "@/lib/mock/WishListItems";

interface WishlistStore {
  wishlist: CartItemType[];
  addToWishlist: (item: CartItemType) => void;
  removeFromWishlist: (id: string) => void;
  moveToCart: (id: string) => void;
}

const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      wishlist: mockWishListItems,

      addToWishlist: (item: CartItemType) => {
        set({ wishlist: [...get().wishlist, item] });
      },

      removeFromWishlist: (id: string) => {
        set({ wishlist: get().wishlist.filter((item) => item.id !== id) });
      },

      moveToCart: (id: string) => {
        const item = get().wishlist.find((item) => item.id === id);
        if (!item) return;

        useCartStore.getState().addItemFromWishlist(item);
        set({ wishlist: get().wishlist.filter((item) => item.id !== id) });
      },
    }),
    {
      name: "wishlistItems",
      // opcjonalnie: migrate lub onRehydrateStorage, jeśli chcesz dodatkowo kontrolować zachowanie
    }
  )
);

export default useWishlistStore;
