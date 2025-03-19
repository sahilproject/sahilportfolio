import { navlinks } from "@/constant/constant"
import Link from "next/link"
import { HiBars3BottomRight } from "react-icons/hi2"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";


type props ={
  openNav:()=>void;
}



const Nav = ({openNav}:props) => {
  return (
    <>
    <div className="fixed h-[12vh] z-[10] bg-[#F2F2F2] w-full ">
      <div className="flex items-center h-full justify-between w-[-95%] sm:w-[90%] xl:w-[80%] mx-auto">
       {/* logo  */}
       <h2 className="text-center ml-[2.5rem] mb-[0.7rem] sm:ml-0 text-bg text-1xl sm:text-4xl md:text-5xl lg:text-2xl pt-4  xl:text-3xl font-bold md:leading-[3.5rem] xl:leading
        -[10rem] ">SNAPPYWEB</h2>
      {/* nav links  */}
      <div className="flex items-center space-x-10">
        <div className="hidden lg:flex items-center space-x-8 text-gray">
         {
          navlinks.map((navlink)=>{
            return <Link key={navlink.id} href={navlink.url}>
              <p className="nav-links" >{navlink.label}</p> </Link>
        })
         } 
         </div>
      </div>
      {/* hire btn  */}
        <div className="flex items-center space-x-3" >
          <button  data-aos="fade-down" className=" text-blue-800 font-semibold sm:text-base text-sm p-2  bg-white rounded-lg">
          <Link href={"https://www.linkedin.com/in/sahil-rahaman-2612a1299/"}>
            <FaLinkedin  />
          </Link>
          </button>
          <button  data-aos="fade-down" className=" text-blue-800 font-semibold sm:text-base text-sm p-2  bg-white rounded-lg">
          <Link href={"https://github.com/dashboard"}>
            <FaGithub />
          </Link>
          </button>
          <button  data-aos="fade-down" className=" text-blue-800 font-semibold sm:text-base text-sm p-2 bg-white rounded-lg">
          <Link href={"https://www.instagram.com/sahilzayn._?igsh=MWYxNjM1ejYxd3FzZg=="}>
            <FaInstagram />
          </Link>
          </button>
          <button data-aos="fade-down" className=" text-blue-800 font-semibold sm:text-base text-sm p-2 bg-white rounded-lg">
          <Link href={"https://www.facebook.com/profile.php?id=100013273689316"}>
            <FaFacebook />
          </Link>
          </button>
          
          {/* menu icon  */}
          <HiBars3BottomRight onClick={openNav} className="w-8 h-8 mr-[1rem] cursor-pointer text-black lg:hidden"/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Nav
