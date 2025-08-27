import React from "react";
import { VarietyPacksProps } from "./VarietyPacksList";
import { Button } from "@/components/ui/button";
import Image1 from "@/assets/couple-with-juices.png";
import Image from "next/image";
import { StaticImageData } from "next/image"
import Link from "next/link";

const VarietyPacksItem = ({
  packItem,
  isReversed,
  imagePath
}: {
  packItem: VarietyPacksProps;
  isReversed: boolean;
  imagePath: string | StaticImageData
}) => {
  return (
    <div
      className={`flex flex-col lg:flex-row gap-2 items-stretch justify-center p-4 ${
        isReversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className="w-full lg:w-[300px] flex flex-col bg-primary-yellow p-6 rounded-lg">
        <div className="flex-grow space-y-4">
          <h3 className="text-3xl font-bold">{packItem.title}</h3>
          <h5 className="text-lg font-semibold">{packItem.priceContent}</h5>
          <p className="text-sm leading-relaxed">{packItem.description}</p>
        </div>
        <div className="pt-6 flex justify-center">
          <Link href={`/shop/special-offers/${packItem.id}`}>
            <Button className="rounded-full bg-smooth-red hover:bg-smooth-red/90 w-full lg:w-[150px]">
              Buy Now
            </Button>
          </Link>
        </div>
      </div>

      <div className="relative w-full lg:w-[800px] aspect-[3/2] rounded-lg overflow-hidden">
        <Image
          src={imagePath}
          alt="Variety Pack"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 500px"
        />
      </div>
    </div>
  );
};

export default VarietyPacksItem;
