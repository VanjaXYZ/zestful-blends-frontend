import React, { useState } from 'react'
import { Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField, } from "@/components/ui/form"
  import { Input } from "@/components/ui/input";
  import { useFormContext } from "react-hook-form";
import { Label } from '@/components/ui/label';
import CardImage from '@/assets/checkout-cardimage.png'

interface CheckboxFormElementBiggerProps {
  name: string;
  fieldWidth: number;
}

const CheckboxFormElementBigger = ({name, fieldWidth}: CheckboxFormElementBiggerProps) => {
  const {control} = useFormContext();
  const [checked, setChecked] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
  }

  return (
    <div className='flex items-center gap-2'>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className='w-full'>
            <FormControl>
              <Label className={`flex items-center justify-between h-10 bg-[#FBEEAC] border border-dashed border-orange-300 rounded-full px-4`}
                     style={{width: `${fieldWidth}%`}}>
                <div className='flex gap-2 items-center'>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => {
                      field.onChange(e);
                      handleChange(e);
                    }}
                    className={`appearance-none bg-white border-gray-300 border rounded-full w-6 h-6 relative
                                checked:after:content-['']
                                checked:after:absolute
                                checked:after:top-1/2
                                checked:after:left-1/2
                                checked:after:-translate-x-1/2
                                checked:after:-translate-y-1/2
                                checked:after:block 
                                checked:after:w-1.5 
                                checked:after:h-1.5 
                                checked:after:mx-auto 
                                checked:after:my-auto 
                                checked:after:rounded-full 
                                checked:after:bg-black`}
                  />
                  <p className='text-base leading-none'>Credit Card</p>
                </div>
                
                <img alt="card image" src={CardImage.src}/>
              </Label>
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}

export default CheckboxFormElementBigger