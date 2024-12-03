import React from "react";

const contactList = [
  "#130 - 139 Keefer St.",
  "Vancouver, BC V6A 1X3",
  "Call Us +16047046240",
  "info@zestfulblends.com",
];
const shopList = [
  "Juices",
  "Supplements",
  "Pantry",
  "Milkshakes",
  "Health Drinks",
];
const servicesList = [
  "Orders",
  "Addresses",
  "Account",
  "Details",
  "24/7 Calls",
  "Blogs & News",
];

const FooterList = () => {
  return (
    <section className="w-full flex justify-around flex-col md:flex-row gap-8 px-4 mt-8">
      <div className="w-full">
        <h3 className="text-white font-extrabold text-xl uppercase">Contact</h3>
        <ul className="space-y-1 md:space-y-2 py-4 w-full">
          {contactList.map((contact: string, index: number) => (
            <li key={index} className="text-white w-full">
              {contact}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full">
        <h3 className="text-white font-extrabold text-xl uppercase">Shop</h3>
        <ul className="space-y-1 py-4 md:space-y-2">
          {shopList.map((shop: string, index: number) => (
            <li key={index} className="text-white">
              {shop}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full">
        <h3 className="text-white font-extrabold text-xl uppercase">
          Services
        </h3>
        <ul className="space-y-1 py-4 md:space-y-2">
          {servicesList.map((service: string, index: number) => (
            <li key={index} className="text-white">
              {service}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FooterList;
