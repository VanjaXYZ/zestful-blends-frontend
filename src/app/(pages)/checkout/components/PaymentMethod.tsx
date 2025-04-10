"use client"

import React from 'react'
import { Form } from 'react-hook-form'
import { FormProvider, useForm } from "react-hook-form";
import FormElementBigger from './FormElementBigger';
import CheckboxFormElementBigger from './CheckboxFormElementBigger';
import MonthDropdown from './MonthDropdown';
import YearDropdown from './YearDropdown';

const PaymentMethod = () => {

  const form = useForm();
  const gap1 = 2;
  const gap2 = 1;
  const fieldWidth1 = 16;

  return (
    <div className='w-[80%] bg-white border border-gray-300 rounded-xl p-4' style={{boxShadow: "inset 0px 1px 2.5px rgba(0, 0, 0, 0.15)" }}>
      <h2 className='text-[#FCB131] font-bold text-2xl pb-12'>Payment Method</h2>
      <h3 className='font-bold pb-6'>Billing Address:</h3>
      <FormProvider {...form}>
        <div className='flex' style={{gap: `${gap1}rem`}}>
          <div className="flex flex-col gap-4">
            <div>
              <h4>Address</h4>
              <FormElementBigger name="address" fieldWidth={fieldWidth1} />
            </div>
            <div>
              <h4>City</h4>
              <FormElementBigger name="city" fieldWidth={fieldWidth1} />
            </div>
          </div>
          <div className="flex flex-col gap-4">
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
          <CheckboxFormElementBigger name="payment method" fieldWidth={2*fieldWidth1 + gap1} />
          <div>
            <h4>Card Number</h4>
            <FormElementBigger name="card number" fieldWidth={2*fieldWidth1 + gap1} />
          </div>

          <div className='flex items-center' style={{gap: `${gap1}rem`}}>
            <div className='flex flex-col'>
              <h4>Expiration date</h4>
              <div className='flex justify-center items-center' style={{gap: `${gap2}rem`}}>
                <MonthDropdown name="month" fieldWidth={0.6*(fieldWidth1 - gap2)} />
                <YearDropdown name="year" fieldWidth={0.4*(fieldWidth1 - gap2)} />
              </div>
            </div>
            <div className='flex flex-col'>
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