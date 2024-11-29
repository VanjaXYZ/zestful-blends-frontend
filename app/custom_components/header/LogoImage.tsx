import React from "react";
import Logo from "@/assets/logo-with-outline.png";
import Image from "next/image";

const LogoImage = () => {
  return (
    <div>
      <Image src={Logo} width={155} height={155} alt="Zestful Blends Logo" />
    </div>
  );
};

export default LogoImage;
