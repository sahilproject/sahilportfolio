import Image from 'next/image';
import React from 'react'
import { FaStar } from 'react-icons/fa';
 

type props ={
    review: {
        name: string;
        review: string;
        rating: number;
        image: string;
    }
}


const ReviewCard = ({review}:props) => {
  return (

    <div className='rounded-md overflow-hidden bg-[#6fa8dc] m-4 text-white ' style={{minHeight:"300px"}}>
      <div className='p-6'>
        <h2 className='text-center py-2'>Review</h2>
          <p className='text-opacity-70'>{review.review}</p>
          <Image src={review.image} alt={review.name} width={50} height={50} className='mx-auto my-2'/>
      </div>
      <div className='my-2 px-6 py-3 w-fit mx-auto rounded-full flex items-center space-x-3 bg-indigo-900 font-bold'>
        <span>{review.rating}/5</span>
        <FaStar className='text-yellow-500 '/>
      </div>
    </div>
  )
}

export default ReviewCard
