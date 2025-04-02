import React from 'react'
import { Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField, } from "@/components/ui/form"
  import { Input } from "@/components/ui/input";
  import { useForm } from "react-hook-form";
  import { Control } from "react-hook-form";

interface FormElementProps {
  formElementName?: string;
  control: Control<any>;
  name: string;
}

const FormElement = ({formElementName, control, name}: FormElementProps) => {
  const form = useForm();
  return (
    <div className='flex items-center gap-2'>
      <div>
        {formElementName}
      </div>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                // placeholder="..."
                {...field}
                className="w-32 h-6 border border-dashed border-orange-300 rounded-full"
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}

export default FormElement