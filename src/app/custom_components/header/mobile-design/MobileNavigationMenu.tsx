import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoMenu } from "react-icons/io5";
import MobileNavLinkItems from "./MobileNavLinkItems";
import MobileTransformedLogo from "./MobileTransformedLogo";

const MobileNavigationMenu = () => {
  return (
    <nav className="flex justify-end lg:hidden">
      <Sheet>
        <SheetTrigger>
          <IoMenu size={42} color="white" />
        </SheetTrigger>
        <SheetContent className="min-w-full bg-primary-sky-blue mt-24 lg:hidden">
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription className="flex justify-between">
              <MobileTransformedLogo />
              <MobileNavLinkItems />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNavigationMenu;
