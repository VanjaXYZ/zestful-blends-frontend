"use client"

import React from "react";
import MobileNavigationMenu from "./MobileNavigationMenu";
import MobileLogoImage from "./MobileLogoImage";
import NavIcons from "../NavIcons";
import NavOrderButton from "../NavOrderButton";

import { usePathname } from "next/navigation";

const MobileHeader = () => {

  const pathname = usePathname();
  const isCheckout = pathname === '/checkout'
  const isUserProfile = pathname === '/user-account' || '/personal-information' || '/history-order';

  const navBgColor = (isCheckout || isUserProfile) ? 'bg-[#ED7905]' : 'bg-primary-sky-blue';
  return (
    <header className={`lg:hidden ${navBgColor} p-6 flex w-full`}>
      <MobileLogoImage />
      <div className="flex gap-8 items-center flex-col">
        <NavIcons />
        <NavOrderButton textColor="text-white" />
      </div>
      <div className="w-full">
        <MobileNavigationMenu />
      </div>
    </header>
  );
};

export default MobileHeader;
