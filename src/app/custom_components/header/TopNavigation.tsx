import LogoImage from "./LogoImage";
import NavIcons from "./NavIcons";
import NavLinkItems from "./NavLinkItems";
import NavOrderButton from "./NavOrderButton";

const TopNavigation = () => {
  return (
    <header className="flex h-52 bg-primary-green justify-between py-4 px-12 w-full">
      <div className="flex w-1/2 gap-6">
        <LogoImage />
        <NavLinkItems />
      </div>
      <div className="w-1/2">
        <div className="flex gap-6 justify-end items-center">
          <NavIcons />
          <NavOrderButton />
        </div>
      </div>
    </header>
  );
};

export default TopNavigation;
