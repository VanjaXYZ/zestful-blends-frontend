import Image, { StaticImageData } from "next/image";
import { IconType } from "react-icons";

interface ImageCellProps {
  sourceImage: HTMLImageElement | StaticImageData;
  altText: string;
}

const ImageCell = (props: ImageCellProps) => {
  const { sourceImage, altText } = props;
  return <Image className="rounded-xl" src={sourceImage} alt={altText} />;
};

export default ImageCell;
