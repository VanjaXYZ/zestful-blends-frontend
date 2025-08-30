"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Quote } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useFaqState } from "@/app/store/faqStore";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(5, "Message must be at least 5 characters").max(500, "Message mustn't contain more then 500 characters"),
});

type FormData = z.infer<typeof formSchema>;

const SendQuestion = () => {

  const router = useRouter();
  
  const showSuccess = useFaqState((state) => state.showSucces);
  const setShowSuccess = useFaqState((state) => state.setShowSucces);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("SEND:", data);
    reset();
    setShowSuccess(true);
  };

  return (
    <div className="flex flex-col lg:flex-row p-2">
      <div className="w-full">
        <h3 className="flex text-2xl lg:text-4xl font-bold text-white gap-4">
          I NEED MORE ! <Quote size={42} />
        </h3>
        <article className="lg:max-w-md">
          <p className="text-white text-sm lg:text-base">
            This is where you can ask your question. Fill the form and send it.
          </p>
        </article>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-8 py-8"
      >
        <div className="flex flex-col lg:justify-around gap-4">
          <div className="w-full">
            <Label htmlFor="name" className="text-white text-lg lg:text-xl font-semibold">
              NAME
            </Label>
            <Input
              id="name"
              {...register("name")}
              className="rounded-full bg-white border-none"
            />
            {errors.name && <p className="text-red-700 text-sm pt-1">{errors.name.message}</p>}
          </div>
          <div className="w-full">
            <Label htmlFor="email" className="text-white text-lg lg:text-xl font-semibold">
              EMAIL
            </Label>
            <Input
              id="email"
              {...register("email")}
              className="rounded-full bg-white border-none"
            />
            {errors.email && <p className="text-red-700 text-sm pt-1">{errors.email.message}</p>}
          </div>
        </div>
        <div>
          <Label htmlFor="message" className="text-white text-lg lg:text-xl font-semibold">
            MESSAGE
          </Label>
          <Textarea
            id="message"
            {...register("message")}
            className="rounded-xl border-none bg-white min-h-52"
          />
          {errors.message && <p className="text-red-700 text-sm pt-1">{errors.message.message}</p>}
        </div>
        <Button
          variant={"outline"}
          className="rounded-full border-none bg-primary-orange text-white font-semibold text-xl hover:bg-primary-green"
          type="submit"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default SendQuestion;

