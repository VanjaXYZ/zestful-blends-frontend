import {create} from "zustand"

interface FaqState {
  showSucces: boolean,
  setShowSucces: (succes: boolean) => void
}

export const useFaqState = create<FaqState>((set) => ({
  showSucces: false,
  setShowSucces: (succes) => set({showSucces: succes})
}))