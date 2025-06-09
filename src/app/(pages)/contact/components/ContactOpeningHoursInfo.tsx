import React from "react";

const ContactOpeningHoursInfo = () => {
  return (
    <section>
      <h2 className="text-6xl max-lg:text-5xl text-white font-bold">Opening Hours</h2>
      <ul className="pt-6 max-lg:p-6 text-white space-y-4">
        <li className="list-disc text-xl font-semibold">
          Monday To Friday ............. 08.00 - 18.00
        </li>
        <li className="list-disc text-xl font-semibold">
          Saturday & Sunday ............ 08.00 - 18.00
        </li>
      </ul>
    </section>
  );
};

export default ContactOpeningHoursInfo;
