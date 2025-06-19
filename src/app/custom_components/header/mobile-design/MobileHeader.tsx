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
  const isUserProfile = pathname === '/user-account' || pathname === '/personal-information' || pathname === '/history-order';

  const navBgColor = (isCheckout || isUserProfile) ? 'bg-[#ED7905]' : 'bg-[#93BE3B]';
  return (
    <header className={`lg:hidden ${navBgColor} p-6 flex w-full relative`}>
      <MobileLogoImage />
      <div className="flex gap-8 items-center flex-col">
        <NavIcons />
        <NavOrderButton textColor="text-white" />
      </div>
      <div className="w-full">
        <MobileNavigationMenu />
      </div>
      {pathname === '/' ?
      <div className="absolute pt-5 top-[146px] w-full left-0 -mb-[1px] bg-[length:100%_100%] bg-no-repeat z-10" 
      style={{backgroundImage: `linear-gradient(to bottom, #93BE3B 25%,rgb(255, 255, 255) 25%)`,}}>
        <div className="absolute w-full top-[-4px] h-4 bg-[#93BE3B] z-[-1]"></div>
        <div className="absolute w-full top-0 h-6 bg-[#93BE3B] "></div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 170"><path fill="#93BE3B" fillOpacity="1" d="M0,96L60,90.7C120,85,240,75,360,96C480,117,600,171,720,160C840,149,960,75,1080,53.3C1200,32,1320,64,1380,80L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
      </div> : <></>}
    </header>
  );
};

export default MobileHeader;
