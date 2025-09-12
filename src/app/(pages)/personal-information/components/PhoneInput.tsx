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
  import { PhoneInput } from 'react-international-phone';
  import 'react-international-phone/style.css';

interface FormElementBiggerPhoneProps {
  name: string;
  fieldWidth: number;
}

const FormElementBiggerPhone = ({name, fieldWidth}: FormElementBiggerPhoneProps) => {
  const {control} = useFormContext();
  return (
    <div className='flex items-center w-[100%]'>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className='w-full'>
            <FormControl>
              {/* <Input
                // placeholder="..."
                {...field}
                className={`h-10 bg-[#FBEEAC] border border-dashed border-orange-300 rounded-full`}
                style={{width: `${fieldWidth}%`}}
              /> */}
              <PhoneInput
                {...field}
                defaultCountry="ca"
                placeholder="Enter phone number"
                forceDialCode
                onChange={(val) => field.onChange(val)}
                className={`h-10 bg-[#FBEEAC] border border-dashed border-orange-300 rounded-full px-4`}
                inputStyle={{backgroundColor: "#FBEEAC", border: "none"}}
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

export default FormElementBiggerPhone