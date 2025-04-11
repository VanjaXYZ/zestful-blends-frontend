import React from 'react'
import Breadcrumbs from "@/app/custom_components/shared/Breadcrumbs";
import ContactInfo from './components/ContactInfo';
import PaymentMethod from './components/PaymentMethod';
import MyOrderReview from './components/MyOrderReview';
import styles from './Checkout.module.css'

const page = () => {
  return (
    <main>
      <Breadcrumbs currentPageName="Check Out!" bgColor="bg-[#ED7905]" />
      <div className={`w-full h-48 ${styles.waveOrange}`}>
        <div className='w-full h-full bg-[#ED7905]'></div>
      </div>
      <div className={`flex px-32 pt-8 pb-32 bg-[#FBEEAC] ${styles.bottomWave}`}>
        <div className='w-[60%] flex flex-col items-star'>
          <div className='w-[80%]'>
            <h1 className="text-[#ED7905] font-bold text-5xl pt-32 pb-16">Ready To Refresh Yourself?</h1>
          </div>
          <ContactInfo/>
          <PaymentMethod/>
        </div>
        <div className='w-[40%] flex justify-center'>
          <MyOrderReview/>
        </div>
      </div>
    </main>
  )
}

export default page