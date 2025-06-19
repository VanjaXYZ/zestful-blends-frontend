import React from "react";
import Logo from "@/assets/logo-with-outline.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cherryBomb } from '../../../../fonts';

const HeroContent = () => {
  return (
    <div className="lg:w-1/2 max-lg:mt-10">
      {/* <Image
        src={Logo}
        width={180}
        height={180}
        alt="Zestful Blends Logo"
        className="mb-8 -translate-x-3 hidden lg:inline-block"
      /> */}
      <div className="flex flex-col lg:w-fit flex justify-center max-lg:justify-center max-sm:pt-10 max-lg:pt-20">
        <h1 className={` ${cherryBomb.className} text-primary-orange text-6xl 2xl:text-8xl max-sm:text-4xl font-bold flex flex-col gap-4 mb-4 max-lg:text-center`}>
          <span>Fresh Choices, </span>
          <span> Healthier Life! </span>
        </h1>
      </div>
      <p className="flex max-sm:flex-col sm:justify-center lg:justify-start mb-4 mx-auto lg:mx-0 max-lg:text-center">
        <span>With Zestful Blends you&apos;re always</span><span>&nbsp;on the verve</span>
      </p>
      <div className="flex justify-center max-lg:justify-center lg:justify-start">
        <Link href={"/shop"}>
          <Button
            className="bg-[#EC7904] text-black font-bold hover:bg-primary-yellow rounded-xl"
            size={"lg"}
          >
            Get that Zesty Flavor
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroContent;
