"use client";
import React from "react";

import FreshlySqueezedItem from "./FreshlySqueezedItem";
import { TbMilk } from "react-icons/tb";
import { GiStandingPotion } from "react-icons/gi";
import { GiFruitBowl } from "react-icons/gi";
import { LiaGlassMartiniAltSolid } from "react-icons/lia";
import { MdLocalDrink } from "react-icons/md";

import { Button } from "@/components/ui/button";
const items = [
  {
    id: "1",
    imageSrc: TbMilk,
    productName: "Sustainability",
  },
  {
    id: "2",
    imageSrc: GiStandingPotion,
    productName: "Our Roots",
  },
  {
    id: "3",
    imageSrc: GiFruitBowl,
    productName: "Variety Fruits",
  },
  {
    id: "4",
    imageSrc: LiaGlassMartiniAltSolid,
    productName: "Deliciousness",
  },
  {
    id: "5",
    imageSrc: MdLocalDrink,
    productName: "Quality",
  },
];

const FreshlySqueezedList = () => {
  return (
    <div className="flex flex-col items-center py-12 justify-center w-full">
      <h2 className="lg:text-4xl text-xl font-bold text-white text-center">
        Freshly Squeezed For You
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-8 py-8">
        {items?.map((item: any) => (
          <FreshlySqueezedItem
            icon={<item.imageSrc size={40} color={"white"} />}
            productName={item.productName}
            key={item.id}
          />
        ))}
      </div>
      <Button className="bg-primary-dark-teal w-[200px] font-semibold transition-colors hover:bg-white rounded-full text-white hover:text-black">
        Our Story
      </Button>
    </div>
  );
};

export default FreshlySqueezedList;
