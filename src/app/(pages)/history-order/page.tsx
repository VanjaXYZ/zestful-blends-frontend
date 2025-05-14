import React from 'react'
import styles from '../checkout/Checkout.module.css'

const page = () => {

  return (
    <main>
      <div className={`absolute bg-[#ED7905] w-full justify-center top-[145px] h-36 max-lg:h-16 z-[100] flex flex-col items-center gap-4`}>
        <h1 className="text-4xl text-white font-bold">User Profile</h1>
      </div>
      <div className={`w-full absolute h-32 max-sm:h-32 ${styles.waveOrange} z-150 bg-[#ED7905]`}></div>
      
      <section className={`flex flex-col items-center max-sm:px-8 px-[5%] pb-28 max-lg:pb-16 max-sm:pb-4 bg-[#FBEEAC] ${styles.bottomWave}`}>
        <h1 className="text-[#ED7905] font-bold text-4xl pt-16 max-sm:pt-4 pb-16">History Order</h1>
        
      </section>
    </main>
  )
}

export default page