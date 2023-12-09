import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SomeMemories = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <div className="mx-auto px-4 md:px-8 my-10 md:my-16">
      <h1 className="text-3xl text-red md:text-5xl font-bold text-center my-5">
        <span className="text-orange">Some</span> Memories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <img
          data-aos="zoom-in-up"
          src="https://i.ibb.co/6N777DH/memory-06.jpg"
          alt=""
        />
        <img
          data-aos="zoom-in-up"
          src="https://i.ibb.co/WFrxFX7/memory-02.jpg"
          alt=""
        />
        <img
          data-aos="zoom-in-up"
          src="https://i.ibb.co/BzrWv29/memory-03.jpg"
          alt=""
        />
        <img
          data-aos="zoom-in-up"
          src="https://i.ibb.co/L8w9xDB/memory-04.jpg"
          alt=""
        />
        <img
          data-aos="zoom-in-up"
          src="https://i.ibb.co/jbW0bqG/memory-05.jpg"
          alt=""
        />
        <img
          data-aos="zoom-in-up"
          src="
        https://i.ibb.co/7Jgb6wg/memory-01.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default SomeMemories;
