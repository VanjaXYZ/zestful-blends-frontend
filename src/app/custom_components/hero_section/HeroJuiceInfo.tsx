import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Fruits from "@/assets/u4-removebg-preview.png";
import Person from "@/assets/skybenversep3150_Give_me_some_real_people_enjoying_a_juice_with_e18d5cd4-9a8b-4049-9db3-bb5c83b1111b-removebg-preview.png";
const HeroJuiceInfo = () => {
  return (
    <div className="bg-green-darker rounded-s-3xl flex justify-between px-20 py-28  overflow-x-clip ml-28 mt-5  relative  ">
      <div className="w-[550px] ">
        <h1 className="text-white text-6xl font-bold mb-8 ">
          What Is About Our Juice
        </h1>
        <p className="text-white text-base mb-8">
          Aenean et turpis ipsum. Quisque consequat orci augue, at aliquam urna
          tempus a. Nulla luctus consequat odio, eget pulvinar libero elementum
          nec. Pellentesque luctus placerat ultricies. Interdum et malesuada
          fames ac ante ipsum primis.
        </p>
        <Button
          size={"xl"}
          className="bg-primary-orange  font-bold hover:bg-primary-yellow-dark-shade text-white"
        >
          Shop Juices
        </Button>
      </div>
      <Image
        src={Person}
        width={575}
        height={575}
        alt="Zestful Blends Logo"
        className="mb-8 -translate-x-3 absolute right-28 -top-6 z-10"
      />
      <Image
        src={Fruits}
        width={760}
        height={720}
        alt="Zestful Blends Logo"
        className="mb-8 -translate-x-3 absolute -top-32 -right-36 rotate-[18deg]"
      />
    </div>
  );
};

export default HeroJuiceInfo;
