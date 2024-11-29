import { Button } from '@/components/ui/button';
import React from 'react'

const DrinkName = ({
    productName
}: {
    productName: string;
}) => {
  return (
    <div className='flex justify-center'>
      <Button className='bg-primary-dark-orange font-semibold rounded-full 
      w-[150px] hover:bg-primary-orange transition-colors mb-6 text-black
      flex'>
        {productName}
      </Button>
    </div>
  )
}

export default DrinkName

