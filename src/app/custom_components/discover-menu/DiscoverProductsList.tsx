import React from "react";
import DiscoverMenuProduct from "./DiscoverMenuProduct";
import Image1 from "@/assets/Crimson Apple Zest-1 grunge egg shape.png";
import Image2 from "@/assets/Caribbean Bliss Smoothie-2 grunge egg shape.png";
import Image3 from "@/assets/Citrus & Honeydew Melody-1 grunge egg shape.png";
import Image4 from "@/assets/Peachy Keen Fusion Smoothie-2 grunge egg shape.png";
import { cherryBomb } from '../../../../fonts';
import { Button } from "@/components/ui/button";
import Link from "next/link";

const items = [
  {
    id: "1",
    imageSrc: Image1,
    productName: "Smoothies",
  },
  {
    id: "2",
    imageSrc: Image2,
    productName: "Juices",
  },
  {
    id: "3",
    imageSrc: Image3,
    productName: "Salads",
  },
  {
    id: "4",
    imageSrc: Image4,
    productName: "Shakes",
  },
];

const DiscoverProductsList = () => {
  return (
    <section className="bg-[#FFF2BE] py-8 flex flex-col gap-16">
      <h2 className={`${cherryBomb.className} text-5xl font-bold text-slate-900 text-center px-5`}>
        Discover Our Menu
      </h2>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-12 px-5">
        {items?.map((item: any) => (
          <DiscoverMenuProduct
            imageSrc={item?.imageSrc}
            productName={item.productName}
            key={item.id}
          />
        ))}
      </div>
      <div className="flex flex-col gap-4 text-center self-center">
        <p className={`${cherryBomb.className} text-5xl font-bold text-slate-900 text-center px-5`}>
          And more...
        </p>
        <Link href={"/shop"}>
            <Button
              className="bg-[#EC7904] text-black font-bold hover:bg-primary-yellow rounded-xl"
              size={"lg"}
            >
              Get that Zesty Flavor
            </Button>
        </Link>
      </div>
    </section>
  );
};

export default DiscoverProductsList;
