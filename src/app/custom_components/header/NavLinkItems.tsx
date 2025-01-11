"use client";
import { NavLinkSubpages } from "@/app/interfaces";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks: NavLinkSubpages[] = [
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
    subpages: [
      {
        id: 3.1,
        href: "/about-us",
        text: "About Us",
      },
      {
        id: 3.2,
        href: "/shop",
        text: "Shop",
      },
      {
        id: 3.3,
        href: "/special-offers",
        text: "Special Offers",
      },
      {
        id: 3.4,
        href: "/blogs",
        text: "Blogs",
      },
      {
        id: 3.5,
        href: "/faq",
        text: "FAQ",
      },
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

const NavLinkItems = () => {
  const pathname = usePathname();

  return (
    <NavigationMenu className="flex items-start [&_div.absolute]:right-10 [&_div.absolute]:top-12 z-[1000]">
      <NavigationMenuList>
        {navLinks.map((link: NavLinkSubpages) => (
          <NavigationMenuItem key={link.id}>
            {link.subpages ? (
              <>
                <NavigationMenuTrigger className="text-white font-bold p-4 bg-transparent">
                  {link.text}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="w-full flex flex-col gap-8">
                  <NavigationMenuList className="flex flex-col bg-primary-green">
                    {link.subpages.map((subpage) => (
                      <NavigationMenuItem
                        key={subpage.id}
                        className="transition-colors w-[150px] text-start p-2 text-white font-bold hover:underline hover:underline-offset-4"
                      >
                        <Link
                          key={subpage.id}
                          href={subpage.href}
                          passHref
                          className="text-white font-bold"
                        >
                          {subpage.text}
                        </Link>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenuContent>
              </>
            ) : (
              <Link
                href={link.href}
                passHref
                className={`text-white p-4 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground h-10 rounded-md px-4 py-2 font-bold ${
                  pathname === link.href && "underline underline-offset-2"
                }`}
              >
                {link.text}
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavLinkItems;
