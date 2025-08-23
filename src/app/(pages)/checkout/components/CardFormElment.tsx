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

interface CardFormElementProps {
  name: string;
  fieldWidth: number;
}

const CardFormElement = ({name, fieldWidth}: CardFormElementProps) => {
  const {control} = useFormContext();
   const { register, setValue } = useFormContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ""); // tylko cyfry
    value = value.replace(/(.{4})/g, "$1 ").trim(); // spacja co 4 cyfry
    setValue("cardNumber", value, { shouldValidate: true });
  };

  return (
    <div className='flex items-center w-[100%]'>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className='w-full'>
            <FormControl>
              <Input
                placeholder="1234 5678 9012 3456"
                type="text"
                {...field}
                {...register("cardNumber")}
                onChange={handleChange}
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

export default CardFormElement