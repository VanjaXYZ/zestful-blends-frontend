"use client"

import {createContext, useContext, useState, ReactNode} from "react";

type AddressContextType = {
  sameAddressIsChecked: boolean;
  setSameAddressIsChecked: (value: boolean) => void;
};

const AddressContext = createContext<AddressContextType | undefined>(undefined);

export const AddressProvider = ({children}: {children: ReactNode}) => {
  const [sameAddressIsChecked, setSameAddressIsChecked] = useState(false);

  return (
    <AddressContext.Provider value={{sameAddressIsChecked, setSameAddressIsChecked}}>
      {children}
    </AddressContext.Provider>
  );
};

export const useAddressContext = () => {
  const context = useContext(AddressContext);
  if (!context) throw new Error("useAddressContext must be used within AddressProvider");
  return context;
}