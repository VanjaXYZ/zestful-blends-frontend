import React from "react";
import Image1 from "@/assets/couple-with-juices.png";
import Image2 from "@/assets/group-of-juices.png";
import Image3 from "@/assets/man-at-fruit-market.png";
import Image4 from "@/assets/mango-juice-splashing.png";
import Image, { StaticImageData } from "next/image";

type ListProp = {
  id: string;
  src: string | StaticImageData;
  text: string;
  subText?: string;
};

const listContent: ListProp[] = [
  {
    id: "1",
    src: Image1,
    text: "Health",
    subText: "Prioritizing Well-being And Nutrition",
  },
  {
    id: "2",
    src: Image2,
    text: "Sustainability",
  },
  {
    id: "3",
    src: Image3,
    text: "Innovation",
  },
  {
    id: "4",
    src: Image4,
    text: "Customer - Centricity",
  },
];

const OurValuesList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {listContent?.map((item: ListProp, index: number) => (
        <div className="flex flex-col items-center py-2" key={item.id}>
          <div className="flex flex-col gap-8">
            <Image
              src={item.src}
              width={200}
              height={400}
              alt="Zestful Blends image"
              className="rounded-xl"
            />
            <article>
              <p className="font-semibold">{item.text}</p>
              {item.subText && (
                <em className="text-primary-green text-[10px] lg:text-sm">
                  {item.subText}
                </em>
              )}
            </article>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurValuesList;
