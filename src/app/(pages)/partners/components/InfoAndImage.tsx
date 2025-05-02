import { StaticImageData } from "next/image";
import ImageCell from "./ImageCell";

interface InfoAndImageProps {
  infoHeading: string;
  infoDescription: string;
  imageSrc: HTMLImageElement | StaticImageData;
  imageAltText: string;
  listText: Array<string>;
  flexRowReverse?: boolean;
}

const InfoAndImage = (props: InfoAndImageProps) => {
  const {
    flexRowReverse,
    infoHeading,
    infoDescription,
    listText,
    imageSrc,
    imageAltText,
  } = props;
  return (
    <div
      className={`flex w-6/12 m-10 self-center justify-around ${
        flexRowReverse ? "flex-row-reverse" : ""
      }`}
    >
      <div className="w-1/2 flex flex-col">
        <div className="flex flex-col justify-center text-xl text-[#2D4E75] font-bold mb-5">
          {infoHeading}
        </div>
        <div>
          {infoDescription}
          {listText.map((listText, idx) => (
            <li key={idx}>{listText}</li>
          ))}
        </div>
      </div>
      <div className="w-1/4">
        <ImageCell sourceImage={imageSrc} altText={imageAltText} />
      </div>
    </div>
  );
};

export default InfoAndImage;
