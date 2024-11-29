import DesktopNavigationMenu from "./DesktopNavigationMenu";
import MobileHeader from "./mobile-design/MobileHeader";

const TopNavigation = () => {
  return (
    <div className="flex flex-col w-full">
      <DesktopNavigationMenu />
      <MobileHeader />
    </div>
  );
};

export default TopNavigation;
