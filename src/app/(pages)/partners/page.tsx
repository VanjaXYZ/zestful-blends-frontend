import Breadcrumbs from "@/app/custom_components/shared/Breadcrumbs";
import DoordashSvg from "@/assets/doordash-partner.svg";
import FantuanSvg from "@/assets/fantuan-partner.svg";
import UberSvg from "@/assets/uber-partner.svg";
import LycheeDream from "@/assets/Lush_Lychee_Dream.png";
import LushLychee from "@/assets/lush-lychee-dream.png";
import PearPlum from "@/assets/pear-plum.png";
import PearPlumPizza from "@/assets/pear-plum-pizzazz.png";
import Serve from "@/assets/serve.png";
import ImageCell from "./components/ImageCell";
import { Button } from "@/components/ui/button";
import InfoAndImage from "./components/InfoAndImage";
import AccordionElements from "../faq/components/AccordionElements";

export type AccordionProps = {
  id: string;
  header: string;
  text: string;
};

const faqAccordionData: AccordionProps[] = [
  {
    id: "1",
    header: "What's your busiest delivery time window?",
    text: "Our juices are made from 100% natural ingredients—fruits, vegetables, and superfoods, with no added sugars or preservatives. We prepare each juice fresh to order to ensure maximum freshness and nutrient retention.",
  },
  {
    id: "2",
    header: "What's your minimum order volume requirement for partnerships?",
    text: "We package our juices in eco-friendly, recyclable bottles that maintain freshness. When stored in the refrigerator, our cold-pressed juices can last up to 3 days. For the best taste and quality, we recommend consuming them as soon as possible.",
  },
  {
    id: "3",
    header: "Why don't you offer in-house delivery?",
    text: "We focus on crafting juices while trusting experts like you for logistics.",
  },
  {
    id: "4",
    header: " Are your juices really fresh if delivered?",
    text: "Yes! We offer monthly subscriptions with a discount. Fresh juices are delivered weekly to your door according to your chosen plan, so you can always have healthy, delicious juices on hand.",
  },
  {
    id: "5",
    header: "How do you handle customer complaints about delivery?",
    text: 'Our recommended juice for detox is the "Green Detox" made with kale, spinach, cucumber, lemon, and ginger. It helps cleanse the body, boosts immunity, and provides natural energy for the entire day.',
  },
  {
    id: "6",
    header: "How quickly do you prepare orders after receiving alerts",
    text: 'Our recommended juice for detox is the "Green Detox" made with kale, spinach, cucumber, lemon, and ginger. It helps cleanse the body, boosts immunity, and provides natural energy for the entire day.',
  },
  {
    id: "7",
    header: "How do I know which delivery service covers my area?",
    text: 'Our recommended juice for detox is the "Green Detox" made with kale, spinach, cucumber, lemon, and ginger. It helps cleanse the body, boosts immunity, and provides natural energy for the entire day.',
  },
];
const page = () => {
  return (
    <main>
      <Breadcrumbs currentPageName="Third Party Partners" />
      <section className="flex lg:mt-24 p-10 bg-[#FFDDAA7B]">
        <div className="flex flex-col gap-4 m-10 justify-evenly">
          <div className="text-4xl text-[#11243E] font-bold">
            Delivered by our partners
          </div>
          <div className=" text-[#2D4E75]">
            We are pleased to announce that after close collaboration and
            repeated tests with our distribution partners, we have established
            an efficient and reliable cold chain distribution system to ensure
            that every fresh juice and smoothie reaches you in the best
            condition! From the selection of raw materials to the production of
            the finished product, we always adhere to high standards of quality
            control!
          </div>
          <div className="flex w-2/4 gap-8">
            <Button className="sm:w-4/5 bg-primary-yellow hover:bg-primary-yellow-dark-shade text-white font-bold py-2   text-sm  rounded-xl mb-2">
              Delivery
            </Button>
            <Button className="sm:w-4/5 bg-[#D6CCCCB8] hover:bg-[#b5b5b5] text-black font-bold py-2 text-sm rounded-xl mb-2">
              Learn More
            </Button>
          </div>
        </div>

        <div className="w-1/2">
          <ImageCell sourceImage={LycheeDream} altText="Lush lychee dream" />
        </div>
      </section>
      <section className="flex flex-col p-5 bg-[#FBEEAC63] shadow-[0_0_10px_#f8a100]">
        <div className="flex justify-center text-4xl text-[#2D4E75] font-bold m-5">
          <h2>Click the link to deliver</h2>
        </div>
        <div className="flex justify-evenly w-full m-5">
          <ImageCell sourceImage={FantuanSvg} altText="fantuan" />
          <ImageCell sourceImage={UberSvg} altText="uber" />
          <ImageCell sourceImage={DoordashSvg} altText="doordash" />
        </div>
      </section>
      <section className="flex flex-col p-5 bg-[#FBEEAC63]">
        <div className="flex align-center justify-around text-4xl text-[#2D4E75] font-bold m-5">
          Why Choose Zestful Blends?
        </div>
        <div className="flex text-[#2D4E75] justify-around">
          Partner with us to deliver premium juices with higher margins and
          hassle-free operations. Our loyal customers order frequently and tip
          well, ensuring steady demand for your drivers. Let&apos;s grow
          together.
        </div>

        <InfoAndImage
          infoHeading="Simple, Low-Risk Operations"
          infoDescription="No hot food = fewer delivery issues."
          imageSrc={PearPlumPizza}
          imageAltText="pear plum"
          listText={[
            "All products pre-bottled with tamper-proof seals",
            "Standardized 16oz/24oz sizes fit any delivery bag",
            "No temperature disputes (shelf-stable for 2hr delivery window)",
          ]}
        />
        <InfoAndImage
          infoHeading="Delivery-Friendly Operations"
          infoDescription="Zero hassle for your drivers."
          imageSrc={LushLychee}
          imageAltText="pear plum"
          listText={[
            "Pre-packed, leak-proof bottles (FDA-compliant seals)",
            "Dedicated pickup station with 2-minute guarantee",
          ]}
          flexRowReverse
        />
        <InfoAndImage
          infoHeading="Simple, Low-Risk Operations"
          infoDescription="No hot food = fewer delivery issues."
          imageSrc={PearPlum}
          imageAltText="pear plum"
          listText={[
            "All products pre-bottled with tamper-proof seals",
            "Standardized 16oz/24oz sizes fit any delivery bag",
            "No temperature disputes (shelf-stable for 2hr delivery window)",
          ]}
        />
      </section>

      <section className="flex justify-around p-10 bg-[#FBEEAC63]">
        <div className="flex flex-col w-1/2 align-center justify-around text-4xl text-[#2D4E75] font-bold m-5">
          <div>Frequently Asked Questions</div>
          <div>
            <AccordionElements elements={faqAccordionData} />
          </div>
        </div>
        <div className="flex w-1/3 text-[#2D4E75] justify-around">
          <ImageCell sourceImage={Serve} altText="Lush lychee dream" />
        </div>
      </section>
    </main>
  );
};

export default page;
