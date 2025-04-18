import React from 'react'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'

const Contact = () => {
  return (
    <div className='pt-14 pb-14 bg-[#ececec] '>
<div className='grid grid-cols-1 xl:grid-cols-2 max-w-screen-xl px-4 mx-auto items-center gap-10 mt-10'>
{/* contact form  */}
             <div>
                <ContactForm/>
             </div>
             {/* contact info  */}
             <div className='xl:mx-auto'>
                <ContactInfo/>
             </div>
        </div>
      
    </div>
  )
}

export default Contact
