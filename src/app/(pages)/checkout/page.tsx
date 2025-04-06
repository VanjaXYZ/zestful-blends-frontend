import React from 'react'
import Breadcrumbs from "@/app/custom_components/shared/Breadcrumbs";
import ContactInfo from './components/ContactInfo';
import PaymentMethod from './components/PaymentMethod';
import MyOrderReview from './components/MyOrderReview';

const page = () => {
  return (
    <main className='bg-[#FBEEAC] min-h-screen'>
      <Breadcrumbs currentPageName="Check Out!"/> {/*header to edit- TODO*/}
      <div className="flex justify-center mt-4 mb-32 p-32">
        <div className='w-[60%] flex flex-col justify-center items-center'>
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