import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const Music = () => {
  const services = useLoaderData();
  const foodVarieties = services[1].varieties;

  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <div className="my-6">
      <h1 className="text-3xl md:text-5xl text-red font-bold text-center my-8">
        Music <span className="text-black">and</span> Entertainment
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center gap-4 px-5">
        {foodVarieties.map((variety) => (
          <div
            data-aos="flip-right"
            className="space-y-2 p-5 rounded-sm flex flex-col text-black shadow-xl border-t-4 border-red"
            key={variety.id}
          >
            <h1 className="text-3xl grow text-red font-bold">{variety.title}</h1>
            <img
              className="w-full h-56 rounded-sm"
              src={variety.picture}
              alt="Picture"
            />

            <p className="grow">{variety.description}</p>
            <button className="w-full bg-red py-2 rounded-sm text-white text-3xl">
              {variety.price}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Music;
