"use client"

import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { usePathname } from "next/navigation";

const Breadcrumbs = ({
  pathname = "pages",
  currentPageName = "About Us",
  bgColor = "bg-primary-green",
}: {
  pathname?: string;
  currentPageName?: string;
  bgColor?: string;

}) => {

  const path = usePathname();
  const isCheckout = path === '/checkout'

  return (
    <section
      className={`absolute ${bgColor} w-full justify-center top-[145px] h-52 ${isCheckout ? 'max-sm:flex max-sm:h-20' : ''} z-[100] flex-col items-center gap-4 lg:flex hidden`}
    >
      <h2 className="text-4xl text-white font-bold">{currentPageName}</h2>
      <Breadcrumb>
        <BreadcrumbList className="text-xl text-center text-white">
          <BreadcrumbItem>
            {/* <BreadcrumbLink> */}
            <Link href="/">Home</Link>
            {/* </BreadcrumbLink> */}
          </BreadcrumbItem>
          {/* <BreadcrumbSeparator /> */}
          {/* <BreadcrumbItem>
            <BreadcrumbLink>
              <Link href="/components">{pathname}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem> */}
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{currentPageName}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </section>
  );
};

export default Breadcrumbs;
