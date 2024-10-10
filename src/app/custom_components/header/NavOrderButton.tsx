import { Button } from "@/components/ui/button";
import React from "react";

const NavOrderButton = ({ textColor }: { textColor: string }) => {
  return (
    <Button
      className={`bg-primary-yellow ${textColor} font-bold hover:bg-primary-yellow-dark-shade`}
    >
      Order Now
    </Button>
  );
};

export default NavOrderButton;
