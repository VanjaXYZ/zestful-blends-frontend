// import { loadCartItems } from "@/lib/mock/CartItems";
// import { create } from "zustand";
// import { CartItemType } from "@/app/model/cartItemType";
// import { subscribeWithSelector } from "zustand/middleware";

// interface CartStore {
//   cart: CartItemType[];
//   addToCart: (item: CartItemType) => void;
//   addItemFromWishlist: (item: CartItemType) => void;
//   removeFromCart: (id: string) => void;
//   increaseQuantity: (id: string) => void;
//   decreaseQuantity: (id: string) => void;
//   updateQuantity: (id: string, quantity: number) => void;
// }

// const useCartStore = create<CartStore>((set) => ({
//   cart: loadCartItems(),

//   addToCart: (item: CartItemType) =>
//     set((state: CartStore) => {
//       return { cart: [...state.cart, item] };
//     }),

//   addItemFromWishlist: (item: CartItemType) =>
//     set((state: CartStore) => {
//       const existingItem = state.cart.find(
//         (cartItem) => cartItem.id === item.id
//       );

//       if (existingItem) {
//         return {
//           cart: state.cart.map((cartItem) =>
//             cartItem.id === item.id
//               ? { ...cartItem, quantity: cartItem.quantity + 1 }
//               : cartItem
//           ),
//         };
//       }

//       return {
//         // cart: [...state.cart, { ...item, quantity: 1 }],
//         cart: [...state.cart, item],
//       };
//     }),
//   removeFromCart: (id: string) =>
//     set((state: CartStore) => ({
//       cart: state.cart.filter((item) => item.id !== id),
//     })),
//   increaseQuantity: (id: string) =>
//     set((state: CartStore) => ({
//       cart: state.cart.map((item) =>
//         item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//       ),
//     })),
//   decreaseQuantity: (id: string) =>
//     set((state: CartStore) => ({
//       cart: state.cart.map((item) =>
//         item.id === id
//           ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
//           : item
//       ),
//     })),
//   updateQuantity: (id: string, quantity: number) =>
//     set((state: CartStore) => ({
//       cart: state.cart.map((item) =>
//         item.id === id ? { ...item, quantity } : item
//       ),
//     })),
// }));

// export default useCartStore;

// src/app/store/cartStore.ts





// import { loadCartItems } from "@/lib/mock/CartItems";
// import { create } from "zustand";
// import { CartItemType } from "@/app/model/cartItemType";
// import { subscribeWithSelector } from "zustand/middleware";

// interface CartStore {
//   cart: CartItemType[];
//   addToCart: (item: CartItemType) => void;
//   addItemFromWishlist: (item: CartItemType) => void;
//   removeFromCart: (id: string) => void;
//   increaseQuantity: (id: string) => void;
//   decreaseQuantity: (id: string) => void;
//   updateQuantity: (id: string, quantity: number) => void;
// }

// // Funkcja pomocnicza do zapisu
// const saveToLocalStorage = (cart: CartItemType[]) => {
//   if (typeof window !== "undefined") {
//     localStorage.setItem("cartItems", JSON.stringify(cart));
//   }
// };

// const useCartStore = create<CartStore>()(
//   subscribeWithSelector((set, get) => ({
//     cart: [],

//     addToCart: (item: CartItemType) => {
//       const updated = [...get().cart, item];
//       set({ cart: updated });
//       saveToLocalStorage(updated);
//     },

//     addItemFromWishlist: (item: CartItemType) => {
//       const existingItem = get().cart.find((i) => i.id === item.id);
//       let updated: CartItemType[];

//       if (existingItem) {
//         updated = get().cart.map((i) =>
//           i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
//         );
//       } else {
//         updated = [...get().cart, item];
//       }

//       set({ cart: updated });
//       saveToLocalStorage(updated);
//     },

//     removeFromCart: (id: string) => {
//       const updated = get().cart.filter((item) => item.id !== id);
//       set({ cart: updated });
//       saveToLocalStorage(updated);
//     },

//     increaseQuantity: (id: string) => {
//       const updated = get().cart.map((item) =>
//         item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//       );
//       set({ cart: updated });
//       saveToLocalStorage(updated);
//     },

//     decreaseQuantity: (id: string) => {
//       const updated = get().cart.map((item) =>
//         item.id === id
//           ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
//           : item
//       );
//       set({ cart: updated });
//       saveToLocalStorage(updated);
//     },

//     updateQuantity: (id: string, quantity: number) => {
//       const updated = get().cart.map((item) =>
//         item.id === id ? { ...item, quantity } : item
//       );
//       set({ cart: updated });
//       saveToLocalStorage(updated);
//     },
//   }))
// );

// export default useCartStore;




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
