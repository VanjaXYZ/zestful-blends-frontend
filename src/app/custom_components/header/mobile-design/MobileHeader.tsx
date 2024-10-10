import React from "react";
import MobileNavigationMenu from "./MobileNavigationMenu";
import MobileLogoImage from "./MobileLogoImage";
import NavIcons from "../NavIcons";
import NavOrderButton from "../NavOrderButton";

const MobileHeader = () => {
  return (
    <header className="lg:hidden bg-primary-sky-blue flex p-6 justify-between">
      <MobileLogoImage />
      <div className="flex gap-8 items-center">
        <NavIcons />
        <NavOrderButton textColor="text-white" />
      </div>
      <MobileNavigationMenu />
    </header>
  );
};

export default MobileHeader;
