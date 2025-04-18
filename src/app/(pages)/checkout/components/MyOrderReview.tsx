"use client"

import React from 'react'
import WalkingMenIcon from '@/assets/WalkingMenIcon.png'
import ClockIcon from '@/assets/ClockIcon.png'
import HomeIcon from '@/assets/HomeIcon.png'
import EditIcon from '@/assets/EditIcon.png'
import FormElementBigger from './FormElementBigger'
import { FormProvider, useForm } from 'react-hook-form'

const MyOrderReview = () => {

  const form = useForm();

  const tips: string[]=['10%', '12%', '15%', 'customer'];

  const discount = 3;
  const tip = 3;
  const tax = 3;

  interface orderedProduct {
    id: number,
    name: string,
    details: string[],
    price: number
  }

  const orderedProducts: orderedProduct[] = [
    {
      id: 1,
      name: "17'' berry pizza",
      details: ['NO blueberry', 'Extra raspberry'],
      price: 20.23
    },

    {
      id: 2,
      name: "Super Amazing Juice",
      details: [],
      price: 8.80
    },

    {
      id: 3,
      name: "Super Amazing Smooth",
      details: [],
      price: 9.90
    },
  ]

  const subTotal: number = orderedProducts.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className='w-[80%] sm:w-[100%] max-sm:w-full bg-white border border-gray-300 rounded-xl mt-8' style={{boxShadow: "inset 0px 1px 2.5px rgba(0, 0, 0, 0.15)" }}>
      <div className="m-4">
        <h2 className='text-[#FCB131] font-bold text-3xl pb-4'>My order review</h2>

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
            return <div key={orderedProduct.id} className="flex flex-col border-b border-b-gray-300 text-center mb-8">
              <p className="font-bold">{orderedProduct.name}</p>
              {orderedProduct.details.map((detail) => {
                return <p key={`${orderedProduct.id}-${detail}`}>{detail}</p>
              })}
              <p className="ml-auto">${orderedProduct.price}</p>
            </div>
          })}
          <div className='flex justify-between'>
            <p className="font-bold">Sub Total:</p>
            <p>${subTotal}</p>
          </div>
        </div>

        <div className='mt-6 border-b border-t border-b-gray-300 border-t-gray-300'>
          <div className='flex flex-col gap-4 px-6 py-4'>
            <h2 className='text-[#FCB131] font-bold text-2xl'>Promo code</h2>
            <FormProvider {...form}>
              <FormElementBigger name="promo code" fieldWidth={100}/>
            </FormProvider>
          </div>
        </div>

        <div className='flex flex-col gap-4 border-b border-b-gray-300 px-6 py-4'>
          <h2 className='text-[#FCB131] font-bold text-2xl'>Tip?</h2>
          <div className='flex gap-2 justify-between'>
            {tips.map((tip) => 
              <div key={tip}
                   className='flex-1 h-16 bg-[#FBEEAC] flex items-center justify-center border-2 border-[#FCB131] rounded-3xl'
                   >
                {tip}
              </div>
            )}
          </div>
          <p className='ml-auto'>Skip tips</p>
        </div>

        <div className='flex flex-col gap-2 px-6 py-4'>
          <div className='flex justify-between'>
            <h3>Sub total: </h3>
            <p>$ {subTotal}</p>
          </div>
          <div className='flex justify-between'>
            <h3>Discount: </h3>
            <p>-$ {discount.toFixed(2)}</p>
          </div>
          <div className='flex justify-between'>
            <h3>Tip: </h3>
            <p>$ {tip.toFixed(2)}</p>
          </div>
          <div className='flex justify-between'>
            <h3>Tax: </h3>
            <p>$ {tax.toFixed(2)}</p>
          </div>
          <div className='flex justify-between items-center'>
            <h3 className='font-bold text-2xl max-lg:text-xl'>Grand Total</h3>
            <p className='font-bold text-2xl max-lg:text-xl'>$ {(subTotal-discount+tip+tax).toFixed(2)}</p>
          </div>
        </div>

        <div className='px-6 py-8'>
          <button className='bg-[#F8991D] text-white font-bold text-2xl w-full rounded-full py-4'>Place order</button>
        </div>
      </div>
    </div>
  )
}

export default MyOrderReview