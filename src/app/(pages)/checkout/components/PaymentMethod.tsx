"use client"

import React, { useEffect, useState } from 'react'
import { Form, useFormContext } from 'react-hook-form'
import { FormProvider, useForm } from "react-hook-form";
import FormElementBigger from './FormElementBigger';
import CheckboxFormElementBigger from './CheckboxFormElementBigger';
import MonthDropdown from './MonthDropdown';
import YearDropdown from './YearDropdown';
import CardFormElement from './CardFormElment';

const PaymentMethod = () => {

  const {control} = useFormContext()
  const gap1 = 5;
  const gap2 = 5;
  const fieldWidth1 = 100;

  // const [isMobile, setIsMobile] = useState(false)

  // useEffect(() => {
  //   setIsMobile(window.innerWidth < 640)
  // },[])

  // w-[${100 / 2 - gap1 / 2}%]

  return (
    <div className='w-[90%] max-sm:w-full bg-white border border-gray-300 rounded-xl p-4' style={{boxShadow: "inset 0px 1px 2.5px rgba(0, 0, 0, 0.15)" }}>
      <h2 className='text-[#FCB131] font-bold text-2xl pb-12'>Payment Method</h2>
      <div className='flex flex-col gap-4'>
        <CheckboxFormElementBigger name="paymentMethod" fieldWidth={fieldWidth1} />
        <div className='w-[100%]'>
          <h4>Card Number</h4>
          <CardFormElement name="cardNumber" fieldWidth={fieldWidth1} />
        </div>

        <div className={`flex gap-[5%] max-lg:flex-col max-lg:gap-4 sm:items-center`}>
          <div className={`flex flex-col flex-1 max-lg:w-full`}>
            <h4>Expiration date</h4>
            <div className='w-full flex justify-center items-center' style={{gap: `${gap2}%`}}>
              <MonthDropdown name="month" fieldWidth={100}
               />
              <YearDropdown name="year" fieldWidth={100} />
            </div>
          </div>
          <div className={`flex flex-col flex-1 max-lg:w-full`}>
            <h4>Security code</h4>
            <FormElementBigger name="securityCode" fieldWidth={fieldWidth1} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentMethod