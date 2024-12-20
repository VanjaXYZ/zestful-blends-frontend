import React from "react";
import LogoImage from "./LogoImage";
import NavIcons from "./NavIcons";
import NavLinkItems from "./NavLinkItems";
import NavOrderButton from "./NavOrderButton";
import styles from "./TopNavigation.module.css";

const DesktopNavigationMenu = () => {
  return (
    <header className="w-full hidden lg:block">
      <nav
        className={`flex h-52 bg-primary-green justify-between flex-col sm:flex-row py-4 px-12 w-full ${styles.bottomWave} lg:flex`}
      >
        <div className="flex sm:w-1/2 gap-6">
          <LogoImage />
          <NavLinkItems />
        </div>
        <div className="sm:w-1/2">
          <div className="flex gap-6 justify-end items-center">
            <NavIcons />
            <NavOrderButton textColor="text-black" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default DesktopNavigationMenu;
