import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Fruits from "@/assets/u4-removebg-preview.png";
import Person from "@/assets/skybenversep3150_Give_me_some_real_people_enjoying_a_juice_with_e18d5cd4-9a8b-4049-9db3-bb5c83b1111b-removebg-preview.png";
import Link from "next/link";
import { cherryBomb } from '../../../../fonts';

const HeroJuiceInfo = () => {
  return (
    <div className="bg-primary-green flex max-lg:flex-col gap-12 max-sm:gap-2 items-center overflow-x-clip relative px-10">
      <div className="max-w-full h-full py-20 px-10 max-sm:py-10 max-sm:text-center max-sm:px-0 flex-1 flex flex-col space-y-[10%]">
        <div>
          <h1 className={`${cherryBomb.className} text-white text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-8 flex flex-col`}>
            <span>More than a Smoothie</span>
            <div>
              <span className="text-black">It&apos;s Liquid Zestnesss</span><span>.</span>
            </div>
          </h1>
          <p className="text-white text-base mb-8">
            Aenean et turpis ipsum. Quisque consequat orci augue, at aliquam urna
            tempus a. Nulla luctus consequat odio, eget pulvinar libero elementum
            nec. Pellentesque luctus placerat ultricies. Interdum et malesuada
            fames ac ante ipsum primis.
          </p>
        </div>
        <Link href={"/shop"}>
          <Button
            size={"lg"}
            className="bg-black font-bold hover:bg-white text-primary-green"
          >
            Take a look at the Flavors
          </Button>
        </Link>
      </div>
      <div className="relative w-full h-full flex-1">
        <Image
          src={Person}
          width={575}
          height={575}
          alt="Zestful Blends Logo"
          className="relative z-10"
        />
        <Image
          src={Fruits}
          width={760}
          height={720}
          alt="Zestful Blends Logo"
          className="absolute top-0 md:-top-16 lg:top-0 xl:-top-16 left-0 rotate-[18deg]"
        />
      </div>
    </div>
  );
};

export default HeroJuiceInfo;
