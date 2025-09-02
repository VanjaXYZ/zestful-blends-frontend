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
import styles from "./Login.module.css";
import Breadcrumbs from "@/app/custom_components/shared/Breadcrumbs";
import { useState } from "react";
import {Eye, EyeOff} from "lucide-react"

const Login = () => {

  const [showPassword, setShowPassword] = useState(false);

  const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, "Password must contain at least 8 characters")
    .max(25, "Password mustn't contain more than 25 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character")
    .regex(/\d/, "Password must contain at least one number"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
   console.log(values); 
   form.reset();
  }

  return (
    <>
      <div className="flex bg-primary-olive p-10 login-container">
        <div className="hidden lg:block w-1/2">
          <Image
            src={ManDrinkingJuice}
            alt="Man Drinking Juice"
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col w-1/2">
          <h1 className="text-primary-orange  text-xl text-center sm:text-start lg:text-4xl font-bold mt-4 mb-4">
            Login
          </h1>
          <div className="flex">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
              >
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
                
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="relative">
                            <Input
                              placeholder="Password"
                              type = {showPassword ? "text" : "password"}
                              {...field}
                              className="w-[400px] border-white rounded-full placeholder:text-neutral-300"
                            />
                            <button 
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                              {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
                            </button>
                          </div>
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
              
                  <Button
                    className="bg-primary-orange flex gap-2 mb-4 rounded-full text-white transition-colors hover:bg-primary-dark-orange "
                    type="submit"
                  >
                    Login
                  </Button>
              </form>
            </Form>
          </div>
          <div>
            <p>
              Not yet have an account?{" "}
              <Link href="/signup" className="text-primary-orange">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
