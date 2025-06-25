"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavLinkItemProp {
  id: number;
  href: string;
  text: string;
  subpages?: NavLinkItemProp[];
}

interface MobileNavLinkItemsProps {
  onNavigate: () => void;
}

const navLinks: NavLinkItemProp[] = [
  {
    id: 1,
    href: "/",
    text: "Home",
  },
  {
    id: 2,
    href: "/shop",
    text: "Menu",
    subpages: [
      { id: 2.1, href: "/shop/smoothies", text: "Smoothies" },
      { id: 2.2, href: "/shop/fruit-shakes", text: "Fruit shakes" },
      { id: 2.3, href: "/shop/fruit-juices", text: "Fruit Juices" },
      { id: 2.4, href: "/shop/fruit-pizzas", text: "Fruit Pizzas" },
      { id: 2.5, href: "/shop/fruit-salads", text: "Fruit Salads" },
      { id: 2.6, href: "/shop/pre-packed-fruits", text: "Pre-packed fruits" },
    ],
  },
  {
    id: 3,
    href: "/pages",
    text: "Pages",
    subpages: [
      { id: 3.1, href: "/about-us", text: "About Us" },
      { id: 3.2, href: "/shop", text: "Shop" },
      { id: 3.3, href: "/special-offers", text: "Special Offers" },
      { id: 3.4, href: "/blogs", text: "Blogs" },
      { id: 3.5, href: "/faq", text: "FAQ" },
    ],
  },
  {
    id: 4,
    href: "/gallery",
    text: "Gallery",
  },
  {
    id: 5,
    href: "/contact",
    text: "Contact Us",
  },
];

const MobileNavLinkItems = ({ onNavigate }: MobileNavLinkItemsProps) => {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<null | number>(null);

  const handleBack = () => setActiveMenu(null);
  const handleLinkClick = () => {
    setTimeout(() => {
      setActiveMenu(null);
      onNavigate();
    }, 200);
  };

  const currentMenu = navLinks.find((link) => link.id === activeMenu);

  return (
    <div className="flex flex-col gap-6 w-full items-center justify-center text-white">

      {activeMenu && (
        <button
          onClick={handleBack}
          className="self-start text-xl mb-4 pl-4"
        >
          ← Back
        </button>
      )}

      {activeMenu && currentMenu?.subpages ? (
        <div className="flex flex-col gap-4 w-full items-center">
          {currentMenu.subpages.map((sub) => (
            <Link
              key={sub.id}
              href={sub.href}
              onClick={handleLinkClick}
              className={`${
                pathname === sub.href && "underline underline-offset-4"
              } text-lg`}
            >
              {sub.text}
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-6 w-full items-center">
          {navLinks.map((link) => (
            <div key={link.id} className="w-full flex flex-col items-center">
              {link.subpages ? (
                <button
                  onClick={() => setActiveMenu(link.id)}
                  className="font-bold text-2xl"
                >
                  {link.text}
                </button>
              ) : (
                <Link
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`${
                    pathname === link.href && "underline underline-offset-4"
                  } font-bold text-2xl`}
                >
                  {link.text}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileNavLinkItems;

