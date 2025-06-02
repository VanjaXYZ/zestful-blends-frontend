import {
  Dialog,
  DialogCloseButton,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Image from "next/image";
import WalkingMenIcon from "@/assets/WalkingMenIcon.png";
import Delivery from "@/assets/delivery.png";
import React from "react";
import TimeDropdown from "./TimeDropdown";
import { useCheckoutStore } from "@/app/store/checkoutStore";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";

const DeliveryType = () => {
  const form = useForm();
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [dialogStep, setDialogStep] = React.useState<
    "deliveryType" | "details"
  >("deliveryType");

  const setDeliveryType = useCheckoutStore((state) => state.setDeliveryType);
  const deliveryType = useCheckoutStore((state) => state.deliveryType);
  return (
    <Dialog>
      <DialogTrigger className="text-[#FCB131] ">
        Select Delivery type
      </DialogTrigger>
      <DialogContent>
        <DialogCloseButton />

        {dialogStep === "deliveryType" && (
          <>
            {" "}
            <DialogTitle>Choose your way</DialogTitle>
            <DialogDescription>
              <div className="flex gap-20 justify-center p-10">
                <div className="flex flex-col items-center">
                  <Image
                    alt="walking men icon"
                    src={WalkingMenIcon}
                    className="p-2 border-2 border-[#FCB131] rounded-lg"
                    width={75}
                    height={75}
                    onClick={() => {
                      setDeliveryType("Pick-up");
                      setDialogStep("details");
                    }}
                  />
                  <p>Pick-up</p>
                </div>
                <div className="flex flex-col items-center">
                  <Image
                    alt="delivery truck icon"
                    src={Delivery}
                    className="p-2 border-2 border-[#FCB131] rounded-lg"
                    width={100}
                    height={100}
                    onClick={() => {
                      setDeliveryType("Delivery");
                      setDialogStep("details");
                    }}
                  />
                  <p>Delivery</p>
                </div>
              </div>
            </DialogDescription>
          </>
        )}

        {dialogStep === "details" && deliveryType === "Delivery" && (
          <>
            <div className="flex flex-col items-center">
              <DialogTitle>Delivery Now</DialogTitle>
              <p className="mb-4">Continue with our partners</p>
              <DialogDescription>
                <div className="flex flex-col items-center">
                  <button className="my-2 p-4 border-2 rounded-lg">
                    Delivery by Doordash
                  </button>
                  <button className="my-2 p-4 border-2 rounded-lg">
                    Delivery by UberEats
                  </button>
                  <button className="my-2 p-4 border-2 rounded-lg">
                    Delivery by Fantuan
                  </button>
                  <hr />
                  Or
                  <Link href="#" onClick={() => setDeliveryType("Pick-up")}>
                    Want to pick up?
                  </Link>
                </div>
              </DialogDescription>
            </div>
          </>
        )}

        {dialogStep === "details" && deliveryType === "Pick-up" && (
          <>
            <DialogTitle>Enter pick-up details</DialogTitle>
            <DialogDescription>
              <div className="flex flex-col items-center">
                <FormProvider {...form}>
                  <TimeDropdown name="time" fieldWidth={100} />
                  <button
                    className="bg-[#F8991D] text-white font-bold  w-1/2 rounded-full py-2 my-4"
                    onClick={() => setDialogStep("deliveryType")}
                  >
                    Confirm
                  </button>
                </FormProvider>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="font-bold">Our Address</h3>
                <h4>139 Keefer St #130, Vancouver, BC V6A 1X3, Canada</h4>
              </div>
            </DialogDescription>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DeliveryType;
