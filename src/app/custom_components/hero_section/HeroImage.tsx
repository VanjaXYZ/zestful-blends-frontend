import React from "react";
import juices from "@/assets/skybenversep3150_Please_give_me_photos_of_juice_dripping_in_mer_477751d5-1bc1-451c-9250-730962d4f7fd-removebg-preview.png";
import Image from "next/image";
import cherry from "@/assets/skybenversep3150_Please_generate_a_real_cherry_on_a_white_backg_a9b08a6c-9394-4a18-b3ab-fe3f72164563-removebg-preview.png";
const HeroImage = () => {
  return (
    <div className="w-1/2 max-lg:w-full max-lg:justify-center flex max-lg:p-10 lg:pl-10">
      <div className="relative w-fit">
        <Image
          src={juices}
          width={625}
          height={625}
          alt="Zestful Blends Logo"
          className="rotate transform scale-x-[-1] min-w-[280px]"
        />
        <Image
          src={cherry}
          alt="Zestful Blends Logo"
          className="w-[120px] h-[120px] max-sm:w-[90px] max-sm:h-[90px] rotate-90 absolute top-[2%] left-[7%]"
        />
      </div>
    </div>
  );
};

export default HeroImage;
