"use client";

import React, { useState } from "react";
import WalkingMenIcon from "@/assets/WalkingMenIcon.png";
import ClockIcon from "@/assets/ClockIcon.png";
import HomeIcon from "@/assets/HomeIcon.png";
import EditIcon from "@/assets/EditIcon.png";
import FormElementBigger from "./FormElementBigger";
import Delivery from "@/assets/delivery.png";
import { FormProvider, useForm } from "react-hook-form";
import { checkoutList } from "./checkout";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import Image from "next/image";
import DeliveryType from "./DeliveryType";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useCartStore from "@/app/store/cartStore";
import { off } from "process";
import { useCheckoutStore } from "@/app/store/checkoutStore";


const MyOrderReview = () => {
  const form = useForm();

  const stringTips: string[] = ["10%", "12%", "15%", "customer"];

  const promoCode = "zestful3000";
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [tipNumber, setTipNumber] = useState<number>(0);
  const [customTipActive, setCustomTipActive] = useState<boolean>(false)
  const tax = 3;

  const convertTipToNumber = (stringTip: string) => {
    if (stringTip === "customer") {
      setCustomTipActive(true)
    } else {
      setCustomTipActive(false);
      setTipNumber(Number(stringTip.replace("%","")))
    }
  }

  type PromoCodeFormType = {
  "promo code": string;
};

  type customTipFormType = z.infer<typeof tipSchema>

  const tipSchema = z.object({
    "custom tip": z.number({
      invalid_type_error: "Please enter a valid number",
    }).min(0, "Tip must be at least 0")
    .refine((val) => /^\d+(\.\d{1,2})?$/.test(val.toString()), {
      message: "Maximum 2 decimal places allowed",
    }),
  })

  const promoCodeForm = useForm<PromoCodeFormType>();
  const customTipForm = useForm<customTipFormType>({
    resolver: zodResolver(tipSchema),
    defaultValues: {
      "custom tip" : 0
    }
  })

  const [promoCodeValid, setPromoCodeValid] = useState<number>(0)

  const promoCodeSubmit = (data: {"promo code": string}) => {
    if (data["promo code"] === promoCode) {
      setDiscountPercent(0.1);
      setPromoCodeValid(1)
    } else setPromoCodeValid(2)
  }

  const customTipSubmit = (data: {"custom tip": number}) => {
    setTipInDolars(data["custom tip"]);
  }

  const [tipInDolars, setTipInDolars] = useState<number>(0)
  
  const cart = useCartStore((state) => state.cart)

  const subTotal: number = cart.reduce(
    (acc, product) => acc + (product.price ?? 0),
    0
  );

  const subTotalBefore: number = cart.reduce(
    (acc, product) => acc + (product.priceBefore ?? 0),
    0
  );

  const pickupTime = useCheckoutStore((state) => state.pickupTime);
  const pickUpVisibility = useCheckoutStore((state) => state.pickUpVisibility);
  const setDialogOpen = useCheckoutStore((state) => state.setDialogOpen);
  const deliveryVisibility = useCheckoutStore((state) => state.deliveryVisibility);
  const deliveryCompany = useCheckoutStore((state) => state.deliveryCompany)

  const displayCart = () => {
    console.log(
      cart.map((orderedProduct) => 
        {
          return {
            productId: orderedProduct.id,
            productName: orderedProduct.name,
            toppings: orderedProduct.toppings,
            fruits: orderedProduct.fruits,
            quantity: orderedProduct.quantity,
            size: orderedProduct.size,
            collectionOption: orderedProduct.collectionOption,
            price: orderedProduct.price?.toFixed(2)
          }
        }
      )
    )
  }

  const displaySummary = () => {
    console.log(
      {
        subTotal: subTotal.toFixed(2),
        discount: (subTotal*discountPercent).toFixed(2),
        tip: tipInDolars.toFixed(2),
        tax: tax.toFixed(2),
        grandTotal: (subTotal - (subTotal*discountPercent) + tipInDolars + tax).toFixed(2),
      }
      // <div className="flex justify-between">
      //       <h3>Sub total: </h3>
      //       <p>$ {subTotal.toFixed(2)}</p>
      //     </div>
      //     <div className="flex justify-between">
      //       <h3>Discount: </h3>
      //       <p>-$ {(subTotal*discountPercent).toFixed(2)}</p>
      //     </div>
      //     <div className="flex justify-between">
      //       <h3>Tip: </h3>
      //       <p>$ {typeof tipInDolars === "number" ? tipInDolars.toFixed(2) : "0.00"}</p>
      //     </div>
      //     <div className="flex justify-between">
      //       <h3>Tax: </h3>
      //       <p>$ {tax.toFixed(2)}</p>
      //     </div>
      //     <div className="flex justify-between items-center">
      //       <h3 className="font-bold text-2xl max-lg:text-xl">Grand Total</h3>
      //       <p className="font-bold text-2xl max-lg:text-xl">
      //         $ {(subTotal - (subTotal*discountPercent) + tipInDolars + tax).toFixed(2)}
      //       </p>
      //     </div>
    )
  }

  return (
    <div
      className="w-[80%] sm:w-[100%] max-sm:w-full bg-white border border-gray-300 rounded-xl mt-8"
      style={{ boxShadow: "inset 0px 1px 2.5px rgba(0, 0, 0, 0.15)" }}
    >
      <div className="m-4">
        <h2 className="text-[#FCB131] font-bold text-3xl pb-4">
          My order review
        </h2>

        {pickUpVisibility &&
      <div className="border-2 border-[#FCB131] rounded-3xl flex flex-col px-8 py-4 gap-2">
          <div className="flex items-center gap-2">
            <Image
              alt="walking men icon"
              src={WalkingMenIcon.src}
              className="w-8"
              width={10}
              height={10}
            />
            <div>
              Your Choose: Pick up
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Image
              alt="clock icon"
              src={ClockIcon.src}
              className="w-8"
              width={10}
              height={10}
            />
            <div>
              Your Choose: <p className="text-[#FCB131] inline">{pickupTime}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Image
              alt="home icon"
              src={HomeIcon.src}
              className="w-8"
              width={10}
              height={10}
            />
            <p>
              Pick- Up Address: 139 Keefer St #130,<br></br> Vancouver, BC V6A
              1X3, Canada
            </p>
          </div>
          <Image
            alt="edit icon"
            src={EditIcon.src}
            className="ml-auto w-8 cursor-pointer"
            width={10}
            height={10}
            onClick={() => setDialogOpen(true)}
          />
      </div>}

        {deliveryVisibility &&
        <div className="border-2 border-[#FCB131] rounded-3xl flex flex-col px-8 py-4 gap-2">
          <div className="flex items-center gap-2">
            <Image
              alt="delivery icon"
              src={Delivery.src}
              className="w-8"
              width={10}
              height={10}
            />
            <div>
              Your Choose: Delivery by {deliveryCompany}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Image
              alt="clock icon"
              src={ClockIcon.src}
              className="w-8"
              width={10}
              height={10}
            />
            <div>
              Your Choose: <p className="text-[#FCB131] inline">{pickupTime}</p>
            </div>
          </div>
          <Image
            alt="edit icon"
            src={EditIcon.src}
            className="ml-auto w-8 cursor-pointer"
            width={10}
            height={10}
            onClick={() => setDialogOpen(true)}
          />
      </div>}

        <div className="border-2 border-[#FCB131] border-dashed rounded-3xl mt-4 p-8 flex flex-col">
          {/* {checkoutList.map((orderedProduct) => {
            return <div key={orderedProduct.id} className="flex flex-col border-b border-b-gray-300 text-center mb-8">
              <p className="font-bold">{orderedProduct.name}</p>
              {orderedProduct.details.map((detail, index) => {
                return <p key={`${orderedProduct.id}-${detail}-${index}`}>{detail}</p>
              })}
              <p className="ml-auto">${orderedProduct.price}</p>
            </div>
          })} */}
           {cart.map((orderedProduct) => {
            return <div key={orderedProduct.id} className="flex flex-col border-b border-b-gray-300 text-center mb-8">
              <p className="font-bold">{orderedProduct.name}</p>
              {orderedProduct.toppings && <p>toppings: {orderedProduct.toppings}</p>}
              {orderedProduct.fruits && <p>fruits: {orderedProduct.fruits}</p>}
              <p>quantity: {orderedProduct.quantity}</p>
              <p>size: {orderedProduct.size}</p>
              {orderedProduct.collectionOption && <p>collection option: {orderedProduct.collectionOption}</p>}
              <div className={`${orderedProduct.price != orderedProduct.priceBefore && `flex gap-4`} ml-auto`}>
                {orderedProduct.price != orderedProduct.priceBefore ? <p className="line-through">{`$${orderedProduct.priceBefore?.toFixed(2)}`}</p> : null}
                <p className="ml-auto">${orderedProduct.price?.toFixed(2)}</p>
              </div>
            </div>
          })}
          <div className="flex justify-between">
            <p className="font-bold">Sub Total:</p>
            <div className={`${(subTotal!= subTotalBefore) && "flex gap-4"}`}>
              {subTotal!= subTotalBefore && <p className="line-through">${subTotalBefore.toFixed(2)}</p>}
              <p className="font-semibold">${subTotal.toFixed(2)}</p>
            </div>
          </div>
          {(subTotal!= subTotalBefore) && <p className="ml-auto text-primary-green">You have saved ${(subTotalBefore-subTotal).toFixed(2)} thanks to your subscription. </p>}
        </div>

        <div className="mt-6 border-b border-t border-b-gray-300 border-t-gray-300">
          <div className="flex flex-col gap-4 px-6 py-4">
            <h2 className="text-[#FCB131] font-bold text-2xl">Promo code</h2>
            <FormProvider {...promoCodeForm}>
              <form onSubmit={promoCodeForm.handleSubmit(promoCodeSubmit)}>
                <div className="flex max-lg:flex-col gap-8 max-lg:gap-2">
                  <FormElementBigger name="promo code" fieldWidth={100} />
                  <Button className="bg-primary-orange hover:bg-primary-green rounded-full px-20 lg: w-[30%]">Apply</Button>
                </div>
                {promoCodeValid === 1 && <p className="text-green-400 pt-2 text-sm">valid promo code</p>}
                {promoCodeValid === 2 && <p className="text-red-400 pt-2 text-sm">invalid promo code</p>}
              </form>
            </FormProvider>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-b border-b-gray-300 px-6 py-4">
          <h2 className="text-[#FCB131] font-bold text-2xl">Tip?</h2>
          <div className="flex gap-2 justify-between">
            {stringTips.map((tip) => (
              <div onClick={() => {convertTipToNumber(tip); setTipInDolars(tipNumber/100*subTotal)}}
                key={tip}
                className="flex-1 h-16 bg-[#FBEEAC] flex items-center justify-center border-2 border-[#FCB131] rounded-3xl cursor-pointer"
              >
                {tip}
              </div>
            ))}
          </div>
          {customTipActive && 
          <FormProvider {...customTipForm}>
            <form onSubmit={customTipForm.handleSubmit(customTipSubmit)}>
              <div className="flex gap-2 items-center">
                <span>My tip:</span>
                <Input 
                  {...customTipForm.register("custom tip", { valueAsNumber: true })}
                  className="w-16"/>
                <span>$</span> 
                <button className="bg-primary-orange hover:bg-primary-green rounded-full px-4 ml-4">Apply</button>
              </div>
              {customTipForm.formState.errors["custom tip"] && (
                <p className="text-red-500 text-sm mt-1">
                  {customTipForm.formState.errors["custom tip"]?.message}
                </p>
              )}
            </form>
          </FormProvider>
          }
          <button onClick={() => {setTipInDolars(0); setCustomTipActive(false)}} className="ml-auto hover:bg-gray-400 bg-black text-white font-semibold rounded-full px-2">Skip tips</button>
        </div>

        <div className="flex flex-col gap-2 py-4">
          <div className="flex justify-between">
            <h3>Sub total: </h3>
            <p className="font-semibold">$ {subTotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <h3>Promo Code Discount: </h3>
            <p>-$ {(subTotal*discountPercent).toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <h3>Tip: </h3>
            <p>$ {typeof tipInDolars === "number" ? tipInDolars.toFixed(2) : "0.00"}</p>
          </div>
          <div className="flex justify-between">
            <h3>Tax: </h3>
            <p>$ {tax.toFixed(2)}</p>
          </div>
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-2xl max-lg:text-xl">Grand Total</h3>
            <p className="font-bold text-2xl max-lg:text-xl">
              $ {(subTotal - (subTotal*discountPercent) + tipInDolars + tax).toFixed(2)}
            </p>
          </div>
        </div>

        <div className="py-8">
          <button className="bg-[#F8991D] text-white font-bold text-2xl w-full rounded-full py-4 hover:bg-primary-green"
                  form="checkoutForm"
                  type="submit"
                  onClick={() => {displayCart(); displaySummary()}}
                  >
            Place order
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyOrderReview;
