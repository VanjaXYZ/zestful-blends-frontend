"use client";

import React from "react";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import FormElement from "./FormElement";
import FormElementBigger from "./FormElementBigger";

const ContactInfo = () => {
  const form = useForm();
  const fieldWidth1 = 100;

  return (
    <div className="w-[80%] sm:w-[90%] max-sm:w-full bg-white border border-gray-300 rounded-xl p-4 flex flex-col gap-12 mb-16" style={{boxShadow: "inset 0px 1px 2.5px rgba(0, 0, 0, 0.15)" }}>
      <h2 className="text-[#FCB131] font-bold text-2xl">Contact Info</h2>
      <Form {...form}>
        {/* <div className="flex max-2xl:flex-col gap-16">
          <div className="flex flex-col gap-8">
            <FormElement formElementName="First Name:" control={form.control} name="firstName" />
            <FormElement formElementName="Last Name:" control={form.control} name="lastName" />
          </div>
          <div className="flex flex-col gap-8">
            <FormElement formElementName="Email:" control={form.control} name="email" />
            <FormElement formElementName="Phone:" control={form.control} name="phone" />
          </div>
        </div> */}
        <div className={`flex gap-[5%] max-lg:flex-col max-sm:w-full max-lg:gap-4`}>
          <div className={`flex flex-col flex-1 gap-4 max-sm:w-full`}>
            <div className='w-[100%]'>
              <h4>First Name</h4>
              <FormElementBigger name="first name" fieldWidth={fieldWidth1} />
              
            </div>
            <div>
              <h4>Last Name</h4>
              <FormElementBigger name="last name" fieldWidth={fieldWidth1} />
            </div>
          </div>
          <div className={`flex flex-col flex-1 gap-4 max-sm:w-full`}>
            <div>
              <h4>Email</h4>
              <FormElementBigger name="email" fieldWidth={fieldWidth1} />
            </div>
            <div>
              <h4>Phone</h4>
              <FormElementBigger name="phone" fieldWidth={fieldWidth1} />
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default ContactInfo;
