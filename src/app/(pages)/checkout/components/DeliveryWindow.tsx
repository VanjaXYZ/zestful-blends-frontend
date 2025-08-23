"use client"

import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import DeliveryType from './DeliveryType'
import WalkingMenIcon from "@/assets/WalkingMenIcon.png";
import ClockIcon from "@/assets/ClockIcon.png";
import HomeIcon from "@/assets/HomeIcon.png";
import EditIcon from "@/assets/EditIcon.png";
import Delivery from "@/assets/delivery.png";
import Image from "next/image";
import { boolean } from 'zod';
import { useCheckoutStore } from '@/app/store/checkoutStore';

const DeliveryWindow = () => {

  const pickupTime = useCheckoutStore((state) => state.pickupTime);
  const pickUpVisibility = useCheckoutStore((state) => state.pickUpVisibility);
  const setDialogOpen = useCheckoutStore((state) => state.setDialogOpen);
  const deliveryVisibility = useCheckoutStore((state) => state.deliveryVisibility)
  const deliveryCompany = useCheckoutStore((state) => state.deliveryCompany)

  return (
    <div className='flex flex-col gap-4 w-[80%] sm:w-[90%] max-sm:w-full bg-white border border-gray-300 rounded-xl p-4' style={{boxShadow: "inset 0px 1px 2.5px rgba(0, 0, 0, 0.15)" }}>
      <h2 className="text-[#FCB131] font-bold text-2xl">Delivery</h2>
      <DeliveryType/>
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
      
    </div>
  )
}

export default DeliveryWindow