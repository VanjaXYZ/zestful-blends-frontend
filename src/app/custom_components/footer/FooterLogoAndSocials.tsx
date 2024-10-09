import Image from "next/image";
import React from "react";
import Logo from "@/assets/logo-with-outline.png";
import InfoHeaderIcons from "../header_info/InfoHeaderIcons";

const FooterLogoAndSocials = () => {
  return (
    <div className="w-1/2 flex flex-col gap-8">
      <Image src={Logo} width={400} height={400} alt="Zestful Blends Logo" />
      <p className="text-neutral-50">
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
