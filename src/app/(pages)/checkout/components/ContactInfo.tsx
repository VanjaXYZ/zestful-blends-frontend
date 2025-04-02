"use client";

import React from "react";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import FormElement from "./FormElement";

const ContactInfo = () => {
  const form = useForm();

  return (
    <div className="border border-grey-300 p-4 flex flex-col gap-4">
      <p>Contact Info</p>
      <Form {...form}>
        <div className="flex gap-8">
          <div className="flex flex-col gap-2">
            <FormElement formElementName="First Name:" control={form.control} name="firstName" />
            <FormElement formElementName="Last Name:" control={form.control} name="lastName" />
          </div>
          <div className="flex flex-col gap-2">
            <FormElement formElementName="Email:" control={form.control} name="email" />
            <FormElement formElementName="Phone:" control={form.control} name="phone" />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default ContactInfo;
