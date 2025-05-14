import React from 'react'
import styles from '../checkout/Checkout.module.css'

const page = () => {

  let username = 'Username'

  interface buttonDescription {
    id: number,
    title: string,
    description: string
  }

  const buttonsDescriptions: buttonDescription[] = [
    {
      id: 1,
      title: 'Your Info',
      description: 'Example text...',
    },
    {
      id: 2,
      title: 'History',
      description: 'Example text...',
    },
    {
      id: 3,
      title: 'Wish-List',
      description: 'Example text...',
    },
    {
      id: 4,
      title: 'Customer Service',
      description: 'Example text...',
    },
  ]

  return (
    <main>
      <div className={`absolute bg-[#ED7905] w-full justify-center top-[145px] h-36 max-lg:h-16 z-[100] flex flex-col items-center gap-4`}>
        <h1 className="text-4xl text-white font-bold">User Profile</h1>
      </div>
      <div className={`w-full absolute h-32 max-sm:h-32 ${styles.waveOrange} z-150 bg-[#ED7905]`}></div>
      
      <section className={`flex flex-col items-center max-sm:px-8 px-[5%] pb-28 max-lg:pb-16 max-sm:pb-4 bg-[#FBEEAC] ${styles.bottomWave}`}>
        <h1 className="text-[#ED7905] font-bold text-4xl pt-16 max-sm:pt-4 pb-16">User Account</h1>
        <div className='bg-white w-[80%] max-sm:w-[100%] p-[5%] border-[#FCB131] border-4 rounded-3xl mb-16'>
          <h2 className="text-[#FCB131] text-2xl font-bold pb-8">Hi, {username}!</h2>

          <div className='flex flex-col gap-4'>
            {buttonsDescriptions.map((buttonDescription) => 
              <button key={buttonDescription.title} className="text-left border-[#FCB131] border p-2 rounded-xl shadow-[0px_4px_10px_#FCB131] shadow">
                <h2 className='font-bold text-xl'>{buttonDescription.title}</h2>
                <p>{buttonDescription.description}</p>
              </button>
            )}
          </div>
          
          <div className='mt-8 flex gap-4 w-full justify-center'>
            <p className='text-[#3C93BE] text-xl'>Not your account?</p>
            <button className='text-[#3C93BE] font-bold text-xl'>Logout</button>
          </div>
          
        </div>
      </section>
    </main>
  )
}

export default page