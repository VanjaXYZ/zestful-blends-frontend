import DesktopNavigationMenu from "./DesktopNavigationMenu";
import MobileNavigationMenu from "./MobileNavigationMenu";

const TopNavigation = () => {
  return (
    <header className="w-full">
      <DesktopNavigationMenu />
      <MobileNavigationMenu />
    </header>
  );
};

export default TopNavigation;
