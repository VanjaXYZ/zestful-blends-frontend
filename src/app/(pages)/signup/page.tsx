"use client";
import Image from "next/image";
import ManDrinkingJuice from "@/assets/man_drinking.png";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import styles from "./Signup.module.css";
import Breadcrumbs from "@/app/custom_components/shared/Breadcrumbs";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const SignUp = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const formSchema = z.object({
    firstName: z.string().min(2, "Name must contain at least 2 charakters"),
    lastName: z.string().min(2, "Last name must contain at least 2 charakters"),
    phone: z.string().optional(),
    email: z.string().email(),
    password: z.string().min(8, "Password must contain at least 8 characters")
    .max(25, "Password mustn't contain more than 25 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character")
    .regex(/\d/, "Password must contain at least one number"),
    confirmPassword: z.string().min(8, "Password must contain at least 8 characters")
    .max(25, "Password mustn't contain more than 25 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character")
    .regex(/\d/, "Password must contain at least one number"),
    checkbox: z.boolean().refine((val) => val === true, {
      message: "You must accept the Terms and Privacy Policy"
    })
  }).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"], // <- błąd będzie przypisany do pola confirmPassword
});

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
      checkbox: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    form.reset();
  }

  return (
    <>
      <div className="flex bg-primary-olive p-10 signup-container">
        <div className="hidden lg:block w-1/2">
          <Image
            src={ManDrinkingJuice}
            alt="Man Drinking Juice"
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col w-1/2">
          <h1 className="text-primary-orange  text-xl text-center sm:text-start lg:text-4xl font-bold mt-4">
            Sign Up
          </h1>
          <div className="flex">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-2"
              >
                <div className="flex justify-between m-5 gap-2">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="First Name"
                            {...field}
                            className="w-[400px] border-white rounded-full placeholder:text-neutral-300"
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Last Name"
                            {...field}
                            className="w-[400px] border-white rounded-full placeholder:text-neutral-300"
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex justify-between m-5">
                  <div className="flex gap-2">
                    <div>{`Phone\n(optional): `}</div>
                    <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          {/* <Input
                            placeholder="Phone (optional)"
                            {...field}
                            className="w-[400px] border-white rounded-full placeholder:text-neutral-300"
                          /> */}
                          <PhoneInput
                            {...field}
                            defaultCountry="ca"
                            placeholder="Phone (optional)"
                            forceDialCode
                            onChange={(val) => field.onChange(val)}
                            className="w-[400px] border-white rounded-full placeholder:text-neutral-300"
                            // className={`h-10 bg-[#FBEEAC] border border-dashed border-orange-300 rounded-full px-4`}
                            // inputStyle={{backgroundColor: "#FBEEAC", border: "none"}}
                            // style={{width: `${fieldWidth}%`}}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Email"
                            {...field}
                            className="w-[400px] border-white rounded-full placeholder:text-neutral-300"
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex w-100 m-5">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="relative">
                            <Input
                              placeholder="Password"
                              type={showPassword ? "text" : "password"}
                              {...field}
                              className="w-[400px] border-white rounded-full placeholder:text-neutral-300"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword((prev) => !prev)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                            >
                              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                          </div>
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex w-100 m-5">
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="relative">
                            <Input
                              placeholder="Confirm Password"
                              type={showConfirmPassword ? "text" : "password"}
                              {...field}
                              className="w-[400px] border-white rounded-full placeholder:text-neutral-300"
                            />
                            <button
                              type="button"
                              onClick={() => setShowConfirmPassword((prev) => !prev)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                            >
                              {showConfirmPassword ? (<EyeOff size={20} />) : (<Eye size={20} />)}
                            </button>
                          </div>
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex w-100 m-5">
                  {/* <input type="checkbox" name="checkbox" className="mr-2" />
                  <p>
                    By signing up, you agree to our{" "}
                    <span className="text-primary-orange">
                      Terms of Service
                    </span>{" "}
                    and{" "}
                    <span className="text-primary-orange">Privacy Policy</span>
                  </p> */}
                  <FormField
                    control={form.control}
                    name="checkbox"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <div className='flex'>
                          <FormControl>
                            <input
                              type="checkbox"
                              checked={field.value}
                              onChange={field.onChange}
                              className="mr-2"
                            />
                          </FormControl>
                          <p>
                            By signing up, you agree to our{" "}
                            <Link href='/terms-and-conditions' target="_blank" className="text-primary-orange">Terms of Service</Link> and{" "}
                            <Link href='/privacy-policy' target="_blank" className="text-primary-orange">Privacy Policy</Link>
                          </p>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex w-100 m-5">
                  <Button
                    className="bg-primary-orange flex gap-2 rounded-full text-white transition-colors hover:bg-primary-dark-orange "
                    type="submit"
                  >
                    Sign Up
                  </Button>
                </div>
              </form>
            </Form>
          </div>
          <div>
            <p>
              Already have an account?{" "}
              <Link href="/login" className="text-primary-orange">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
