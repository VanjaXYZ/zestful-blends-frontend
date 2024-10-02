import React from "react";
import juices from "@/assets/skybenversep3150_Please_give_me_photos_of_juice_dripping_in_mer_477751d5-1bc1-451c-9250-730962d4f7fd-removebg-preview.png";
import Image from "next/image";
import cherry from "@/assets/skybenversep3150_Please_generate_a_real_cherry_on_a_white_backg_a9b08a6c-9394-4a18-b3ab-fe3f72164563-removebg-preview.png";
const HeroImage = () => {
  return (
    <div className="w-1/2 ">
      <div className="relative mt-60">
        <Image
          src={juices}
          width={1200}
          height={1200}
          alt="Zestful Blends Logo"
          className="rotate transform scale-x-[-1]"
        />
        <Image
          src={cherry}
          width={120}
          height={120}
          alt="Zestful Blends Logo"
          className="rotate-90 absolute top-16 left-16"
        />
      </div>
    </div>
  );
};

export default HeroImage;
