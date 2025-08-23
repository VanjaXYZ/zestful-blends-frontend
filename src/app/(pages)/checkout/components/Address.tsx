"use client";

import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm, useFormContext } from "react-hook-form";
import FormElement from "./FormElement";
import FormElementBigger from "./FormElementBigger";
import { useAddressContext } from "../context/AddressContext";
import Dropdown from "./Dropdown";
import { useCheckoutStore } from "@/app/store/checkoutStore";
import FormElementBiggerPhone from "./FormElementBiggerPhone";

const Address = ({title, instruction, addressType} : {title : string, instruction : string, addressType: string}) => {
  const {control} = useFormContext()
  const fieldWidth1 = 100;
  const {sameAddressIsChecked, setSameAddressIsChecked} = useAddressContext()
  const setDeliveryFieldState = useCheckoutStore((state) => state.setDeliveryFieldState)
  const setBillingFieldState = useCheckoutStore((state) => state.setBillingFieldState)

  return (
    <div className="w-[80%] sm:w-[90%] max-sm:w-full bg-white border border-gray-300 rounded-xl p-4 flex flex-col gap-4" style={{boxShadow: "inset 0px 1px 2.5px rgba(0, 0, 0, 0.15)" }}>
      <h2 className="text-[#FCB131] font-bold text-2xl">{title}</h2>
      <p>{instruction}</p>
      
        <div className={`flex flex-col max-sm:w-full gap-4`}>

          <div className="flex max-xl:flex-col gap-4">
            <div className='w-[100%] flex-1'>
              <h4>First Name</h4>
              <FormElementBigger name={`${addressType}.firstName`} fieldWidth={fieldWidth1} />
            </div>
            <div className='w-[100%] flex-1'>
              <h4>Last Name</h4>
              <FormElementBigger name={`${addressType}.lastName`} fieldWidth={fieldWidth1} />
            </div>
          </div>
          <div className="flex max-xl:flex-col gap-4">
            {/* <div className='w-[100%] flex-1'>
              <h4>Country</h4>
              <FormElementBigger name="country" fieldWidth={fieldWidth1} />
            </div> */}
            <div className='w-[100%] flex-1'>
              <h4>Country</h4>
              <Dropdown name={`${addressType}.country`} fieldWidth={fieldWidth1} title="choose your country" options={["Canada"]}/>
            </div>
            {/* <div className='w-[100%] flex-1'>
              <h4>State / County</h4>
              <FormElementBigger name="state / county" fieldWidth={fieldWidth1} />
            </div> */}
            <div className='w-[100%] flex-1'>
              <h4>State / County</h4>
              <Dropdown name={`${addressType}.stateCounty`} fieldWidth={fieldWidth1} title="choose your state/county" options={["Alberta", "British Columbia", "Manitoba", "New Brunswik", "Newfoundland and Labrador", "Northwest Territories", "New Scotia", "Nunavut", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan", "Yukon Territory"]} />
            </div>
          </div>
          <div className="flex max-xl:flex-col gap-4">
            <div className='w-[100%] flex-1'>
              <h4>Street Address</h4>
              <FormElementBigger name={`${addressType}.address`} fieldWidth={fieldWidth1} /> 
            </div>
            <div className='w-[100%] flex-1'>
              <h4>Town / City</h4>
              <FormElementBigger name={`${addressType}.city`} fieldWidth={fieldWidth1} />
            </div>
          </div>
          <div className="flex max-xl:flex-col gap-4">
            <div className='w-[100%] flex-1'>
              <h4>Zip / postal code</h4>
              <FormElementBigger name={`${addressType}.zipPostalCode`} fieldWidth={fieldWidth1} />
            </div>
            <div className='w-[100%] flex-1'>
              <h4>Apartment, suite, unit, etc. {`(optional)`}</h4>
              <FormElementBigger name={`${addressType}.apartment`} fieldWidth={fieldWidth1} />
            </div>
          </div>
          <div className="flex max-xl:flex-col gap-4">
            <div className='w-[100%] flex-1'>
              <h4>Company name {`(optional)`}</h4>
              <FormElementBigger name={`${addressType}.companyName`} fieldWidth={fieldWidth1} /> 
            </div>
            <div className='w-[100%] flex-1'>
              <h4>Phone {`(optional)`}</h4>
              <FormElementBiggerPhone name={`${addressType}.phone`} fieldWidth={fieldWidth1} />
            </div>
          </div>

          {/* <div className={`flex flex-col flex-1 gap-4 max-sm:w-full`}>
            <div className='w-[100%]'>
              <h4>First Name</h4>
              <FormElementBigger name="first name" fieldWidth={fieldWidth1} />
            </div>
            <div className='w-[100%]'>
              <h4>Country</h4>
              <FormElementBigger name="country" fieldWidth={fieldWidth1} />
            </div>
            <div className='w-[100%]'>
              <h4>Street Address</h4>
              <FormElementBigger name="address" fieldWidth={fieldWidth1} /> 
            </div>
            <div>
              <h4>Zip / postal code</h4>
              <FormElementBigger name="zip / postal code" fieldWidth={fieldWidth1} />
            </div>
            <div className='w-[100%]'>
              <h4>Company name {`(optional)`}</h4>
              <FormElementBigger name="company name" fieldWidth={fieldWidth1} /> 
            </div>
          </div>
          <div className={`flex flex-col flex-1 gap-4 max-sm:w-full`}>
            <div>
              <h4>Last Name</h4>
              <FormElementBigger name="last name" fieldWidth={fieldWidth1} />
            </div>
            <div>
              <h4>State / County</h4>
              <FormElementBigger name="state / county" fieldWidth={fieldWidth1} />
            </div>
            <div>
              <h4>Town / City</h4>
              <FormElementBigger name="city" fieldWidth={fieldWidth1} />
            </div>
            <div>
              <h4>Apartment, suite, unit, etc. {`(optional)`}</h4>
              <FormElementBigger name="Apartment, suite, unit, etc." fieldWidth={fieldWidth1} />
            </div>
            <div>
              <h4>Phone {`(optional)`}</h4>
              <FormElementBigger name="phone" fieldWidth={fieldWidth1} />
            </div>
          </div> */}
        </div>
        {title === "Delivery Address" && 
          <FormField
            name="saveInfo"
            render={({ field }) => (
              <FormItem className="flex gap-2 items-start items-center">
                <FormControl>
                  <input 
                    type="checkbox" 
                    checked={sameAddressIsChecked} 
                    onChange={(e) => {
                      setSameAddressIsChecked(e.target.checked);
                      field.onChange(e.target.checked);
                      e.target.checked ? setBillingFieldState("Optional") : setBillingFieldState("Required");
                    }}
                    className="mt-1" />
                </FormControl>
                <label className="text-md">
                  Use same address for billing
                </label>
              </FormItem>
            )}
          />}
    </div>
  );
};

export default Address;
