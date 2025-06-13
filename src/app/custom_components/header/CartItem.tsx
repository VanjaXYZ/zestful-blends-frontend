import Image from "next/image";
import { TbTrash, TbPencil } from "react-icons/tb";

interface CartItemProps {
  name: string;
  toppings: string[];
  imageSrc: any;
  price: number;
  quantity: number;
  onQuantityChange: (quantity: number | string) => void;
  onRemoveFromCart: () => void;
  onEditClick: () => void;
  variant: "cart" | "wishlist";
  isEditing?: boolean;
}
const CartItem = ({
  name,
  toppings,
  imageSrc,
  price,
  quantity,
  onQuantityChange,
  onRemoveFromCart,
  onEditClick,
  variant,
  isEditing,
}: CartItemProps) => {
  return (
    <div className="flex h-auto gap-4">
      <Image
        src={imageSrc}
        alt=""
        className="rounded-xl  w-[100px] object-cover"
      />
      <div className="flex flex-col w-full gap-2">
        <div className="flex justify-between">
          <p className="font-semibold">{name}</p>
          <p className="font-semibold">${price}</p>
        </div>
        <div className="flex flex-col flex-wrap gap-2">
          <p>Toppings: {toppings && toppings.join(", ")}</p>
        </div>
        {variant === "cart" ? (
          <div className="flex gap-2 justify-between">
            <div className="flex gap-2">
              {isEditing ? (
                <>
                  <button
                    className="border border-primary-yellow rounded-full w-6 h-6 flex items-center justify-center"
                    onClick={() => onQuantityChange(quantity - 1)}
                  >
                    -
                  </button>
                  <p className="text-center">{quantity}</p>
                  <button
                    className="border border-primary-yellow rounded-full w-6 h-6 flex items-center justify-center"
                    onClick={() => onQuantityChange(quantity + 1)}
                  >
                    +
                  </button>
                </>
              ) : (
                <p className="text-center">Qty: {quantity}</p>
              )}
            </div>
            <div className="flex gap-2">
              <TbTrash size={20} onClick={onRemoveFromCart} />
              <TbPencil size={20} onClick={onEditClick} />
            </div>
          </div>
        ) : (
          <div className="flex gap-2 justify-between">
            <button className=" text-primary-yellow border border-primary-yellow text-sm px-2 py-1 rounded-xl">
              Add to cart
            </button>
            <button className=" text-primary-yellow border border-primary-yellow text-sm px-2 py-1 rounded-xl">
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartItem;
