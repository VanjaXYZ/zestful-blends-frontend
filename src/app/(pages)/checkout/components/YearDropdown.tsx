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

interface YearDropdownProps {
  name: string;
  fieldWidth: number;
  range?: number;
}

const YearDropdown = ({name, fieldWidth, range=10}: YearDropdownProps) => {
  const {control} = useFormContext();

  const currentYear = new Date().getFullYear();
  const years = Array.from({length: range + 1}, (_, index) => currentYear + index );

  return (
    <div className='flex items-center' style={{width: `38.5%`}}>
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
              <div className='flex items-center justify-center h-10 bg-[#FBEEAC] px-2 border border-dashed border-orange-300 rounded-full mt-0 !mt-0'
                   style={{ width: `${fieldWidth}%` }}>
                <select
                  {...field}
                  id={name}
                  className="bg-[#FBEEAC] w-full"
                >
                  <option value="">Year</option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
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

export default YearDropdown