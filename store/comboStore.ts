import { create } from "zustand";

// Define the types for a combo item and the store
interface Combo {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface ComboStore {
  combos: Combo[];
  selectedCombo: number | null;
  setSelectedCombo: (comboId: number | null) => void;
}

// Create the Zustand store with proper typing
export const useComboStore = create<ComboStore>((set) => ({
  combos: [
    {
      id: 1,
      name: "Variety Combo-1",
      description: "3 Juices Start At $35.99 - Subscribe & Save 15%.",
      image: "/images/oranges.png",
    },
    {
      id: 2,
      name: "Variety Combo-2",
      description: "5 Juices Start At $50.99 - Subscribe & Save 20%.",
      image: "/images/apples.png",
    },
    {
      id: 3,
      name: "Variety Combo-3",
      description: "7 Juices Start At $70.99 - Subscribe & Save 25%.",
      image: "/images/grapes.png",
    },
  ],
  selectedCombo: null,
  setSelectedCombo: (comboId) => set({ selectedCombo: comboId }),
}));
