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
}

const FormElementBiggerPI = ({name}: FormElementBiggerProps) => {
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
                className={`h-10 w-[75%] max-lg:w-[100%] bg-[#FBEEAC] border border-dashed border-orange-300 rounded-full`}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}

export default FormElementBiggerPI