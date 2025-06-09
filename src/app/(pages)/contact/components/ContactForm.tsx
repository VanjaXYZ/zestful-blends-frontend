"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { FaLongArrowAltRight } from "react-icons/fa";
import { z } from "zod";

const ContactForm = () => {
  const formSchema = z.object({
    name: z.string().min(2),
    email: z.string().min(2).max(50),
    phone: z.string().min(4),
    message: z.string().min(8).max(250),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <section>
      <h3 className="text-white text-lg font-bold pb-4">Contact Us</h3>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-2"
        >
          <div className="flex justify-between flex-col gap-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Enter Your Name"
                      {...field}
                      className="w-[400px] max-sm:w-[100%] border-white rounded-full placeholder:text-neutral-300"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Enter Email Address"
                      {...field}
                      className="w-[400px] max-sm:w-[100%] border-white rounded-full placeholder:text-neutral-300"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Enter Phone Number"
                    type="number"
                    {...field}
                    className="w-[400px] max-sm:w-[100%] border-white rounded-full placeholder:text-neutral-300"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    id="message"
                    className="rounded-xl border-none bg-white min-h-52 w-[] resize-none"
                    {...field}
                    // value={message}
                    // onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    //   setMessage(e.target.value)
                    // }
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="bg-[#93BE3B] flex gap-2 rounded-full text-white transition-colors hover:bg-primary-olive "
          >
            <span>Send Message</span> <FaLongArrowAltRight size={18} />
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default ContactForm;
