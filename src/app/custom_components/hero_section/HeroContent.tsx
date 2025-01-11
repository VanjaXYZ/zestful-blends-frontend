import React from "react";
import Logo from "@/assets/logo-with-outline.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const HeroContent = () => {
  return (
    <div className="lg:w-1/2 mt-10 lg:mt-20 px-1">
      <Image
        src={Logo}
        width={180}
        height={180}
        alt="Zestful Blends Logo"
        className="mb-8 -translate-x-3 hidden lg:inline-block"
      />
      <div className="mx-auto lg:w-fit flex justify-center lg:mx-0 max-w-[300px] lg:max-w-fit">
        <h1 className="text-primary-yellow text-2xl md:text-4xl font-bold flex flex-col gap-4 mb-4 lg:text-6xl">
          <span>FRESH CHOISES, </span>
          <span> HEALTHIER LIVE </span>
          <span>THAT{"'"}S HEALTH </span>
          <span>STATION! </span>
        </h1>
      </div>
      <p className="text-primary-yellow text-xs mb-4 mx-auto lg:mx-0 max-w-[300px]">
        Aenean et turpis ipsum. Quisque consequat orci augue, at aliquam urna
        tempus a. Nulla luctus consequat odio, eget pulvinar libero elementum
        nec. Pellen.
      </p>
      <div className="max-w-[300px] mx-auto lg:mx-0">
        <Link href={"/shop"}>
          <Button
            className="bg-primary-yellow text-black font-bold hover:bg-primary-yellow-dark-shade "
            size={"lg"}
          >
            Shop Juices
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroContent;
