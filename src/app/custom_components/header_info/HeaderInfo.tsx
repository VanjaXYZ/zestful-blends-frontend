import React from "react";
import InfoHeaderIcons from "./InfoHeaderIcons";
import InfoHeaderMessage from "./InfoHeaderMessage";
import InfoHeaderEmail from "./InfoHeaderEmail";

const HeaderInfo = () => {
  return (
    <div className="flex justify-between bg-primary-yellow-dark-shade py-2 px-24">
      <InfoHeaderIcons />
      <InfoHeaderMessage />
      <InfoHeaderEmail />
    </div>
  );
};

export default HeaderInfo;
