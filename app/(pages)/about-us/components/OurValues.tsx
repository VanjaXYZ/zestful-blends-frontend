import React from "react";
import OurValuesList from "./OurValuesList";

const OurValues = () => {
  return (
    <div className="bg-slate-200 p-8 flex flex-col gap-2">
      <h4 className="text-2xl text-primary-green font-bold">
        What Are Our Values
      </h4>
      <OurValuesList />
    </div>
  );
};

export default OurValues;
