import React from 'react'
import WalkingMenIcon from '@/assets/WalkingMenIcon.png'
import ClockIcon from '@/assets/ClockIcon.png'
import HomeIcon from '@/assets/HomeIcon.png'
import EditIcon from '@/assets/EditIcon.png'

const MyOrderReview = () => {

  interface orderedProduct {
    name: string,
    details: string[],
    price: number
  }

  const orderedProducts: orderedProduct[] = [
    {
      name: "17'' berry pizza",
      details: ['NO blueberry', 'Extra raspberry'],
      price: 20.23
    },

    {
      name: "Super Amazing Juice",
      details: [],
      price: 8.80
    },

    {
      name: "Super Amazing Smooth",
      details: [],
      price: 9.90
    },
  ]

  const subTotal: number = orderedProducts.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className='w-[80%] bg-white border border-gray-300 rounded-xl mt-8' style={{boxShadow: "inset 0px 1px 2.5px rgba(0, 0, 0, 0.15)" }}>
      <div className="m-4">
        <h2 className='text-[#FCB131] font-bold text-2xl pb-4'>My order review</h2>

        <div className="border-2 border-[#FCB131] rounded-3xl flex flex-col px-8 py-4 gap-2">
          <div className='flex items-center gap-2'>
            <img alt="walking men icon" src={WalkingMenIcon.src} className="w-8"></img>
            <div>
              Your Choose: <p className='text-[#FCB131] inline'>Pick-up</p>
            </div>
          </div>
          <div className='flex items-center gap-2'>
          <img alt="clock icon" src={ClockIcon.src} className="w-8"></img>
            <div>
              Your Choose: <p className='text-[#FCB131] inline'>ASAP</p>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <img alt="home icon" src={HomeIcon.src} className="w-8"></img>
            <p>Pick- Up Address: 139 Keefer St #130,<br></br> Vancouver, BC V6A 1X3, Canada</p>
          </div>
          <img alt="edit icon" src={EditIcon.src} className="ml-auto w-8"></img>
        </div>

        <div className='border-2 border-[#FCB131] border-dashed rounded-3xl mt-4 p-8 flex flex-col'>
          {orderedProducts.map((orderedProduct) => {
            return <div className="flex flex-col border-b border-b-gray-400 text-center mb-8">
              <p className="font-bold">{orderedProduct.name}</p>
              {orderedProduct.details.map((detail) => {
                return <p>{detail}</p>
              })}
              <p className="ml-auto">${orderedProduct.price}</p>
            </div>
          })}
          <div className='flex justify-between'>
            <p className="font-bold">Sub Total:</p>
            <p>${subTotal}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyOrderReview