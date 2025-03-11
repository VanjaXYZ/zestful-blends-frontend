import React from "react";

interface LinkItem {
  text: string;
  link: string;
}

const contactList: LinkItem[] = [
  { text: "#130 - 139 Keefer St.", link: "https://maps.google.com/?q=130-139+Keefer+St+Vancouver+BC+V6A+1X3" },
  { text: "Vancouver, BC V6A 1X3", link: "https://maps.google.com/?q=130-139+Keefer+St+Vancouver+BC+V6A+1X3" },
  { text: "Call Us +16047046240", link: "tel:+16047046240" },
  { text: "info@zestfulblends.com", link: "mailto:info@zestfulblends.com" },
];

const shopList: LinkItem[] = [
  { text: "Juices", link: "/shop/juices" },
  { text: "Supplements", link: "/shop/supplements" },
  { text: "Pantry", link: "/shop/pantry" },
  { text: "Milkshakes", link: "/shop/milkshakes" },
  { text: "Health Drinks", link: "/shop/health-drinks" },
];

const servicesList: LinkItem[] = [
  { text: "Orders", link: "/account/orders" },
  { text: "Addresses", link: "/account/addresses" },
  { text: "Account", link: "/account" },
  { text: "Details", link: "/account/details" },
  { text: "24/7 Calls", link: "/support/contact" },
  { text: "Blogs & News", link: "/blog" },
];

const FooterList = () => {
  return (
    <section className="w-full flex justify-around flex-col md:flex-row gap-8 px-4 mt-8">
      <div className="w-full">
        <h3 className="text-white font-extrabold text-xl uppercase">Contact</h3>
        <ul className="space-y-1 md:space-y-2 py-4 w-full">
          {contactList.map((contact: LinkItem, index: number) => (
            <li key={index} className="text-white w-full">
              <a href={contact.link} className="hover:text-green-300 transition-colors">
                {contact.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full">
        <h3 className="text-white font-extrabold text-xl uppercase">Shop</h3>
        <ul className="space-y-1 py-4 md:space-y-2">
          {shopList.map((shop: LinkItem, index: number) => (
            <li key={index} className="text-white">
              <a href={shop.link} className="hover:text-green-300 transition-colors">
                {shop.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full">
        <h3 className="text-white font-extrabold text-xl uppercase">
          Services
        </h3>
        <ul className="space-y-1 py-4 md:space-y-2">
          {servicesList.map((service: LinkItem, index: number) => (
            <li key={index} className="text-white">
              <a href={service.link} className="hover:text-green-300 transition-colors">
                {service.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FooterList;
