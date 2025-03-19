import React from 'react'

const Footer = () => {
  return (
    <div className='pt-16 pb-7 bg-[#D9D9D9]'>
      <div className=' flex items-center justify-center pb-6'>
        <div>
        <h2 className='ml-[-1.5rem] sm:ml-0 text-bg text-1xl sm:text-2xl md:text-5xl lg:text-2xl pt-4  xl:text-3xl font-bold md:leading-[3.5rem] xl:leading
        -[10rem]'>SNAPPYWEB</h2>
        </div>
      </div>
       <div className='flex items-center flex-wrap justify-center space-x-10 space-y-4 text-black font-bold'>
         <div>Home</div>
         <div>Services</div>
         <div>Project</div>
         <div>Reviews</div>
         <div style={{marginBottom:"18px"}}>Contact</div>
       </div>
       <p className='text-gray text-opacity-60 text-center mt-7 '>© 2025 All Rights Reserved by SnappyWeb.</p>
    </div>
  )
}

export default Footer
