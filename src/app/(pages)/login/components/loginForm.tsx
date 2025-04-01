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
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import DrinkingJuiceLoginPng from "@/assets/Drinking-Juice-login.png";
import FruitImageOne from "@/assets/fruit-image-1-login.png";
import FruitImageTwo from "@/assets/fruit-2-login.png";

const LoginForm = () => {
  const formSchema = z.object({
    phoneEmail: z.string().min(4),
    password: z.string().min(6),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phoneEmail: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="flex justify-center items-center  h-screen ">
      <div className="flex bg-white rounded-lg items-center shadow-lg bg-green-100 overflow-hidden w-3/4 md:w-2/3 lg:w-1/2">
        <div className="w-1/2 hidden md:block">
          <Image
            src={DrinkingJuiceLoginPng}
            alt="DrinkingJuiceLoginPng"
            className=" object-contain "
            width={350}
            height={250}
          />
          <Image
            src={FruitImageOne}
            alt="FruitImageOne"
            className=" z-3 object-contain absolute "
            height={250}
          />
          <Image
            src={FruitImageTwo}
            alt="FruitImageTwo"
            className="object-cover absolute top-70 "
          />
        </div>

        <div className="w-1/2 p-8">
          <h3 className="text-4xl font-bold text-orange-600">Log In</h3>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4 w-full max-w-md"
            >
              <FormField
                control={form.control}
                name="phoneEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Phone Number or Email"
                        {...field}
                        className="border-2 border-dashed border-orange-500 rounded-lg p-2 placeholder:text-gray-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Password"
                        {...field}
                        className="border-2 border-dashed border-orange-500 rounded-lg p-2 placeholder:text-gray-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="bg-orange-500 text-white rounded-full p-2 m-2 transition-colors hover:bg-orange-600 font-inter font-semibold text-[20px] leading-[80px] tracking-[0] "
              >
                Sign In
              </Button>
              <div>
                <p className="mt-2 text-gray-600 text-sm items-center">
                  Not have an account?{" "}
                  <a href="/signup" className="text-orange-500 underline">
                    Sign up
                  </a>
                </p>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
