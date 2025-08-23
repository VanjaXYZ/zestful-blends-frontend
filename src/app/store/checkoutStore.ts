import { create } from "zustand";

interface CheckoutState {
  deliveryType: "" | "Pick-up" | "Delivery";
  pickupTime: string;
  pickUpVisibility: boolean;
  dialogOpen: boolean;
  deliveryVisibility: boolean;
  deliveryCompany: string;
  deliveryFieldState: string | undefined;
  billingFieldState: string | undefined;
  currentYear: boolean;
  pastMonth: boolean;
  setDeliveryType: (type: CheckoutState["deliveryType"]) => void;
  setPickupTime: (time: string) => void;
  setPickUpVisibility: (visible: boolean) => void;
  setDialogOpen: (open: boolean) => void;
  setDeliveryVisibility: (visible: boolean) => void;
  setDeliveryCompany: (company: string) => void;
  setDeliveryFieldState: (state: string | undefined) => void;
  setBillingFieldState: (state: string | undefined) => void;
  setCurrentYear: (state: boolean) => void;
  setPastMonth: (state: boolean) => void;
}


export const useCheckoutStore = create<CheckoutState>((set) => ({
  deliveryType: "",
  pickupTime: "",
  pickUpVisibility: false,
  dialogOpen: false,
  deliveryVisibility: false,
  deliveryCompany: "",
  deliveryFieldState: "Required",
  billingFieldState: "Required",
  currentYear: false,
  pastMonth: false,
  setDeliveryType: (deliveryType) => set({ deliveryType }),
  setPickupTime: (time) => set({ pickupTime: time }),
  setPickUpVisibility: (visible) => set({ pickUpVisibility: visible }),
  setDialogOpen: (open) => set({ dialogOpen: open }),
  setDeliveryVisibility: (visible) => set({ deliveryVisibility: visible }),
  setDeliveryCompany: (company) => set({deliveryCompany: company}),
  setDeliveryFieldState: (state) => set({deliveryFieldState: state}),
  setBillingFieldState: (state) => set({billingFieldState: state}),
  setCurrentYear: (state) => set({currentYear: state}),
  setPastMonth: (state) => set({pastMonth: state})
}));
