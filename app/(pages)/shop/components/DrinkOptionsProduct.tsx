import Image from "next/image";

interface NewProductVisualProps {
  id: string;
  imageSrc: string;
  productName: string;
  isNewProduct: boolean;
}

const DrinkOptionsProduct = ({ drink }: { drink: NewProductVisualProps }) => {
  return (
    <div className="flex justify-center flex-col items-center">
      <Image
        src={drink.imageSrc}
        width={300}
        height={300}
        alt="Product Image"
        className="rounded-full"
      />
      <h2 className="pt-12 font-bold">{drink.productName}</h2>
    </div>
  );
};

export default DrinkOptionsProduct;
