import React from 'react'
import Breadcrumbs from "@/app/custom_components/shared/Breadcrumbs";
import ContactInfo from './components/ContactInfo';
import PaymentMethod from './components/PaymentMethod';
import MyOrderReview from './components/MyOrderReview';
import styles from './Checkout.module.css'

const page = () => {

  return (
    <main>
      <div className={`absolute bg-[#ED7905] w-full justify-center top-[145px] h-36 max-lg:h-16 z-[100] flex flex-col items-center gap-4`}>
        <h2 className="text-4xl text-white font-bold">Check Out!</h2>
      </div>
      {/* <Breadcrumbs currentPageName="Check Out!" bgColor="bg-[#ED7905]"/> */}
      <div className={`w-full absolute h-32 max-sm:h-32  ${styles.waveOrange} z-150 bg-[#ED7905]`}></div>
      <div className='flex flex-col'>
        <section className={`flex max-sm:flex-col max-sm:px-8 px-[5%] pt-8 pb-28 max-lg:pb-16 max-sm:pb-4 bg-[#FBEEAC] ${styles.bottomWave}></div> `}>
          <div className='w-[55%] max-sm:w-full flex flex-col items-start'>
            <div className='w-[80%] max-sm:w-full'>
              <h1 className="text-[#ED7905] font-bold text-5xl pt-32 max-sm:pt-4 pb-16">Ready To Refresh Yourself?</h1>
            </div>
            <ContactInfo/>
            <PaymentMethod/>
          </div>
          <div className={`w-[45%] max-sm:w-full flex justify-center`}>
            <MyOrderReview/>
          </div>
        </section>
        <div className={`w-full h-16 bg-[#FBEEAC] z-150 ${styles.bottomWave}`}></div>
      </div>
    </main>
  )
}

export default page
