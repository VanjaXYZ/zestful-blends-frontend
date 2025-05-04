"use client";

import React from "react";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import FormElement from "./FormElement";

const ContactInfo = () => {
  const form = useForm();

  return (
    <div className="w-[80%] sm:w-[90%] max-sm:w-full bg-white border border-gray-300 rounded-xl p-4 flex flex-col gap-12 mb-16" style={{boxShadow: "inset 0px 1px 2.5px rgba(0, 0, 0, 0.15)" }}>
      <h2 className="text-[#FCB131] font-bold text-2xl">Contact Info</h2>
      <Form {...form}>
        <div className="flex max-2xl:flex-col gap-16">
          <div className="flex flex-col gap-8">
            <FormElement formElementName="First Name:" control={form.control} name="firstName" />
            <FormElement formElementName="Last Name:" control={form.control} name="lastName" />
          </div>
          <div className="flex flex-col gap-8">
            <FormElement formElementName="Email:" control={form.control} name="email" />
            <FormElement formElementName="Phone:" control={form.control} name="phone" />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default ContactInfo;
