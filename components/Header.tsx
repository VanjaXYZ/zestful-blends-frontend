"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faUser, faBars, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useCartStore } from "../store/cartStore";
import Image from "next/image";

const Header: React.FC = () => {
  const { itemCount } = useCartStore();

  return (
    <header className="relative w-full z-50 bg-[#277DA1]  min-h-screen sm:min-h-0 p-0 m-0">



      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="hidden lg:block w-full absolute top-0 left-0 h-auto -z-10"
          
        >
          <path
            
            fill="#277DA1"
            fillOpacity="1"
            d="M0,192L48,170.7C96,149,140,107,288,122.7C384,139,480,213,576,245.3C672,277,768,267,864,229.3C960,192,1056,128,1152,122.7C1248,117,1344,171,1392,197.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" 
          ></path>
        </svg>
        {/* Hidden on small devices */}
<div className="hidden lg:absolute lg:top-1/3 lg:left-0 lg:w-full lg:flex lg:justify-center lg:items-center lg:pt-20">
  <h1 className="text-4xl font-bold text-white">SHOP PAGE</h1>
</div>
<div className="hidden lg:absolute lg:top-1/3 lg:left-0 lg:w-full lg:flex lg:justify-center lg:items-center lg:pt-40">
  <h2 className="text-sm font-medium text-white">Home / Page / Shop</h2>
</div>

      
         {/* Top Section with Logo and Links */}
         <div className="relative z-10 flex justify-between items-center px-4 py-2 ">
         {/* Logo */}
         <div className="flex items-center gap-6">
           <Image
            src="/images/logo.png" // Path to the logo image in the public folder
            alt="Zestful Blends Logo"
            width={100}
            height={50}
            className="object-contain"
          />
          {/* Desktop Links */}
          <div className="hidden lg:flex text-white gap-6 text-sm">
            <a href="#">Home</a>
            <a href="#">Menu</a>
            <a href="#">Pages</a>
            <a href="#">Gallery</a>
            <a href="#">Contact Us</a>
          </div>
         </div>

         {/* Icons and Buttons */}
         <div className="flex items-center space-x-4">
          {/* User Icon */}
          <button aria-label="User" className="text-white text-lg">
            <FontAwesomeIcon icon={faUser} />
          </button>
          {/* Wishlist Icon */}
          <button aria-label="Wishlist" className="text-white text-lg">
            <FontAwesomeIcon icon={faHeart} />
          </button>
          {/* Cart Icon with Badge */}
          <div className="relative">
            <button aria-label="Cart" className="text-white text-lg">
              <FontAwesomeIcon icon={faBagShopping} />
            </button>
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-yellow-500 text-xs text-black font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </div>
          {/* Order Now Button */}
          <button className="bg-yellow-400 text-white px-6 py-2 rounded-md font-semibold hover:bg-yellow-500">
            Order Now
          </button>
          {/* Mobile Menu Icon */}
          <button aria-label="Menu" className="text-white text-lg lg:hidden">
            <FontAwesomeIcon icon={faBars} />
          </button>
          </div>
         </div>
         
       
        
      

      
    </header>
  );
};

export default Header;




