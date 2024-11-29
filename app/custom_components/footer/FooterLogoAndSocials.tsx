import Image from "next/image";
import React from "react";
import Logo from "@/assets/logo-with-outline.png";
import InfoHeaderIcons from "../header_info/InfoHeaderIcons";

const FooterLogoAndSocials = () => {
  return (
    <div className="md:w-1/2 flex flex-col gap-8 px-4">
      <Image
        src={Logo}
        width={400}
        height={400}
        alt="Zestful Blends Logo"
        className="max-w-[200px]"
      />
      <p className="text-neutral-50 p-1 text-xs md:textsm">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste obcaecati
        quaerat, doloribus iure quo dicta atque. Aspernatur, fuga qui ut
        voluptatem commodi aliquam? Enim sunt deserunt mollitia distinctio quia
        rem sint, velit non magnam praesentium rerum repudiandae, tenetur
        provident. Minus!
      </p>
      <InfoHeaderIcons />
    </div>
  );
};

export default FooterLogoAndSocials;
