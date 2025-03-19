import { servicesInfo } from '@/Data/data'
import ServiceCard from "./ServiceCard"


const Services = () => {
  return (
    <>
    <div id='services' className='pt-22 pb-18 bg-[#F2F2F2] text-white'>
      <div data-aos="fade-up" className="flex justify-center ">
        <h2 className="about-heading bg-heading">
          <span style={{color:"blue",fontSize:"36px"}}>S</span>ervices
        </h2>
      </div>
      <div className='text-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-[80%] mx-auto items-center mt-14'>
        {
            servicesInfo.map((service)=>{
                return <div key={service.id}>
                    <ServiceCard service={service}/>
                </div>
            })
        }
      </div>

    </div>
    </>
  )
}

export default Services
