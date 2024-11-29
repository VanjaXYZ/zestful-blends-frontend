import React from 'react'
import Image1 from "@/assets/Caribbean Bliss Smoothie-1.png";
import Image2 from "@/assets/Crimson Apple Zest-1.png";
import Image3 from '@/assets/mango-juice-splashing.png'
import Image4 from '@/assets/four-juices.png'
import DrinkOptionsProduct from './DrinkOptionsProduct';

const drinks = [
    {
      id: "1",
      imageSrc: Image1,
      productName: "Strawberry Juice",
    },
    {
      id: "2",
      imageSrc: Image2,
      productName: "Tomato Juice",
    },
    {
      id: "3",
      imageSrc: Image3,
      productName: "Mango Juice",
    },
    {
      id: "4",
      imageSrc: Image4,
      productName: "Pomegranate Juice",
    },
    {
      id: "5",
      imageSrc: Image1,
      productName: "Bubble Milk Tea",
    },
    {
      id: "6",
      imageSrc: Image2,
      productName: "Kiwi Juice",
    },
    {
      id: "7",
      imageSrc: Image3,
      productName: "Pomegranate Juice",
    },
    {
      id: "8",
      imageSrc: Image4,
      productName: "Bubble Milk Tea",
    },
    {
      id: "9",
      imageSrc: Image1,
      productName: "Kiwi Juice",
    },
  ];

const DrinkOptions = () => {
  return (
    <section className='bg-[#fdd79d] py-16'>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12'>
            {drinks?.map((drink: any) => (
                <DrinkOptionsProduct 
                    imageSrc={drink?.imageSrc}
                    productName={drink.productName}
                    key={drink.id}
                />
            ))}
        </div>
    </section>
  )
}

export default DrinkOptions

