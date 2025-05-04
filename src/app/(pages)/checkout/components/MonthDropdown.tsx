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

interface MonthDropdownProps {
  name: string;
  fieldWidth: number;
}

const MonthDropdown = ({name, fieldWidth}: MonthDropdownProps) => {
  const {control} = useFormContext();
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const [selectedMonth, setSelectedMonth] = useState<string>('');

  const handleMonthChange = ((e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(e.target.value)
  })

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