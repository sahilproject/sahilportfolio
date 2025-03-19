import Image from "next/image";
import "./Services.css"


type props={
    service: {
        id: number;
        title: string;
        description: string;
        icon: string;
    };
}

const ServiceCard = ({service}: props) => {


  return (
    <div data-aos="zoom-in-up" className="shadow-2xl p-6 rounded-lg s-dow">
      <Image src={service.icon} alt={service.title} width={50} height={50} />
      <h1 className="mt-4 text-lg font-bold text-white-100">{service.title}</h1>
      <p className="mt-3 text-sm text-black text-opacity-80">{service.description}</p>
    </div>
  )
}

export default ServiceCard
