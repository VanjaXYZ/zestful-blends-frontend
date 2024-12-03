import React from 'react'
import DrinkName from './DrinkName'

const items = [
    {
        id: "1",
        productName: "Fresh Juice"
    },
    {
        id: "2",
        productName: "Ice Cream Juice"
    },
    {
        id: "3",
        productName: "Healthy Drinks"
    },
    {
        id: "4",
        productName: "Party Drinks"
    },
    {
        id: "5",
        productName: "Milkshakes"
    }
]

const DrinkList = () => {
  return (
    <section className='bg-[#fdd79d] py-8 flex flex-col'>
        <h2 className='text-2xl text-center lg:text-4xl text-crimson-red font-bold py-16'>
            Items Collection
        </h2>
        <div className='grid md:grid-flow-col-dense'>
            {items?.map((item: any) => (
                <DrinkName 
                    productName={item.productName}
                    key={item.id}
                />
            ))}
        </div>
    </section>
  )
}

export default DrinkList
