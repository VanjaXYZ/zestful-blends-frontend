import React from "react";

const contactList = [
  "#130 - 139 Keefer St",
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
    <section className="w-full flex justify-around">
      <div>
        <h3 className="text-white font-bold text-xl">Contact</h3>
        <ul className="space-y-2 py-4">
          {contactList.map((contact: string, index: number) => (
            <li key={index} className="text-white">
              {contact}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-white font-bold text-xl">Shop</h3>
        <ul className="space-y-2 py-4">
          {shopList.map((shop: string, index: number) => (
            <li key={index} className="text-white">
              {shop}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-white font-bold text-xl">Services</h3>
        <ul className="space-y-2 py-4">
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
