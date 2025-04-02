import React from 'react'
import Breadcrumbs from "@/app/custom_components/shared/Breadcrumbs";
import ContactInfo from './components/ContactInfo';

const page = () => {
  return (
    <main>
      {/* <Breadcrumbs currentPageName="Check Out!"/> */}
      <div className="flex">
        <div>
          <p>Ready To Refresh Yourself?</p>
          <ContactInfo/>
        </div>
        <div>

        </div>
      </div>
    </main>
  )
}

export default page