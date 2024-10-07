import LogoImage from "./LogoImage";
import NavIcons from "./NavIcons";
import NavLinkItems from "./NavLinkItems";
import NavOrderButton from "./NavOrderButton";
import styles from "./TopNavigation.module.css";

const TopNavigation = () => {
  return (
    <header
      className={`flex h-52 bg-primary-green justify-between flex-col sm:flex-row py-4 px-12 w-full ${styles.bottomWave}`}
    >
      <div className="flex sm:w-1/2 gap-6">
        <LogoImage />
        <NavLinkItems />
      </div>
      <div className="sm:w-1/2">
        <div className="flex gap-6 justify-end items-center">
          <NavIcons />
          <NavOrderButton />
        </div>
      </div>
    </header>
  );
};

export default TopNavigation;
