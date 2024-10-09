import React from "react";
import FooterLogoAndSocials from "./FooterLogoAndSocials";
import FooterList from "./FooterList";

const Footer = () => {
  return (
    <footer className="block p-24">
      <section className="flex justify-around">
        <FooterLogoAndSocials />
        <FooterList />
      </section>
    </footer>
  );
};

export default Footer;
