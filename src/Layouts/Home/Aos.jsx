import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Aos = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <div className="mx-auto px-4 md:px-8 my-10 md:my-16">
      <h1 className="text-3xl md:text-4xl font-bold text-center my-5">
        Memories
      </h1>
      <div className="grid grid-cols-1 w-96 mx-auto space-y-10">
        <img
          data-aos="slide-right"
          className=""
          src="https://i.ibb.co/6N777DH/memory-06.jpg"
          alt=""
        />
        <img className="" src="https://i.ibb.co/WFrxFX7/memory-02.jpg" alt="" />
        <img className="" src="https://i.ibb.co/BzrWv29/memory-03.jpg" alt="" />
        <img className="" src="https://i.ibb.co/L8w9xDB/memory-04.jpg" alt="" />
        <img className="" src="https://i.ibb.co/jbW0bqG/memory-05.jpg" alt="" />
        <img
          className=""
          src="
            https://i.ibb.co/7Jgb6wg/memory-01.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Aos;
