import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface ImageCellProps {
  src: string | StaticImageData;
  alt: string;
}

const ImageCell = ({ src, alt }: ImageCellProps) => {
  return (
    <div className="col-span-1 row-span-1 bg-white overflow-hidden aspect-square">
      <div className="w-full h-full relative">
        <Image 
          src={src} 
          alt={alt} 
          layout="fill" 
          objectFit="cover" 
        />
      </div>
    </div>
  );
};

export default ImageCell
  