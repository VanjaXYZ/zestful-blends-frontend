import useCartStore from "@/app/store/cartStore";
import useWishlistStore from "@/app/store/wishlistStore";
import Image from "next/image";
import { useState } from "react";
import { TbTrash, TbPencil, TbCheck, TbXboxX } from "react-icons/tb";

interface CartItemProps {
  id: string;
  name: string;
  toppings: string[];
  imageSrc: any;
  price: number;
  quantity: number;
  variant: "cart" | "wishlist";
}
const CartItem = ({
  id,
  name,
  toppings,
  imageSrc,
  price,
  quantity,
  variant,
}: CartItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [originalQuantity, setOriginalQuantity] = useState(quantity);
  const itemQuantity =
    useCartStore(
      (state) => state.cart.find((item) => item.id === id)?.quantity
    ) || 1;
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const onRemoveFromCart = useCartStore((state) => state.removeFromCart);
  const onRemoveFromWishlist = useWishlistStore(
    (state) => state.removeFromWishlist
  );

  const handleUpdateQuantity = (quantity: number) => {
    setIsEditing(false);
    updateQuantity(id, quantity);
  };

  const handleStartEdit = () => {
    setOriginalQuantity(itemQuantity);
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    updateQuantity(id, originalQuantity);
  };

  const moveItemToCart = (id: string) => {
    useWishlistStore.getState().moveToCart(id);
  };

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
                  {itemQuantity > 1 && (
                    <button
                      className="border border-primary-yellow rounded-full w-6 h-6 flex items-center justify-center"
                      onClick={() => decreaseQuantity(id)}
                    >
                      -
                    </button>
                  )}
                  <input
                    disabled={!isEditing}
                    type="text"
                    value={itemQuantity}
                    onChange={(e) =>
                      handleUpdateQuantity(Number(e.target.value))
                    }
                    className="text-center w-8"
                    min={1}
                  />
                  <button
                    className="border border-primary-yellow rounded-full w-6 h-6 flex items-center justify-center"
                    onClick={() => increaseQuantity(id)}
                  >
                    +
                  </button>
                </>
              ) : (
                <p className="text-center">Qty: {quantity}</p>
              )}
            </div>
            <div className="flex gap-2">
              {isEditing ? (
                <>
                  <TbXboxX
                    className="cursor-pointer"
                    size={20}
                    onClick={handleCancelEdit}
                  />
                  <TbCheck
                    className="cursor-pointer"
                    size={20}
                    onClick={() => handleUpdateQuantity(itemQuantity)}
                  />
                </>
              ) : (
                <>
                  <TbTrash size={20} onClick={() => onRemoveFromCart(id)} />
                  <TbPencil size={20} onClick={handleStartEdit} />
                </>
              )}
            </div>
          </div>
        ) : (
          <div className="flex gap-2 justify-between">
            <button
              className=" text-primary-yellow border border-primary-yellow text-sm px-2 py-1 rounded-xl"
              onClick={() => moveItemToCart(id)}
            >
              Add to cart
            </button>
            <button
              className=" text-primary-yellow border border-primary-yellow text-sm px-2 py-1 rounded-xl"
              onClick={() => onRemoveFromWishlist(id)}
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartItem;
