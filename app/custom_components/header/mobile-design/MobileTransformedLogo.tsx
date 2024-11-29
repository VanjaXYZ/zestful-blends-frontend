import Image from "next/image";
import React from "react";
import Logo from "@/assets/logo-with-outline.png";

const MobileTransformedLogo = () => {
  return (
    <span className="max-w-sm h-[500px] flex items-center">
      <Image
        src={Logo}
        width={500}
        height={200}
        alt="Zestful Blends Logo"
        className="rotate-90"
      />
    </span>
  );
};

export default MobileTransformedLogo;
