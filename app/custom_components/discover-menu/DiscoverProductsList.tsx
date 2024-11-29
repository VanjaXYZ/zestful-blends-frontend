import React from "react";
import DiscoverMenuProduct from "./DiscoverMenuProduct";
import Image1 from "@/assets/Caribbean Bliss Smoothie-2.png";
import Image2 from "@/assets/Citrus & Honeydew Melody-1.png";
import Image3 from "@/assets/Crimson Apple Zest-1.png";
import Image4 from "@/assets/Peachy Keen Fusion Smoothie-2.png";

const items = [
  {
    id: "1",
    imageSrc: Image1,
    productName: "Smoothy",
  },
  {
    id: "2",
    imageSrc: Image2,
    productName: "Juice",
  },
  {
    id: "3",
    imageSrc: Image3,
    productName: "Salad",
  },
  {
    id: "4",
    imageSrc: Image4,
    productName: "Milk Shake",
  },
];

const DiscoverProductsList = () => {
  return (
    <section className="bg-smooth-yellow py-8 flex flex-col gap-20">
      <h2 className="text-4xl font-bold text-slate-900 text-center">
        Discover Our Menu
      </h2>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-12">
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
