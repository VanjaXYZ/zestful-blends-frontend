"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Quote } from "lucide-react";
import React, { InputHTMLAttributes, useState } from "react";

const SendQuestion = () => {
  const [name, setName] = useState<string | undefined>("");
  const [email, setEmail] = useState<string | undefined>("");
  const [message, setMessage] = useState<string | undefined>("");
  return (
    <div className="flex">
      <div className="w-full">
        <h3 className="flex text-4xl font-bold text-white gap-4">
          I NEED MORE ! <Quote size={42} />
        </h3>
        <article className="max-w-md">
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            id magni consequuntur, dignissimos, reiciendis animi nobis dolore et
            eligendi earum aut debitis beatae illo dicta recusandae. Dolor ut
            earum doloremque. Cum tempore dolorum labore, quisquam perferendis
            minus maxime inventore at aperiam rerum vitae quam iure.
          </p>
        </article>
      </div>
      <div className="w-full flex flex-col gap-8">
        <div className="flex justify-around gap-4">
          <div className="w-full">
            <Label htmlFor="name" className="text-white text-xl font-semibold">
              NAME
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
              className="rounded-full bg-white border-none"
            />
          </div>
          <div className="w-full">
            <Label htmlFor="email" className="text-white text-xl font-semibold">
              EMAIL
            </Label>
            <Input
              id="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              className="rounded-full bg-white border-none"
              required
            />
          </div>
        </div>
        <div>
          <Label className="text-white text-xl font-semibold" htmlFor="message">
            MESSAGE
          </Label>
          <Textarea
            id="message"
            className="rounded-xl border-none bg-white min-h-52"
            value={message}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setMessage(e.target.value)
            }
          />
        </div>
        <Button
          variant={"outline"}
          className="rounded-full border-none bg-primary-orange font-semibold text-xl hover:bg-primary-dark-orange"
          type="submit"
        >
          Send Message
        </Button>
      </div>
    </div>
  );
};

export default SendQuestion;
