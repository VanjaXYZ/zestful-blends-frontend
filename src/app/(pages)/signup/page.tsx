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

const SignUp = () => {
  const formSchema = z.object({
    firstName: z.string().min(2),
    lastName: z.string().min(2),
    phone: z.string().min(4),
    email: z.string().email(),
    password: z.string().min(8).max(250),
    confirmPassword: z.string().min(8).max(250),
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
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
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
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Phone"
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
                          <Input
                            placeholder="Password"
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
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Confirm Password"
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
                  <input type="checkbox" className="mr-2" />
                  <p>
                    By signing up, you agree to our{" "}
                    <span className="text-primary-orange">
                      Terms of Service
                    </span>{" "}
                    and{" "}
                    <span className="text-primary-orange">Privacy Policy</span>
                  </p>
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
