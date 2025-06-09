import { FaShoppingBag, FaUser } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";

const NavIcons = () => {
  let hasProductsInCart = false;
  const productsInCart = ["Apple juice", "Strawberry slim shake"];
  if (productsInCart.length > 0) hasProductsInCart = true;
  return (
    <div className="flex gap-8 max-xl:gap-4 relative">
      <FaUser color="white" size={26} className="cursor-pointer" />
      <MdFavorite color="white" size={26} className="cursor-pointer" />
      <FaShoppingBag color="white" size={26} className="cursor-pointer" />
      {hasProductsInCart && (
        <span className="absolute -top-2 -right-3 font-bold bg-primary-yellow-dark-shade rounded-full w-5 h-5 flex items-center justify-center">
          {productsInCart.length}
        </span>
      )}
    </div>
  );
};

export default NavIcons;
