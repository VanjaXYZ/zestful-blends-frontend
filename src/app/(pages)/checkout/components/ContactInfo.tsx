"use client";

import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm , useFormContext} from "react-hook-form";
import FormElement from "./FormElement";
import FormElementBigger from "./FormElementBigger";


const ContactInfo = () => {
  const {control} = useFormContext();
  const form = useForm();
  const fieldWidth1 = 100;
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
      <div className="w-[80%] sm:w-[90%] max-sm:w-full bg-white border border-gray-300 rounded-xl p-4 flex flex-col gap-4" style={{boxShadow: "inset 0px 1px 2.5px rgba(0, 0, 0, 0.15)" }}>
        <h2 className="text-[#FCB131] font-bold text-2xl">Contact Info</h2>
        <p>We&apos;ll use this email to send you details and updates about your order.</p>
        <div className="flex items-center gap-4 w-[60%] max-xl:w-full">
          <h4 className="font-semibold">Email: </h4>
          
            <FormElementBigger name="email" fieldWidth={fieldWidth1} />
          
        </div>
        {!loggedIn && 
        <div className="flex flex-col">
          <p>You are currently checking out as a guest.</p>
          <FormField
            name="saveInfo"
            render={({ field }) => (
              <FormItem className="flex gap-2 items-start items-center">
                <FormControl>
                  <input 
                    type="checkbox" 
                    checked={isChecked} 
                    onChange={(e) => {
                      setIsChecked(e.target.checked);
                      field.onChange(e);
                    }}
                    className="mt-1" />
                </FormControl>
                <label className="text-md">
                  Create an account with Zestful Blends
                </label>
              </FormItem>
            )}
          />
        </div>
        }
      </div>
    
  );
};

export default ContactInfo;
