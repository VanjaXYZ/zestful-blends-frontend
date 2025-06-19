import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const NavOrderButton = ({ textColor }: { textColor: string }) => {
  return (
    <Link href={"/shop"}>
      <Button
        className={`bg-[#EC7904] ${textColor} font-bold hover:bg-primary-yellow rounded-xl`}
      >
        Get that Zesty Flavor
      </Button>
    </Link>
  );
};

export default NavOrderButton;
