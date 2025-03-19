import { blogs } from '@/Data/data'
import React from 'react'
import BlogCard from './BlogCard'

const Blog = () => {
  return (
    <>
    <div className='pt-14 pb-14 bg-[#F2F2F2]'>
    <div data-aos="fade-up" className="flex justify-center text-white">
        <h2 className="about-heading bg-heading">
          <span style={{ color: "blue", fontSize: "35px" }}>B</span>
          <span>log</span>
        </h2>
      </div>
      <div className='w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 xl:cols-2 gap-10 items-center'>
        {
            blogs.map((blog)=>{
                return <div key={blog.id}>
                    <BlogCard blog={blog}/>

                </div>
            })
        }

      </div>
      
    </div>
    </>
  )
}

export default Blog
