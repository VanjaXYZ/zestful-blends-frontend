import Breadcrumbs from "@/app/custom_components/shared/Breadcrumbs";
import React from "react";
import AccordionElements from "./components/AccordionElements";
import Image from "next/image";
import FourJuices from "@/assets/four-juices.png";
import YellowJuice from "@/assets/Caribbean Bliss Smoothie-1.png";
import SendQuestion from "./components/SendQuestion";

export type AccordionProps = {
  id: string;
  header: string;
  text: string;
};

const accordionData: AccordionProps[] = [
  {
    id: "1",
    header:
      "What ingredients do you use in your juices, and how do you guarantee freshness?",
    text: "Our juices are made from 100% natural ingredients—fruits, vegetables, and superfoods, with no added sugars or preservatives. We prepare each juice fresh to order to ensure maximum freshness and nutrient retention.",
  },
  {
    id: "2",
    header: "How are the juices packaged, and how long do they last?",
    text: "We package our juices in eco-friendly, recyclable bottles that maintain freshness. When stored in the refrigerator, our cold-pressed juices can last up to 3 days. For the best taste and quality, we recommend consuming them as soon as possible.",
  },
  {
    id: "3",
    header: "Do you offer delivery, and how long does shipping take?",
    text: "Yes, we offer delivery nationwide. Orders placed before 12 PM are typically delivered the next day. Our delivery is specially tailored to keep juices fresh until they reach your doorstep.",
  },
  {
    id: "4",
    header: "Do you have a monthly subscription option?",
    text: "Yes! We offer monthly subscriptions with a discount. Fresh juices are delivered weekly to your door according to your chosen plan, so you can always have healthy, delicious juices on hand.",
  },
  {
    id: "5",
    header: "Which juice would you recommend to start a body detox?",
    text: 'Our recommended juice for detox is the "Green Detox" made with kale, spinach, cucumber, lemon, and ginger. It helps cleanse the body, boosts immunity, and provides natural energy for the entire day.',
  },
];
const accordionHealthData: AccordionProps[] = [
  {
    id: "1",
    header: "What health benefits can I expect from drinking your juices?",
    text: "Our juices are packed with vitamins, minerals, and antioxidants that support overall health, improve digestion, boost immunity, and provide natural energy. Regular consumption of fresh, cold-pressed juices can aid in detoxification and improve skin health.",
  },
  {
    id: "2",
    header: "Are your juices suitable for weight management?",
    text: "Yes! Our juices are made from nutrient-dense ingredients with no added sugars, making them an excellent choice for those looking to maintain or lose weight. They can be a nutritious addition to a balanced diet, and some of our recipes are specifically designed to support metabolism.",
  },
  {
    id: "3",
    header: "How does cold-pressing preserve the nutrients in your juices?",
    text: "Cold-pressing extracts juice without heat, preserving the maximum amount of vitamins, minerals, and enzymes. This method maintains more of the nutritional value compared to other juicing techniques, making it ideal for those looking for a health boost in every sip.",
  },

  {
    id: "4",
    header: "Which juice is best for boosting immunity and energy?",
    text: 'For immune support and an energy boost, we recommend our "Citrus Immunity" juice, which includes orange, lemon, ginger, and turmeric. This blend is rich in vitamin C and anti-inflammatory compounds, which strengthen the immune system and provide sustained, natural energy.',
  },
];

const page = () => {
  return (
    <main className="">
      <Breadcrumbs currentPageName="FAQ" />
      <section className="mt-24 p-24 bg-cream-yellow">
        <div className="grid grid-cols-2 place-items-center overflow-hidden gap-4">
          <div className="flex flex-col gap-4 w-full">
            <h2 className="text-4xl text-crimson-red font-bold">
              Freaquently Asked Questions
            </h2>
            <AccordionElements elements={accordionData} />
          </div>
          <Image
            src={FourJuices}
            width={320}
            height={320}
            alt="Zestful Blends Four Juices"
            className="rounded-xl  w-[325px] h-[475px] object-cover"
          />
        </div>
      </section>
      <section className="p-24 bg-primary-dark-olive">
        <div className="grid grid-cols-2 place-items-center overflow-hidden gap-4">
          <Image
            src={YellowJuice}
            width={320}
            height={320}
            alt="Zestful Blends Four Juices"
            className="rounded-xl w-[325px] h-[475px] object-cover"
          />
          <div className="flex flex-col gap-4 w-full">
            <h2 className="text-4xl text-white font-bold">
              Help Keep Your Health On Track
            </h2>
            <AccordionElements elements={accordionHealthData} />
          </div>
        </div>
      </section>
      <section className="p-24 bg-primary-darkish-orange">
        <SendQuestion />
      </section>
    </main>
  );
};

export default page;
