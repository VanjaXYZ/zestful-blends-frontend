import React from "react";
import DiscoverMenuProduct from "./DiscoverMenuProduct";
import Image1 from "@/assets/Crimson Apple Zest-1 grunge egg shape.png";
import Image2 from "@/assets/Caribbean Bliss Smoothie-2 grunge egg shape.png";
import Image3 from "@/assets/Citrus & Honeydew Melody-1 grunge egg shape.png";
import Image4 from "@/assets/Peachy Keen Fusion Smoothie-2 grunge egg shape.png";
import Image5 from "@/assets/Fruit pizza sample.png";
import Image6 from "@/assets/Pre-packed fruits sample.png";
import { cherryBomb } from '../../../../../fonts';
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
  {
    id: "5",
    imageSrc: Image5,
    productName: "Fruit Pizzas",
  },
  {
    id: "6",
    imageSrc: Image6,
    productName: "Pre-packed Fruits",
  },
];

const DiscoverProductsList = () => {
  return (
    <section className="bg-primary-yellow pb-8 flex flex-col gap-16">
      <div className="relative bg-[length:100%_100%] bg-no-repeat -mt-[1px]"
        style={{backgroundImage: `linear-gradient(to bottom, #93BE3B 15%, #FFC10C  25%)`,}}>
          <div className="absolute w-full top-[-4px] h-4 bg-primary-green z-[-1]"></div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="#93BE3B" fillOpacity="1" d="M0,96L60,90.7C120,85,240,75,360,96C480,117,600,171,720,160C840,149,960,75,1080,53.3C1200,32,1320,64,1380,80L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
      </div>
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
    </section>
  );
};

export default DiscoverProductsList;
