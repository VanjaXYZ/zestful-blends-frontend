import { FaShoppingBag, FaUser } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";

const NavIcons = () => {
  return (
    <div className="flex gap-8">
      <FaUser color="white" size={26} className="cursor-pointer" />
      <MdFavorite color="white" size={26} className="cursor-pointer" />
      <FaShoppingBag color="white" size={26} className="cursor-pointer" />
    </div>
  );
};

export default NavIcons;
