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
import { useAddressContext } from "../context/AddressContext";

const DeliveryType = () => {
  const form = useForm({ defaultValues: { time: "ASAP" } });
  const [dialogStep, setDialogStep] = React.useState<
    "deliveryType" | "details" | "deliveryTime"
  >("deliveryType");

  const setDeliveryType = useCheckoutStore((state) => state.setDeliveryType);
  const deliveryType = useCheckoutStore((state) => state.deliveryType);
  const setPickupTime = useCheckoutStore((state) => state.setPickupTime);
  const pickUpVisibility = useCheckoutStore((state) => state.pickUpVisibility);
  const setPickUpVisibility = useCheckoutStore((state) => state.setPickUpVisibility);
  const dialogOpen = useCheckoutStore((state) => state.dialogOpen);
  const setDialogOpen = useCheckoutStore((state) => state.setDialogOpen);
  const setDeliveryVisiblity = useCheckoutStore((state) => state.setDeliveryVisibility);
  const setDeliveryCompany = useCheckoutStore((state) => state.setDeliveryCompany);
  const setDeliveryFieldState = useCheckoutStore((state) => state.setDeliveryFieldState)
  const setBillingFieldState = useCheckoutStore((state) => state.setBillingFieldState)
  const {sameAddressIsChecked, setSameAddressIsChecked} = useAddressContext()

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger className="text-white bg-primary-orange hover:bg-primary-green px-8 py-3 rounded-full w-[40%] max-lg:w-[80%]">
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
                  <p>Pick up</p>
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
                  <button className="my-2 p-4 border-2 rounded-lg" onClick={() => {setDialogStep("deliveryTime"); setDeliveryCompany("Doordash")}}>
                    Delivery by Doordash
                  </button>
                  <button className="my-2 p-4 border-2 rounded-lg" onClick={() => {setDialogStep("deliveryTime"); setDeliveryCompany("UberEats")}}>
                    Delivery by UberEats
                  </button>
                  <button className="my-2 p-4 border-2 rounded-lg" onClick={() => {setDialogStep("deliveryTime"); setDeliveryCompany("Fantuan")}}>
                    Delivery by Fantuan
                  </button>
                  <hr />
                  Or
                  <Link href="#" onClick={() => setDeliveryType("Pick-up")}>
                    Want to pick up?
                  </Link>
                  <button
                    className="mt-4 px-4 py-2 bg-gray-300 rounded-full hover:bg-gray-400"
                    onClick={() => setDialogStep("deliveryType")}
                  >
                    ← Return
                  </button>
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
                    onClick={() => {
                      const selectedTime = form.getValues("time"); 
                      setPickupTime(selectedTime);
                      setDialogStep("deliveryType"); 
                      setDialogOpen(false); 
                      setPickUpVisibility(true);
                      setDeliveryVisiblity(false);
                      setDeliveryCompany('');
                      setDeliveryFieldState("Optional");
                      setBillingFieldState("Required");
                      setSameAddressIsChecked(false);
                    } }
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
            <button
                    className="mt-4 px-4 py-2 bg-gray-300 rounded-full hover:bg-gray-400"
                    onClick={() => setDialogStep("deliveryType")}
                  >
                    ← Return
                  </button>
          </>
        )}

        {dialogStep === "deliveryTime" && (
          <>
            <DialogTitle>Enter delivery details</DialogTitle>
            <DialogDescription>
              <div className="flex flex-col items-center">
                <FormProvider {...form}>
                  <TimeDropdown name="time" fieldWidth={100} />
                  <button
                    className="bg-[#F8991D] text-white font-bold  w-1/2 rounded-full py-2 my-4"
                    onClick={() => {
                      const selectedTime = form.getValues("time"); 
                      setPickupTime(selectedTime);
                      setDialogStep("deliveryType"); 
                      setDialogOpen(false); 
                      setPickUpVisibility(false)
                      setDeliveryVisiblity(true);
                      setDeliveryFieldState("Required")
                    } }
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
            <button
                    className="mt-4 px-4 py-2 bg-gray-300 rounded-full hover:bg-gray-400"
                    onClick={() => {setDialogStep("details"); setDeliveryType("Delivery")}}
                  >
                    ← Return
                  </button>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DeliveryType;
