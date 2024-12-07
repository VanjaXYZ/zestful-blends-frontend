// store/cartStore.ts
import { create } from 'zustand';

interface CartState {
  itemCount: number;
  increment: () => void;
  decrement: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  itemCount: 2, // Default value
  increment: () => set((state) => ({ itemCount: state.itemCount + 1 })),
  decrement: () => set((state) => ({ itemCount: Math.max(state.itemCount - 1, 0) })),
}));
