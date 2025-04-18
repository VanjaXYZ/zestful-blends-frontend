"use client"

import React, { useEffect, useState } from 'react'
import { Form } from 'react-hook-form'
import { FormProvider, useForm } from "react-hook-form";
import FormElementBigger from './FormElementBigger';
import CheckboxFormElementBigger from './CheckboxFormElementBigger';
import MonthDropdown from './MonthDropdown';
import YearDropdown from './YearDropdown';

const PaymentMethod = () => {

  const form = useForm();
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
      <h3 className='font-bold pb-6'>Billing Address:</h3>
      <FormProvider {...form}>
        <div className={`flex gap-[5%] max-lg:flex-col max-sm:w-full max-lg:gap-4`}>
          <div className={`flex flex-col flex-1 gap-4 max-sm:w-full`}>
            <div className='w-[100%]'>
              <h4>Address</h4>
              <FormElementBigger name="address" fieldWidth={fieldWidth1} />
              
            </div>
            <div>
              <h4>City</h4>
              <FormElementBigger name="city" fieldWidth={fieldWidth1} />
            </div>
          </div>
          <div className={`flex flex-col flex-1 gap-4 max-sm:w-full`}>
            <div>
              <h4>State</h4>
              <FormElementBigger name="state" fieldWidth={fieldWidth1} />
            </div>
            <div>
              <h4>Zip/ postal code</h4>
              <FormElementBigger name="zip/postal code" fieldWidth={fieldWidth1} />
            </div>
          </div>
        </div>
      
        <h3 className='font-bold pt-12 pb-6'>Payment Method:</h3>
        <div className='flex flex-col gap-4'>
          <CheckboxFormElementBigger name="payment method" fieldWidth={fieldWidth1} />
          <div className='w-[100%]'>
            <h4>Card Number</h4>
            <FormElementBigger name="card number" fieldWidth={fieldWidth1} />
          </div>

          <div className={`flex gap-[5%] max-lg:flex-col max-lg:gap-4 sm:items-center`}>
            <div className={`flex flex-col flex-1 max-lg:w-full`}>
              <h4>Expiration date</h4>
              <div className='w-full flex justify-center items-center' style={{gap: `${gap2}%`}}>
                <MonthDropdown name="month" fieldWidth={100} />
                <YearDropdown name="year" fieldWidth={100} />
              </div>
            </div>
            <div className={`flex flex-col flex-1 max-lg:w-full`}>
              <h4>Security code</h4>
              <FormElementBigger name="security code" fieldWidth={fieldWidth1} />
            </div>
          </div>
        </div>
      </FormProvider>
    </div>
  )
}

export default PaymentMethod