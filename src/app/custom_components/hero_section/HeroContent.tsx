import React from "react";
import Logo from "@/assets/logo-with-outline.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
const HeroContent = () => {
  return (
    <div className="w-1/2 mt-20 ">
      <Image
        src={Logo}
        width={180}
        height={180}
        alt="Zestful Blends Logo"
        className="mb-8 -translate-x-3"
      />
      <h1 className="text-primary-yellow text-6xl font-bold flex flex-col gap-3 mb-4">
        <span>FRESH CHOISES, </span>
        <span> HEALTHIER LIVE </span>
        <span>THAT{"'"}S HEALTH </span>
        <span>STATION! </span>
      </h1>
      <p className="text-primary-yellow text-sm mb-8 font-medium">
        Aenean et turpis ipsum. Quisque consequat orci augue, at aliquam urna
        tempus a. Nulla luctus consequat odio, eget pulvinar libero elementum
        nec. Pellen.
      </p>
      <Button
        className="bg-primary-yellow text-black font-bold hover:bg-primary-yellow-dark-shade"
        size={"lg"}
      >
        Shop Juices
      </Button>
    </div>
  );
};

export default HeroContent;
