import Image from "next/image";

interface NewProductVisualProps {
  id: string;
  imageSrc: string;
  productName: string;
  isNewProduct: boolean;
}

const DrinkOptionsProduct = ({ drink }: { drink: NewProductVisualProps }) => {
  return (
    <div className="relative">
      <Image
        src={drink.imageSrc}
        width={300}
        height={300}
        alt="Product Image"
        className="rounded-full m-auto"
      />
      <h2 className="pt-12 text-center font-bold">{drink.productName}</h2>
    </div>
  );
};

export default DrinkOptionsProduct;
