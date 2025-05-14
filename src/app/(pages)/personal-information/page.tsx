"use client"

import React from 'react'
import styles from '../checkout/Checkout.module.css'
import { useForm, FormProvider } from "react-hook-form";
import SampleProfilePicture from "./assets/SampleProfilePicture.png"
import MessageIcon from './assets/MessageIcon.png'
import PhoneIcon from './assets/PhoneIcon.png'
import ToggleSwitch from './components/ToggleSwitch';
import { useState } from 'react';
import FormElementBiggerPI from './components/FormElementBiggerPI';

const Page = () => {

  const form = useForm();

  const fullName: string = 'John Smiths';
  const email: string = 'john.smiths@gmail.com';
  const [beforeAt, afterAt]: string[] = email.split("@");
  const maskedEmail: string = "x".repeat(5) + "@" + afterAt;
  const phoneNumber: string = "123456789";

  const [toggleState, setToggleState] = useState<"A" | "B" | null>(null);

  return (
    <main>
      <div className={`absolute bg-[#ED7905] w-full justify-center top-[145px] h-36 max-lg:h-16 z-[100] flex flex-col items-center gap-4`}>
        <h1 className="text-4xl text-white font-bold">User Profile</h1>
      </div>
      <div className={`w-full absolute h-32 max-sm:h-32 ${styles.waveOrange} z-150 bg-[#ED7905]`}></div>
      
      <section className={`flex flex-col items-center max-sm:px-8 px-[5%] pb-28 max-lg:pb-16 max-sm:pb-4 bg-[#FBEEAC] ${styles.bottomWave}`}>
        <h1 className="text-[#ED7905] font-bold text-4xl pt-16 max-sm:pt-4 pb-16 max-sm:pb-4 max-sm:text-center">Personal Information</h1>
        <div className='flex flex-col gap-16 bg-white w-[80%] max-sm:w-[100%] py-[5%] px-[12.5%] border-[#FCB131] border-4 rounded-3xl mb-16'>
          <div className='flex justify-between items-center max-lg:flex-col max-lg:gap-2'>
            <div className="flex gap-8 items-center max-lg:flex-col max-lg:gap-2">
              <img alt="profile picture" src={SampleProfilePicture.src} className='w-36'></img>
              <div className="flex flex-col max-lg:text-center">
                <h2 className='text-4xl font-bold'>{fullName}</h2>
                <p className='text-xl text-gray-500'>{maskedEmail}</p>
              </div>
            </div>
            <button className='bg-[#FCB131] text-white font-bold px-8 py-4 rounded-2xl'>Edit</button>
          </div>

          <FormProvider {...form}>
            <div className='w-[100%]'>
              <h4>Full Name</h4>
              <FormElementBiggerPI name="name"/> 
            </div>

            <div className='w-[100%]'>
              <h4>Zip Code</h4>
              <FormElementBiggerPI name="zip code" /> 
            </div>
          </FormProvider>

          <div className='flex flex-col gap-2'>
            <h3 className='font-bold text-xl'>My Email Address</h3>
            <div className='flex gap-2 items-center'>
              <img alt="message icon" src={MessageIcon.src} className="w-16"></img>
              <div className="flex flex-col gap-2">
                <p className='font-bold'>{maskedEmail}</p>
                <p className='text-gray-600'>Default Email</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <h3 className='font-bold text-xl'>My Phone Number</h3>
            <div className='flex gap-2 items-center'>
              <div className='w-16 h-16 rounded-full bg-[#FBEEAC] flex justify-center items-center'>
                <img alt="phone icon" src={PhoneIcon.src} className='w-12'></img>
              </div>
              <div className="flex flex-col gap-2">
                <p className='font-bold'>{phoneNumber}</p>
                <p className='text-gray-600'>Default phone number</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <h4 className='font-bold text-xl'>Would you like to receive offers, promotions and updates on our activities?</h4>
            
            <div className='flex gap-2'>
              <ToggleSwitch
                enabled={toggleState === "A"}
                onToggle={() => setToggleState("A")}
              />
              <p>Yes, email me!</p>
            </div>

            <div className='flex gap-2'>
              <ToggleSwitch
                enabled={toggleState === "B"}
                onToggle={() => setToggleState("B")}
              />
              <p>No, I don&rsquo;t want any deals.</p>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}

export default Page