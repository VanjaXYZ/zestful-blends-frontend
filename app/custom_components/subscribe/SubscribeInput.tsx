"use client";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { FaLongArrowAltRight } from "react-icons/fa";

const formSchema = z.object({
  email: z.string().min(2).max(50),
});

const SubscribeInput = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-4 flex-col lg:flex-row"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Enter Email Address"
                  {...field}
                  className="max-w-[300px] border-white rounded-full placeholder:text-neutral-100"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-primary-orange flex gap-2 rounded-full text-white transition-colors hover:bg-primary-dark-orange "
        >
          <span>Subscribe</span> <FaLongArrowAltRight size={18} />
        </Button>
      </form>
    </Form>
  );
};

export default SubscribeInput;
