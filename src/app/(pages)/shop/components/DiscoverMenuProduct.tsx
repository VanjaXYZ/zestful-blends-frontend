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

  const productNameToLink = productName ===  "Salads" || productName === "Juices" || productName === "Shakes" ? `fruit-${productName}` : productName;

  return (
    <div className="flex justify-center flex-col items-center gap-4">
      <Image
        src={imageSrc}
        width={300}
        height={300}
        alt="Zestful Blends Product Image"
        className="rounded-full"
      />
      <Link href={`/shop/${productNameToLink.includes(" ") ? productNameToLink.replace(/ /g, "-").toLowerCase() : productNameToLink.toLowerCase()}`}>
        <Button className="bg-primary-orange text-white font-semibold rounded-full w-[150px] hover:bg-primary-green transition-colors">
          {productName}
        </Button>
      </Link>
    </div>
  );
};

export default DiscoverMenuProduct;