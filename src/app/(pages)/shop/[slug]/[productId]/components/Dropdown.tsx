import React, { useState } from 'react'
import { Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField, } from "@/components/ui/form"
  import { useFormContext, Controller } from "react-hook-form";
import { Label } from '@/components/ui/label';
import { pages } from "./Pages";
import { notFound } from "next/navigation";

interface DropdownProps {
  name: string;
  fieldWidth: number;
  range?: number;
  options?: string[];
  title: string;
}

const Dropdown = ({name, fieldWidth, range=10, options, title}: DropdownProps) => {
  const {control} = useFormContext();

  return (
    <div className='flex items-center' /*style={{width: `38.5%`}}*/>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className='w-full'>
            <Label
              htmlFor={name}
            >
            </Label>
            <FormControl>
              <div className='flex items-center justify-centers h-10 border border-gray-400 mt-0 !mt-0'
                   style={{ width: `${fieldWidth}%` }}>
                <select
                  {...field}
                  id={name}
                  className="w-full h-full px-2"
                >
                  <option value="">{title}</option>
                  {options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}

export default Dropdown