"use client";
import React, { useEffect, useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);
  return (
    <div className="flex justify-end lg:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <IoMenu size={42} color="white" />
        </SheetTrigger>
        <SheetContent
          side={"top"}
          className="bg-primary-sky-blue mt-20 lg:hidden fixed min-h-full w-full z-50"
        >
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription className="flex justify-between">
              <MobileTransformedLogo />
              <MobileNavLinkItems />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavigationMenu;
