import React from "react";
import MobileNavigationMenu from "./MobileNavigationMenu";
import MobileLogoImage from "./MobileLogoImage";
import NavIcons from "../NavIcons";
import NavOrderButton from "../NavOrderButton";

const MobileHeader = () => {
  return (
    <header className="lg:hidden bg-primary-sky-blue p-6 flex w-full">
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
