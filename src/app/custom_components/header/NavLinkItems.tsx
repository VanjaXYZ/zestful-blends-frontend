"use client";
import { NavLinkItemProp } from "@/app/interfaces";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navLinks = [
  {
    id: 1,
    href: "/",
    text: "Home",
  },
  {
    id: 2,
    href: "/menu",
    text: "Menu",
  },
  {
    id: 3,
    href: "/pages",
    text: "Pages",
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

const NavLinkItems = () => {
  const pathname = usePathname();
  return (
    <ul className="flex gap-7">
      {navLinks?.map((link: NavLinkItemProp) => (
        <li key={link.id}>
          <Link
            href={link.href}
            className={`${
              pathname === link.href && "underline underline-offset-4"
            } text-white font-bold text-lg`}
          >
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinkItems;
