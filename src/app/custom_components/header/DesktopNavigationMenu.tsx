"use client"

import React from "react";
import LogoImage from "./LogoImage";
import NavIcons from "./NavIcons";
import NavLinkItems from "./NavLinkItems";
import NavOrderButton from "./NavOrderButton";
import styles from "./TopNavigation.module.css";

import { usePathname } from "next/navigation";

const DesktopNavigationMenu = () => {

  const pathname = usePathname();
  const isCheckout = pathname === '/checkout'
  const isUserProfile = pathname === '/user-account' || pathname === '/personal-information' || pathname === '/history-order';

  const navBgColor = (isCheckout || isUserProfile) ? 'bg-[#ED7905]' : 'bg-[#93BE3B]';

  return (
    <header className={`w-full hidden lg:block`}>
      <nav
        className={`flex h-52 ${navBgColor} justify-between flex-col sm:flex-row py-4 px-12 w-full ${styles.bottomWave} lg:flex`}
      >
        <div className="flex sm:w-3/4 gap-6">
          <LogoImage />
          <NavLinkItems />
        </div>
        <div className="sm:w-1/4">
          <div className="flex gap-6 justify-end items-center">
            <NavIcons />
            <NavOrderButton textColor="text-black" bgColor={isCheckout ? "bg-primary-green" : "bg-primary-orange"} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default DesktopNavigationMenu;
