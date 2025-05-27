import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const NavOrderButton = ({ textColor }: { textColor: string }) => {
  return (
    <Link href={"/checkout"}>
      <Button
        className={`bg-primary-yellow ${textColor} font-bold hover:bg-primary-yellow-dark-shade rounded-full`}
      >
        Order Now
      </Button>
    </Link>
  );
};

export default NavOrderButton;
