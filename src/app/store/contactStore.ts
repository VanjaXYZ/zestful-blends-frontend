import {create} from "zustand"

interface ContactState {
  showContactSucces: boolean,
  setShowContactSucces: (succes: boolean) => void
}

export const useContactState = create<ContactState>((set) => ({
  showContactSucces: false,
  setShowContactSucces: (succes) => set({showContactSucces: succes})
}))