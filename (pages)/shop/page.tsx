import Breadcrumbs from '@/app/custom_components/shared/Breadcrumbs'
import React from 'react'
import ShopPage from './components/ShopPage'

const page = () => {
  return (
    <main className=''>
        <Breadcrumbs currentPageName='Shop' />
        <section className="lg:mt-24">
            <ShopPage />
        </section>
    </main>
  )
}

export default page
