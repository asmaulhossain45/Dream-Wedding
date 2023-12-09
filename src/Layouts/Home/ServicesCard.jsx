import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";

const ServicesCard = () => {
  const services = useLoaderData();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <div className="mx-auto px-4 md:px-8 my-10 md:my-16">
      <h1 className="text-3xl text-black md:text-5xl font-bold text-center mb-5 md:mb-10">
        Our <span className="text-red">Services</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center gap-4">
        {services.map((service) => (
          <div
            data-aos="flip-left"
            className=" space-y-2 p-5 rounded-2xl flex flex-col bg-orange text-black hover:scale-105 duration-300"
            key={service.id}
          >
            <h1 className="text-xl text-black flex-grow font-bold mb-2">{service.title}</h1>
            <img
              className="w-32 mx-auto border-2 p-4 rounded-full mb-5"
              src={service.picture}
              alt="Picture"
            />
            <span className="pt-3 text-white font-bold text-2xl">{service.price}</span>
            <p className="flex-grow text-black">{service.description}</p>
            <Link to={`./service/${service.id}`}>
              <button className="btn w-full bg-red border-0 hover:bg-red hover:text-black text-white">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCard;
