import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Link from "next/link"

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
      <Link href={`/shop/${productName.toLowerCase()}`}>
        <Button className="bg-primary-green text-white font-semibold rounded-full w-[150px] hover:bg-primary-yellow transition-colors">
          {productName}
        </Button>
      </Link>
    </div>
  );
};

export default DiscoverMenuProduct;
