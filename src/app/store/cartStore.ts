import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartItemType } from "@/app/model/cartItemType";

interface CartStore {
  cart: CartItemType[];
  addToCart: (item: CartItemType) => void;
  addItemFromWishlist: (item: CartItemType) => void;
  removeFromCart: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
}

const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (item: CartItemType) => {
        const updated = [...get().cart, item];
        set({ cart: updated });
      },

      addItemFromWishlist: (item: CartItemType) => {
        const existingItem = get().cart.find((i) => i.id === item.id);
        if (existingItem) {
          set({
            cart: get().cart.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          });
        } else {
          set({ cart: [...get().cart, item] });
        }
      },

      removeFromCart: (id: string) => {
        set({ cart: get().cart.filter((item) => item.id !== id) });
      },

      increaseQuantity: (id: string) => {
        set({
          cart: get().cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        });
      },

      decreaseQuantity: (id: string) => {
        set({
          cart: get().cart.map((item) =>
            item.id === id
              ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
              : item
          ),
        });
      },

      updateQuantity: (id: string, quantity: number) => {
        set({
          cart: get().cart.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        });
      },
    }),
    {
      name: "cartItems", // klucz w localStorage
      // możesz też ustawić wersjonowanie, migracje itd. jeśli chcesz
    }
  )
);

export default useCartStore;
