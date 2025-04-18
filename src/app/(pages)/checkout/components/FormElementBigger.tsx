import React from 'react'
import { Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField, } from "@/components/ui/form"
  import { Input } from "@/components/ui/input";
  import { useFormContext } from "react-hook-form";

interface FormElementBiggerProps {
  name: string;
  fieldWidth: number;
}

const FormElementBigger = ({name, fieldWidth}: FormElementBiggerProps) => {
  const {control} = useFormContext();
  return (
    <div className='flex items-center w-[100%]'>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className='w-full'>
            <FormControl>
              <Input
                // placeholder="..."
                {...field}
                className={`h-10 bg-[#FBEEAC] border border-dashed border-orange-300 rounded-full`}
                style={{width: `${fieldWidth}%`}}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}

export default FormElementBigger