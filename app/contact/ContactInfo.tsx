import { contactData } from '@/Data/data'
import React from 'react'
import { FaEnvelope, FaMap, FaPhone } from 'react-icons/fa'

const ContactInfo = () => {
  return (
    <div data-aos="fade-left">
      <div className='flex items-center space-x-8 mt-6 mb-6'>
        <div className='w-16 h-10 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900
        flex items-center justify-center flex-col'>
          <FaPhone className='w-4 h-4 md:w-7 md:h-7  text-white'/>
        </div>
          <div>
            <h2 className='text-lg sm:text-xl text-black font-bold'>Phone</h2>
            <h2 className='text-base sm:text-lg text-black text-opacity-70'>{contactData.phone}</h2>
          </div>
      </div>
      <div className='flex items-center space-x-8 mt-6 mb-6'>
        <div className='w-16 h-10 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900
        flex items-center justify-center flex-col'>
          <FaEnvelope className='w-4 h-4 md:w-7 md:h-7 text-white'/>
        </div>
          <div>
            <h2 className='text-lg sm:text-xl text-black font-bold'>Email Address</h2>
            <h2 className='text-base sm:text-lg text-black text-opacity-70'>{contactData.email}</h2>
          </div>
      </div>
      <div className='flex items-center space-x-8 mt-6 mb-6'>
        <div className='w-16 h-10 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900
        flex items-center justify-center flex-col'>
          <FaMap className='w-4 h-4 md:w-7 md:h-7 text-white'/>
        </div>
          <div>
            <h2 className='text-lg sm:text-xl text-black font-bold'>Address</h2>
            <h2 className='text-base sm:text-lg text-black text-opacity-70'>{contactData.address}</h2>
          </div>
      </div>
    </div>
  )
}

export default ContactInfo
