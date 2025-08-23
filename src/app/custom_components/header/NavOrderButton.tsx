import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const NavOrderButton = ({ textColor, bgColor }: { textColor: string, bgColor: string }) => {
  return (
    <Link href={"/shop"}>
      <Button
        className={`${bgColor} ${textColor} font-bold hover:bg-primary-yellow rounded-xl`}
      >
        Get that Zesty Flavor
      </Button>
    </Link>
  );
};

export default NavOrderButton;
