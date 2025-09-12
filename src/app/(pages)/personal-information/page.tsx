"use client"

import React, { useEffect } from 'react'
import styles from '../checkout/Checkout.module.css'
import { useForm, FormProvider } from "react-hook-form";
import SampleProfilePicture from "./assets/SampleProfilePicture.png"
import MessageIcon from './assets/MessageIcon.png'
import PhoneIcon from './assets/PhoneIcon.png'
import ToggleSwitch from './components/ToggleSwitch';
import { useState } from 'react';
import FormElementBiggerPI from './components/FormElementBiggerPI';
import { Input } from "@/components/ui/input";
import {z} from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import Dropdown from './components/DropdownPI';
import FormElementBiggerPhone from './components/PhoneInput';

const Page = () => {

  const [fullName, setFullName] = useState<string>('John Smiths');
  const [streetAddress, setStreetAddress] = useState<string>('130-139 Keefer St');
  const [townCity, setTownCity] = useState<string>('Vancouver');
  const [zipCode, setZipCode] = useState<string>('V6A 1X3');
  const [country, setCountry] = useState<string>('Canada');
  const [apartment, setApartment] = useState<string>('');
  const [email, setEmail] = useState<string>('john.smiths@gmail.com')
  // const [beforeAt, afterAt]: string[] = email.split("@");
  // const maskedEmail: string = "x".repeat(5) + "@" + afterAt;
  const [phoneNumber, setPhoneNumber] = useState<string>("123456789")

  const [toggleState, setToggleState] = useState<"A" | "B" | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [editEmailMode, setEditEmailMode] = useState(false);
  const [editPhoneMode, setEditPhoneMode] = useState(false);
  const defaultAvatar = SampleProfilePicture.src;
  const [avatar, setAvatar] = useState<string>(defaultAvatar);
  const [fileName, setFileName] = useState("No file chosen");

  const schema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters")
      .refine(val => val.includes(" "), {
        message: "Please enter both first and last name separated by a space",
      }),
    "street address": z.string().min(4, "Street must be at least 4 characters")
      .refine(val => val.includes(" "), {
        message: "Please enter both the street name and the building nuber separated by a space",
      }),
    "town / city":  z.string().min(2, "Town / city must contain at least 2 charakters"),
    "zip code": z.string().regex(/^[A-Za-z]\d[A-Za-z][ ]?\d[A-Za-z]\d$/, "Postal code must be in the format A1A 1A1"),
    apartment: z.string().optional(),
    country: z.string().refine(val => (val === "Canada" || val === "USA"),
      { message: "Choose a country from a list, please."}),
    email: z.string().email("Invalid email"),
    phone: z.string().optional(),
  });

  const form = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      name: fullName,
      "street address": streetAddress,
      "town / city": townCity,
      "zip code": zipCode,
      apartment: apartment,
      country: country,
      email: email,
      phone: phoneNumber,
    }
  });

  useEffect (() => {
    console.log("ToggleState: ", toggleState, "- ", toggleState === "A" ? "Yes, email me!" : "No, I don't want any deals");
  },[toggleState])


  return (
    <main>
      <div className={`absolute bg-[#ED7905] w-full justify-center top-[145px] h-36 max-lg:h-16 z-[100] flex flex-col items-center gap-4`}>
        <h1 className="text-4xl text-white font-bold">User Profile</h1>
      </div>
      <div className={`w-full absolute h-32 max-sm:h-32 ${styles.waveOrange} z-150 bg-[#ED7905]`}></div>
      
      <FormProvider {...form}>
        <section className={`flex flex-col items-center max-sm:px-8 px-[5%] pb-28 max-lg:pb-16 max-sm:pb-4 bg-primary-yellow ${styles.bottomWave}`}>
          <h1 className="text-[#ED7905] font-bold text-4xl pt-16 max-sm:pt-4 pb-16 max-sm:pb-4 max-sm:text-center">Personal Information</h1>
          <div className='flex flex-col gap-16 bg-white w-[80%] max-sm:w-[100%] py-[5%] px-[12.5%] border-[#FCB131] border-4 rounded-3xl mb-16'>
            
              <div className='flex justify-between items-center max-lg:flex-col max-lg:gap-2'>
                <div className="flex gap-8 items-center max-lg:flex-col max-lg:gap-2 w-[60%]">
                  <div className="flex flex-col gap-2 w-[40%]">
                    <img alt="profile picture" src={avatar} className='w-36'></img>
                    {editMode && 
                    // <input type="file" accept="image/*" onChange={handleFileChange} />
                    <div className="flex flex-col gap-2">
                      <Input
                        id="picture"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            setAvatar(URL.createObjectURL(file)); // zmiana avatara
                            // pokazanie nazwy pliku zamiast domyślnego tekstu
                            setFileName(file.name);
                          } else {
                            setFileName("No file chosen");
                          }
                        }}
                      />
                      <label
                        htmlFor="picture"
                        className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded"
                      >
                        Choose File
                      </label>
                      <span className="text-gray-600">{fileName}</span>
                    </div>
                    }
                  </div>
                  <div className="flex flex-col max-lg:text-center w-full">
                    {editMode ? 
                    <div className='w-[100%]'>
                      <h4>Full Name</h4>
                      <FormElementBiggerPI name="name"/> 
                    </div> :
                    <h2 className='text-4xl font-bold'>{fullName}</h2>}
                  </div>
                </div>
                <button className='bg-[#FCB131] text-white font-bold px-8 py-4 rounded-2xl'
                onClick={async () => {
                  if (editMode === false) {
                    setEditMode(true);
                  }
                  const isValid = await form.trigger(["name", "street address", "town / city", "zip code", "apartment", "country"]);
                  if (isValid)
                    {
                      setFullName(form.getValues("name"));
                      setStreetAddress(form.getValues("street address"));
                      setTownCity(form.getValues("town / city"));
                      setZipCode(form.getValues("zip code"));
                      setApartment(form.getValues("apartment"));
                      setCountry(form.getValues("country"));
                      setEmail(form.getValues("email"));
                      setPhoneNumber(form.getValues("phone"));

                      if (editMode === true) {
                        setEditMode(false);
                        console.log(form.getValues())
                      }
                    }
                  }}>
                  {editMode ? 'Save' : 'Edit'}
                </button>
              </div>
              {editMode ?
              <div className='w-[100%] flex flex-col gap-6'>
                <div>
                  <h4>Street Address</h4>
                  <FormElementBiggerPI name="street address" /> 
                </div>
                <div>
                  <h4>Town / City</h4>
                  <FormElementBiggerPI name="town / city" /> 
                </div>
                <div>
                  <h4>Zip / Postal Code</h4>
                  <FormElementBiggerPI name="zip code" /> 
                </div>
                <div>
                  <h4>Apartment, suite, unit, etc. (optional)</h4>
                  <FormElementBiggerPI name="apartment" /> 
                </div>
                <div>
                  <h4>Country</h4>
                  <Dropdown name="country" fieldWidth={100} title="choose country" options={["Canada", "USA"]} /> 
                </div>
              </div> :
              <div>
                <div>
                  <span className='font-bold'>Address: </span>
                  <div>{streetAddress}</div>
                  <div>{townCity}</div>
                  <div>{zipCode}</div>
                  {apartment !== '' && <div>{apartment}</div>}
                  <div>{country}</div>
                </div>
              </div>}
              
            
            <div className='flex justify-between items-center'>
              {editMode 
              ? 
              <div>
                  <h4>Email</h4>
                  <FormElementBiggerPI name="email" /> 
              </div>
              :
              <div className='flex flex-col gap-2'>
                <h3 className='font-bold text-xl'>My Email Address</h3>
                <div className='flex gap-2 items-center'>
                  <img alt="message icon" src={MessageIcon.src} className="w-16"></img>
                  <div className="flex flex-col gap-2">
                    <p className='font-bold'>{email}</p>
                    <p className='text-gray-600'>Default Email</p>
                  </div>
                </div>
              </div>
              }
            </div>
            
            <div className='flex justify-between items-center'>
            {editMode 
            ?
            <div>
                <h4>Phone number</h4>
                <FormElementBiggerPhone name="phone" fieldWidth={100}/> 
            </div>
            :
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
            }
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
      </FormProvider>
    </main>
  )
}

export default Page