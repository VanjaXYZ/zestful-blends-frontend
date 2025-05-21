import React from 'react'
import styles from '../checkout/Checkout.module.css'
import {prevOrders} from './components/prevOrders'
import orderNumberIcon from './assets/orderNumber.png'
import clockIcon from './assets/clock.png'
import cardIcon from './assets/card.png'
import cartIcon from './assets/cart.png'
import { sumsProductsPrices } from './components/prevOrders'

const page = () => {

  return (
    <main>
      <div className={`absolute bg-[#ED7905] w-full justify-center top-[145px] h-36 max-lg:h-16 z-[100] flex flex-col items-center gap-4`}>
        <h1 className="text-4xl text-white font-bold">User Profile</h1>
      </div>
      <div className={`w-full absolute h-32 max-lg:h-32 ${styles.waveOrange} z-150 bg-[#ED7905]`}></div>
      <section className={`flex flex-col items-center max-lg:px-8 px-[5%] max-lg:px-[4%] pb-28 max-lg:pb-16 max-lg:pb-8 bg-[#FBEEAC] ${styles.bottomWave}`}>
        <h1 className="text-[#ED7905] font-bold text-4xl pt-16 max-lg:pt-4 pb-16 max-lg:pb-8">History Order</h1>

        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-x-8 gap-y-16 w-[100%] pb-8 justify-between">
          {prevOrders.map((order, index) => 
            <div className='flex flex-col gap-12 bg-white border-2 border-[#ED7905] border-dashed p-8 max-lg:px-4 rounded-3xl' key={`${order.id}-${order.number}`}>
              <h2 className="font-bold text-[#FCB131] text-2xl">My Order Review</h2>

              <div className='flex flex-col gap-2 border-2 border-[#FCB131] p-4 rounded-3xl'>
                <div className='flex gap-2 items-center'>
                  <img alt="orderNumberIcon" src={orderNumberIcon.src}></img>
                  <p>Order Number: </p>
                  <p>{order.number}</p>
                </div>

                <div className='flex gap-2 items-center'>
                  <img alt="clockIcon" src={clockIcon.src}></img>
                  <p>Order Date: </p>
                  <p>{order.date}</p>
                </div>

                <div className='flex gap-2 items-center'>
                  <img alt="cardIcon" src={cardIcon.src}></img>
                  <p>Payment: </p>
                  <p>{order.payment}</p>
                </div>

                <div className='flex gap-2 items-center'>
                  <img alt='cartIcon' src={cartIcon.src}></img>
                  <p>Your Choose: </p>
                  <p>{order.delivery}</p>
                </div>
              </div>

              <div className='flex flex-col gap-4'>
                {order.products.map((product) => 
                  <div key={product.id} className='border-b-2 border-gray-300'>
                    <div className='flex flex-col'>
                      <h5 className='font-bold pb-1'>{product.name}</h5>
                      {product.details.map((detail, index)=> 
                        <p key={`${product.id}-${detail}-${index}`} className='text-sm'>{detail}</p>
                      )}
                    </div>
                    <p className='text-end'>{product.price.toFixed(2)}</p>
                  </div>
                )}
              </div>

              <div className='flex flex-col gap-4'>
                <div className='flex justify-between'>
                  <h6 className='font-bold'>Sub Total: </h6>
                  <p>$ {(sumsProductsPrices[index]).toFixed(2)}</p>
                </div>

                <div className='flex justify-between'>
                  <h6 className='font-bold'>Discounts: </h6>
                  <p>-$ {order.discount.toFixed(2)}</p>
                </div>

                <div className='flex justify-between'>
                  <h6 className='font-bold'>Tips: </h6>
                  <p>$ {order.tip.toFixed(2)}</p>
                </div>

                <div className='flex justify-between'>
                  <h6 className='font-bold'>Tax: </h6>
                  <p>$ {order.tax.toFixed(2)}</p>
                </div>

                <div className='flex justify-between'>
                  <h2 className='font-bold text-2xl'>Total: </h2>
                  <p className='font-bold text-2xl'>$ {(sumsProductsPrices[index] - order.discount + order.tip + order.tax).toFixed(2)}</p>
                </div>
              </div>

            </div>
          )}
        </div>
        
      </section>
    </main>
  )
}

export default page