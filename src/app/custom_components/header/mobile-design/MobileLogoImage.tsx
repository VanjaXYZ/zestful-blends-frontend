import Image from "next/image";
import React from "react";
import Logo from "@/assets/logo-icon.png";

const MobileLogoImage = () => {
  return (
    <>
      <Image src={Logo} width={50} height={50} alt="Zestful Blends Logo" />
    </>
  );
};

export default MobileLogoImage;
