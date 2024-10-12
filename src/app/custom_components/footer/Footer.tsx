import React from "react";
import FooterLogoAndSocials from "./FooterLogoAndSocials";
import FooterList from "./FooterList";

const Footer = () => {
  return (
    <footer className="w-full">
      <section className="flex justify-around flex-col md:flex-row">
        <FooterLogoAndSocials />
        <FooterList />
      </section>
    </footer>
  );
};

export default Footer;
