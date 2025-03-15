import React from 'react'
import SkillCard from './SkillCard'
import {skills} from '@/Data/data'


const Skills = () => {
  return (
    <>
    <div className='pt-15 pb-16 bg-[#ececec]'>
    <div data-aos="fade-up" className="flex justify-center text-white">
        <h2 className="about-heading bg-heading">
          <span style={{color:"blue",fontSize:"36px"}}>S</span>kills
        </h2>
      </div>
      <div className=' mt-20 w-[80%] mx-auto grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center'>
        {
            skills.map((skill)=>{
                return <div key={skill.id}>
                    <SkillCard skill={skill}/>
                </div>
            })
        }
      </div>
    </div>
    </>
  )
}

export default Skills
