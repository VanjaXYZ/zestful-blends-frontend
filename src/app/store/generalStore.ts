import {create} from "zustand"

interface generalState {
  loggedIn: boolean,
  setLoggedIn: (logged: boolean) => void

  wishlistOpen: boolean,
  setWishlistOpen: (val: boolean) => void
}

export const useGeneralStore = create<generalState>((set) => ({
  loggedIn: false,
  setLoggedIn: (logged) => set({loggedIn: logged}),

  wishlistOpen: false,
  setWishlistOpen: (val: boolean) => set({ wishlistOpen: val }),
}))