import { cartItems } from "@/lib/mock/CartItems";
import { create } from "zustand";
import { CartItemType } from "@/app/model/cartItemType";

interface CartStore {
  cart: CartItemType[];
  addItemFromWishlist: (item: CartItemType) => void;
  removeFromCart: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
}

const useCartStore = create<CartStore>((set) => ({
  cart: cartItems,

  addItemFromWishlist: (item: CartItemType) =>
    set((state: CartStore) => {
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        return {
          cart: state.cart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        };
      }

      return {
        cart: [...state.cart, { ...item, quantity: 1 }],
      };
    }),
  removeFromCart: (id: string) =>
    set((state: CartStore) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
  increaseQuantity: (id: string) =>
    set((state: CartStore) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),
  decreaseQuantity: (id: string) =>
    set((state: CartStore) => ({
      cart: state.cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      ),
    })),
  updateQuantity: (id: string, quantity: number) =>
    set((state: CartStore) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      ),
    })),
}));

export default useCartStore;
