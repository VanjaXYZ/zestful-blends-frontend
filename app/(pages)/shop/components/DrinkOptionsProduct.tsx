import Image from 'next/image';
import React from 'react'

const DrinkOptionsProduct = ({ productName, imageSrc } : {
    productName: string;
    imageSrc: string
}) => {
  return (
    <div className='flex justify-center flex-col items-center'>
      <Image
        src={imageSrc}
        width={300}
        height={300}
        alt='Product Image'
        className='rounded-full'
      />
      <h2 className='pt-12 font-bold'>
        {productName}
      </h2>
    </div>
  )
}

export default DrinkOptionsProduct
