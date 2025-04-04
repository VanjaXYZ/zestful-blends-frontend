import React from "react";
import InfoHeaderIcons from "./InfoHeaderIcons";
import InfoHeaderMessage from "./InfoHeaderMessage";
import InfoHeaderEmail from "./InfoHeaderEmail";

const HeaderInfo = () => {
  return (
    <div className="justify-between bg-primary-yellow-dark-shade py-2 px-12 w-full flex-col sm:flex-row hidden lg:flex">
      <InfoHeaderIcons />
      <InfoHeaderMessage />
      <InfoHeaderEmail />
    </div>
  );
};

export default HeaderInfo;
