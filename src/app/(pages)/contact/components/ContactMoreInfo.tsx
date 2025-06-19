import InfoHeaderIcons from "@/app/custom_components/header_info/InfoHeaderIcons";
import { Globe, MailIcon, MapPin, PhoneIcon } from "lucide-react";

const ContactMoreInfo = () => {
  return (
    <section className="">
      <h2 className="text-6xl max-lg:text-4xl text-white font-bold ">Need More Information?</h2>
      <ul className="pt-6 text-white space-y-4">
        <li className="flex gap-4 font-bold">
          <PhoneIcon />
          <span>+21 8727 6271</span>
        </li>
        <li className="flex gap-4 font-bold">
          <MailIcon />
          <span>pulpsjuice@domain.com</span>
        </li>
        <li className="flex gap-4 font-bold">
          <MapPin />
          <span>Nory 6789, Burn Swiss</span>
        </li>
        <li className="flex gap-4 font-bold">
          <Globe />
          <span>Nory 6789, Burn Swiss</span>
        </li>
      </ul>
      <div className="mt-6">
        <InfoHeaderIcons />
      </div>
    </section>
  );
};

export default ContactMoreInfo;
