import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { FaShoppingBag, FaUser } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import CartItem from "./CartItem";
import useCartStore from "@/app/store/cartStore";
import useWishlistStore from "@/app/store/wishlistStore";

const NavIcons = () => {
  let hasProductsInCart = false;
  const productsInCart = useCartStore((state) => state.cart);
  const productsInWishlist = useWishlistStore((state) => state.wishlist);

  return (
    <div className="flex gap-8 max-xl:gap-4 relative">
      <FaUser color="white" size={26} className="cursor-pointer" />
      <Popover>
        <PopoverTrigger asChild>
          <div className="relative">
            <MdFavorite color="white" size={26} className="cursor-pointer" />
            {productsInWishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 font-bold bg-primary-yellow-dark-shade rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {productsInWishlist.length}
              </span>
            )}
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-96 max-h-[60vh] bg-white p-4 rounded-md shadow-lg overflow-y-auto z-[101]">
          <div className="flex flex-col gap-2 h-full p-2">
            <div className="flex items-start justify-between">
              <h2 className="text-primary-yellow font-bold text-3xl pb-4">
                Wishlist
              </h2>
              <p className="flex items-center text-primary-yellow rounded-sm p-2 border border-primary-yellow text-sm">
                {productsInWishlist.length} items
              </p>
            </div>
            {productsInWishlist.length > 0 ? (
              productsInWishlist.map((item) => {
                return (
                  <>
                    <CartItem
                      variant="wishlist"
                      onQuantityChange={() => {}}
                      onRemoveFromCart={() => {}}
                      id={item.id}
                      key={item.id}
                      name={item.name}
                      toppings={item.toppings}
                      imageSrc={item.imageSrc}
                      price={item.price}
                      quantity={item.quantity}
                    />
                    <hr className="border-t-2 border-primary-yellow w-full my-2" />
                  </>
                );
              })
            ) : (
              <p className=" text-center text-xl m-5">Your wishlist is empty</p>
            )}
          </div>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <div className="relative">
            <FaShoppingBag color="white" size={26} className="cursor-pointer" />
            {productsInCart.length > 0 && (
              <span className="absolute -top-2 -right-2 font-bold bg-primary-yellow-dark-shade rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {productsInCart.length}
              </span>
            )}
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-96 max-h-[60vh] bg-white p-4 rounded-md shadow-lg overflow-y-auto z-[101]">
          <div className="flex flex-col gap-2 h-full p-2">
            <div className="flex items-start justify-between">
              <h2 className="text-primary-yellow font-bold text-3xl pb-4">
                Your Cart
              </h2>
              <p className="text-primary-yellow rounded-sm p-2 border border-primary-yellow text-sm flex items-center">
                {productsInCart.length} items
              </p>
            </div>
            {productsInCart.length > 0 ? (
              productsInCart.map((item) => {
                return (
                  <>
                    <CartItem
                      variant="cart"
                      onQuantityChange={() => {}}
                      onRemoveFromCart={() => {}}
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      toppings={item.toppings}
                      imageSrc={item.imageSrc}
                      price={item.price}
                      quantity={item.quantity}
                    />
                    <hr className="border-t-2 border-primary-yellow w-full my-2" />
                  </>
                );
              })
            ) : (
              <p className=" text-center text-xl m-5">Your cart is empty</p>
            )}
            <div className="flex flex-col gap-2 mt-2 w-full">
              <div>
                You choose : <p className="text-primary-yellow inline">ASAP</p>
              </div>
              <div className="flex  justify-center ">
                <button className="bg-primary-yellow w-full py-2 hover:bg-primary-yellow-dark-shade rounded-full text-white">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default NavIcons;
