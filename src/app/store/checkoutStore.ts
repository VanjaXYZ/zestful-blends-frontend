import { create } from "zustand";

interface CheckoutState {
  deliveryType: "" | "Pick-up" | "Delivery";
  setDeliveryType: (type: CheckoutState["deliveryType"]) => void;
}

export const useCheckoutStore = create<CheckoutState>((set) => ({
  deliveryType: "",
  setDeliveryType: (deliveryType) => set({ deliveryType }),
}));
