import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const Invitation = () => {
  const services = useLoaderData();
  const foodVarieties = services[4].varieties;

  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <div className="my-6">
      <h1 className="text-3xl md:text-5xl text-orange font-bold text-center my-8">
        Invitation <span className="text-black">and</span> Stationary
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center gap-4 px-5">
        {foodVarieties.map((variety) => (
          <div
            data-aos="zoom-in-down"
            className="space-y-2 p-5 rounded-sm flex flex-col bg-orange text-black"
            key={variety.id}
          >
            <img
              className="w-full h-56 rounded-sm"
              src={variety.picture}
              alt="Picture"
            />

            <h1 className="text-3xl grow font-bold">{variety.title}</h1>
            <p className="flex-grow">{variety.description}</p>
            <button className="w-full bg-red py-2 rounded-sm text-white text-3xl">
              {variety.price}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Invitation;
