import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const DiscoverMenuProduct = ({
  productName,
  imageSrc,
}: {
  productName: string;
  imageSrc: string;
}) => {
  return (
    <div className="flex justify-center flex-col items-center gap-4">
      <Image
        src={imageSrc}
        width={300}
        height={300}
        alt="Zestful Blends Product Image"
        className="rounded-full"
      />
      <Button className="bg-primary-dark-orange text-white font-semibold rounded-full w-[150px]">
        {productName}
      </Button>
    </div>
  );
};

export default DiscoverMenuProduct;
