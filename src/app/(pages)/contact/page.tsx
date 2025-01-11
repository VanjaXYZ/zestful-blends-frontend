import Breadcrumbs from "@/app/custom_components/shared/Breadcrumbs";
import React from "react";
import ContactForm from "./components/ContactForm";
import ContactInfoText from "./components/ContactInfoText";
import ContactOpeningHoursInfo from "./components/ContactOpeningHoursInfo";
import ContactMoreInfo from "./components/ContactMoreInfo";
import ContactMap from "./components/ContactMap";
import ContactMessage from "./components/ContactMessage";

const page = () => {
  return (
    <main>
      <Breadcrumbs currentPageName="Contact Us" />
      <section className="lg:mt-24 lg:p-24 bg-primary-smooth-blue grid grid-cols-2 gap-y-8">
        <ContactInfoText />
        <ContactForm />
        <ContactOpeningHoursInfo />
        <ContactMoreInfo />
      </section>
      <ContactMap />
      <ContactMessage />
    </main>
  );
};

export default page;
