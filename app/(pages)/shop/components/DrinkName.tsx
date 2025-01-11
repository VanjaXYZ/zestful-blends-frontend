import { Button } from "@/components/ui/button";
import React from "react";

const DrinkName = ({ productName }: { productName: string }) => {
  return (
    <Button
      className="bg-primary-dark-orange font-semibold rounded-full 
      w-[150px] hover:bg-primary-orange transition-colors mb-6 text-white
      flex"
    >
      {productName}
    </Button>
  );
};

export default DrinkName;
