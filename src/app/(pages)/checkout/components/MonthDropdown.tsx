import React, { useEffect, useState } from 'react'
import { Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField, } from "@/components/ui/form"
  import { useFormContext, Controller } from "react-hook-form";
import { Label } from '@/components/ui/label';
import { useCheckoutStore } from '@/app/store/checkoutStore';

interface MonthDropdownProps {
  name: string;
  fieldWidth: number;
}

const MonthDropdown = ({name, fieldWidth}: MonthDropdownProps) => {
  const {control, setValue} = useFormContext();
  const pastMonth = useCheckoutStore((state) => state.pastMonth)
  const setPastMonth = useCheckoutStore((state) => state.setPastMonth)
  const currentYear = useCheckoutStore((state) => state.currentYear)
   const now = new Date();
  const thisMonth = now.getMonth();

  const monthsArray = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const months = currentYear ? monthsArray.slice(thisMonth, monthsArray.length) : monthsArray;

  useEffect(() => {
  if (pastMonth && currentYear) {
    setValue(name, ""); 
  }
}, [pastMonth, currentYear, setValue, name]);

  return (
    <div className='flex items-center' style={{width: `57.5%`}}>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className='w-full' >
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
                  onChange={(e) => {
                    field.onChange(e);
                    const selectedIndex = monthsArray.indexOf(e.target.value);
                    console.log(selectedIndex)
                    setPastMonth((selectedIndex !== -1) && (selectedIndex < thisMonth));
                    // console.log(pastMonth)
                  }}
                >
                  <option value="">Month</option>
                  {months.map((month) => (
                    <option key={month} value={month}>
                      {month}
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

export default MonthDropdown