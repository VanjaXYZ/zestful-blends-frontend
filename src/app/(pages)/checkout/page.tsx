"use client"

import React, { useState } from 'react'
import Breadcrumbs from "@/app/custom_components/shared/Breadcrumbs";
import ContactInfo from './components/ContactInfo';
import PaymentMethod from './components/PaymentMethod';
import MyOrderReview from './components/MyOrderReview';
import styles from './Checkout.module.css'
import Address from './components/Address';
import { useAddressContext } from './context/AddressContext';
import DeliveryWindow from './components/DeliveryWindow';
import { useCheckoutStore } from '@/app/store/checkoutStore';
import { FormProvider, useForm } from 'react-hook-form';
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef } from "react";
import { useFormContext } from "react-hook-form";


const CheckoutPage = () => {

  const {sameAddressIsChecked, setSameAddressIsChecked} = useAddressContext();
  const pickUpVisibility = useCheckoutStore((state) => state.pickUpVisibility);
  const deliveryType = useCheckoutStore((state) => state.deliveryType);
  const pickUpTime = useCheckoutStore((state) => state.pickupTime);
  const deliveryCompany = useCheckoutStore((state) => state.deliveryCompany);
  const deliveryVisibility = useCheckoutStore((state) => state.deliveryVisibility)
  const deliveryFieldState = useCheckoutStore((state) => state.deliveryFieldState)
  const billingFieldState = useCheckoutStore((state) => state.billingFieldState)
  const currentYear = useCheckoutStore((state) => state.currentYear)
  const pastMonth = useCheckoutStore((state) => state.pastMonth)
  const monthMap: Record<string, number> = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11,
  };

  

const checkoutSchema = (sameAddressIsChecked: boolean, pickUpVisibility: boolean, deliveryFieldState: string | undefined, billingFieldState: string | undefined) =>

  z
    .object({
      email: z.string().email("Please enter a valid email address"),
      saveInfo: z.boolean().optional(),
      deliveryAddress: z.object({
        firstName: deliveryFieldState === "Required"
          ? z.string().min(1, deliveryFieldState)
          : z.string().optional(),
        lastName: deliveryFieldState === "Required"
          ? z.string().min(1, deliveryFieldState)
          : z.string().optional(),
        country: deliveryFieldState === "Required"
          ? z.string().min(1, deliveryFieldState)
          : z.string().optional(),
        stateCounty: deliveryFieldState === "Required"
          ? z.string().min(1, deliveryFieldState)
          : z.string().optional(),
        address: deliveryFieldState === "Required"
          ? z.string().min(1, deliveryFieldState)
          : z.string().optional(),
        city: deliveryFieldState === "Required"
          ? z.string().min(1, deliveryFieldState)
          : z.string().optional(),
        zipPostalCode: deliveryFieldState === "Required"
          ? z.string()
          .regex(/^[A-Za-z]\d[A-Za-z][- ]?\d[A-Za-z]\d$/, {
        message: "Please enter a valid Canadian postal code (e.g., M5V 3L9)" })
  : z.string().optional(),
        apartment: z.string().optional(),
        companyName: z.string().optional(),
        phone: deliveryFieldState === "Required"
  ? z.string().min(1, deliveryFieldState)
  : z.string().optional(),
      }),
      billingAddress: z.object({
        firstName: billingFieldState === "Required"
  ? z.string().min(1, billingFieldState)
  : z.string().optional(),
        lastName: billingFieldState === "Required"
  ? z.string().min(1, billingFieldState)
  : z.string().optional(),
        country: billingFieldState === "Required"
  ? z.string().min(1, billingFieldState)
  : z.string().optional(),
        stateCounty: deliveryFieldState === "Required"
          ? z.string().min(1, deliveryFieldState)
          : z.string().optional(),
        address: billingFieldState === "Required"
  ? z.string().min(1, billingFieldState)
  : z.string().optional(),
        city: billingFieldState === "Required"
  ? z.string().min(1, billingFieldState)
  : z.string().optional(),
        zipPostalCode: billingFieldState === "Required"
  ? z.string()
  .regex(/^[A-Za-z]\d[A-Za-z][- ]?\d[A-Za-z]\d$/, {
        message: "Please enter a valid Canadian postal code (e.g., M5V 3L9)",
      })
  : z.string().optional(),
        apartment: z.string().optional(),
        companyName: z.string().optional(),
        phone: billingFieldState === "Required"
  ? z.string().min(1, billingFieldState)
  : z.string().optional(),
      }),

paymentMethod: z.boolean({
  required_error: "Please select a payment method",
}),
cardNumber: z
  .string()
  .transform((val) => val.replace(/\s+/g, "")) // usuwamy spacje
  .refine((val) => /^\d+$/.test(val), {
    message: "Card number must contain only digits",
  })
  .refine((val) => val.length >= 12 && val.length <= 19, {
    message: "Card number must be between 12 and 19 digits",
  }),
// month: z.string().min(1, { message: "Please select expiration month" }),
// year: z.string().min(1, { message: "Please select expiration year" }),
month: z.string()
  .nonempty("Please select an expiration month"),
year: z.string()
  .nonempty("Please select an expiration year"),
  // .refine(() => !pastMonth && currentYear, {
  //   message: "Expiration date cannot be in the past",
  // }),
securityCode: z
  .string()
  .regex(/^\d{3,4}$/, {
    message: "Security code must be 3 or 4 digits",
  })
})
// .superRefine((data, ctx) => {
//   // logujemy wartości miesiąca i roku dla debugowania
//   console.log("Month selected:", data.month);
//   console.log("Year selected:", data.year);

//   const monthMap: Record<string, number> = {
//     January: 0, February: 1, March: 2, April: 3,
//     May: 4, June: 5, July: 6, August: 7,
//     September: 8, October: 9, November: 10, December: 11,
//   };

//   const expMonth = monthMap[data.month.trim()]; // usuwamy spacje
//   const expYear = parseInt(data.year, 10);

//   if (expMonth === undefined || isNaN(expYear)) return;

//   const now = new Date();
//   const thisMonth = now.getMonth();
//   const thisYear = now.getFullYear();

//   if (expYear < thisYear || (expYear === thisYear && expMonth < thisMonth)) {
//     ctx.addIssue({
//       code: z.ZodIssueCode.custom,
//       message: "Expiration date cannot be in the past",
//       path: ["month"],
//     });
//     ctx.addIssue({
//       code: z.ZodIssueCode.custom,
//       message: "Expiration date cannot be in the past",
//       path: ["year"],
//     });
//   }
// });
    

    const schema = React.useMemo(
  () => checkoutSchema(sameAddressIsChecked, pickUpVisibility, deliveryFieldState, billingFieldState),
  [sameAddressIsChecked, pickUpVisibility, deliveryFieldState, billingFieldState]
);



  const formMethods = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      saveInfo: false,

      deliveryAddress:
      {
        firstName: "",
        lastName: "",
        country: "",
        stateCounty: "",
        address: "",
        city: "",
        zipPostalCode: "",
        apartment: "",
        companyName: "",
        phone: ""
      },

      billingAddress:
      {
        firstName: "",
        lastName: "",
        country: "",
        stateCounty: "",
        address: "",
        city: "",
        zipPostalCode: "",
        apartment: "",
        companyName: "",
        phone: ""
      },

      paymentMethod: false,
      cardNumber: "",
      month: "",
      year: "",
      secutityCode: "",
    }
  });

//   const AddressResetHandler = () => {
//   const { sameAddressIsChecked } = useAddressContext();
//   const pickUpVisibility = useCheckoutStore((state) => state.pickUpVisibility);
//   const { reset, getValues, setValue, watch } = useFormContext();

//   // Definiujemy pusty szablon adresu
//   const emptyAddress = {
//     firstName: "",
//     lastName: "",
//     country: "",
//     stateCounty: "",
//     address: "",
//     city: "",
//     zipPostalCode: "",
//     apartment: "",
//     companyName: "",
//     phone: ""
//   };

// const isManualBillingEdit = useRef(false);
// const [manualbillingEdit, setManualBillingEdit] = useState(false);

// useEffect(() => {
//   const subscription = watch((values, { name }) => {
//     if (name?.startsWith("billingAddress") && !sameAddressIsChecked) {
//       // użytkownik zaczął edytować billingAddress ręcznie
//       isManualBillingEdit.current = true;
//       setManualBillingEdit(true)
//     }
//     // reagujemy tylko, jeśli zmieniło się deliveryAddress.*
//     if (name?.startsWith("deliveryAddress") && sameAddressIsChecked) {
//       setValue("billingAddress", values.deliveryAddress, {
//         shouldValidate: true,
//         shouldDirty: true,
//       });
//     }
//   });

//   return () => subscription.unsubscribe();
// }, [sameAddressIsChecked, watch, setValue]);

// const prevSameAddressRef = useRef<boolean | null>(null);

// // useEffect(() => {
// //   if (!sameAddressIsChecked && !manualbillingEdit) {
// //       setValue("billingAddress", emptyAddress);
// //     }
// // }, [sameAddressIsChecked, manualbillingEdit])

// useEffect(() => {
//   if (prevSameAddressRef.current === sameAddressIsChecked) return;

//   if (sameAddressIsChecked) {
//     setValue("billingAddress", getValues("deliveryAddress"));
//     isManualBillingEdit.current = false; // przy synchronizacji wyłącz manualną flagę
//     setManualBillingEdit(false)
//   } 

//   prevSameAddressRef.current = sameAddressIsChecked;
// }, [sameAddressIsChecked, getValues, setValue]);

// useEffect(() => {
//   const currentDelivery = getValues("deliveryAddress");
//   if (pickUpVisibility && JSON.stringify(currentDelivery) !== JSON.stringify(emptyAddress)) {
//     setValue("deliveryAddress", emptyAddress);
//   }
// }, [pickUpVisibility, getValues, setValue]);

//   return null;
// };

const AddressResetHandler = () => {
  const { sameAddressIsChecked } = useAddressContext();
  const pickUpVisibility = useCheckoutStore((state) => state.pickUpVisibility);
  const { getValues, setValue, watch } = useFormContext();

  const emptyAddress = {
    firstName: "",
    lastName: "",
    country: "",
    stateCounty: "",
    address: "",
    city: "",
    zipPostalCode: "",
    apartment: "",
    companyName: "",
    phone: ""
  };

  useEffect(() => {
    if (!sameAddressIsChecked) return;

    const subscription = watch((values, { name }) => {
      if (name?.startsWith("deliveryAddress")) {
        setValue("billingAddress", values.deliveryAddress, {
          shouldValidate: true,
          shouldDirty: true,
        });
      }
    });

    return () => subscription.unsubscribe();
  }, [sameAddressIsChecked, watch, setValue]);

  useEffect(() => {
    if (sameAddressIsChecked) {
      setValue("billingAddress", getValues("deliveryAddress"));
    } 
    // else {
    //   // odznaczenie → resetujemy billing na pusty
    //   setValue("billingAddress", emptyAddress);
    // }
  }, [sameAddressIsChecked, getValues, setValue]);

  useEffect(() => {
      const currentDelivery = getValues("deliveryAddress");
      if (pickUpVisibility && JSON.stringify(currentDelivery) !== JSON.stringify(emptyAddress)) {
        setValue("deliveryAddress", emptyAddress);
      }
    }, [pickUpVisibility, getValues, setValue]);

  return null;
};

  return (
    <main>
      <div className={`absolute bg-[#ED7905] w-full justify-center top-[145px] h-36 max-lg:h-16 z-50 flex flex-col items-center gap-4`}>
        <h2 className="text-4xl text-white font-bold">Check Out!</h2>
      </div>
      {/* <Breadcrumbs currentPageName="Check Out!" bgColor="bg-[#ED7905]"/> */}
      <div className={`w-full absolute h-32 max-sm:h-32  ${styles.waveOrange} z-150 bg-[#ED7905]`}></div>
      <div className='flex flex-col relative'>
        <div className="absolute top-[-1px] h-2 w-full bg-primary-yellow z-10"></div>
          <section className={`flex max-sm:flex-col max-sm:px-8 px-[5%] pt-8 pb-28 max-lg:pb-16 max-sm:pb-4 bg-primary-yellow `}>
            <div className='w-[55%] max-sm:w-full flex flex-col items-start'>
              <div className='w-[80%] max-sm:w-full'>
                <h1 className="text-[#ED7905] font-bold text-5xl pt-32 max-sm:pt-4 pb-16">Ready To Refresh Yourself?</h1>
              </div>
              <FormProvider {...formMethods} >
                <AddressResetHandler/>
                <form id="checkoutForm" className='w-full' onSubmit={formMethods.handleSubmit((data) => {
                  console.log(data, {
                    deliveryType: deliveryType,
                    time: pickUpTime,
                    deliveryCompany: deliveryCompany
                  });

                  // const monthMap: Record<string, number> = {
                  //   January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
                  //   July: 6, August: 7, September: 8, October: 9, November: 10, December: 11,
                  // };

                  // const expMonth = monthMap[data.month];
                  // const expYear = parseInt(data.year, 10);

                  // const now = new Date();
                  // if (
                  //   expYear < now.getFullYear() ||
                  //   (expYear === now.getFullYear() && expMonth < now.getMonth())
                  // ) {
                  //   formMethods.setError("month", { type: "manual", message: "Expiration date cannot be in the past" });
                  //   formMethods.setError("year", { type: "manual", message: "Expiration date cannot be in the past" });
                  //   return;
                  // }

                  // jeśli wszystko ok — submit
                })}
                >
                  <div className='flex flex-col gap-8 w-full'>
                    <ContactInfo/>
                    <DeliveryWindow/>
                    {deliveryVisibility &&
                    <Address title="Delivery Address" instruction="Enter the address where you want your order to be delivered." addressType='deliveryAddress'/>}
                    <PaymentMethod/>
                    {((deliveryVisibility && !sameAddressIsChecked) || pickUpVisibility) && 
                    <Address title="Billing Address" instruction="Enter the billing address that matches your payment method." addressType='billingAddress'/>}
                  </div>
                </form>
              </FormProvider>
            </div>
            <div className={`w-[45%] max-sm:w-full flex justify-center`}>
              <MyOrderReview/>
            </div>
          </section>
        <div className={`w-full h-16 bg-primary-yellow z-150 ${styles.bottomWave} relative`}>
          <div className="absolute top-[-1px] h-2 w-full bg-primary-yellow z-[-10]"></div>
          <div className="absolute bottom-[-10px] h-[14px] w-full bg-[#6E8E2D] z-100"></div>
        </div>
      </div>
    </main>
  )
}

export default CheckoutPage
