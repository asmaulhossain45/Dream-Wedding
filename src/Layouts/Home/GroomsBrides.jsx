import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const GroomsBrides = () => {
  const [groomsMen, setGroomsMen] = useState([]);
  const [bridesMaid, setBridesMaid] = useState([]);
  useEffect(() => {
    fetch("/public/GroomsMen.json")
      .then((res) => res.json())
      .then((data) => setGroomsMen(data));
  }, []);
  useEffect(() => {
    fetch("/public/BridesMaid.json")
      .then((res) => res.json())
      .then((data) => setBridesMaid(data));
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <div className="mx-auto px-4 md:px-8 my-10 md:my-16">
      <div className="flex text-white justify-center my-5 text-xl font-semibold">
        <button className="bg-red p-2 rounded-l-sm">Groomsmen</button>
        <button className="bg-orange text-black p-2 rounded-r-sm">Bridesmaid</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-5">
        {groomsMen.map((grooms) => (
          <div
            data-aos="zoom-in-up"
            className="bg-white shadow-md text-center space-y-1 "
            key={grooms.id}
          >
            <img
              className="w-full px-4 pt-4"
              src={grooms.picture}
              alt={grooms.full_name}
            />
            <h1 className="text-black font-semibold">{grooms.full_name}</h1>
            <p className="text-xs">{grooms.work}</p>
            <ul className="flex justify-center gap-1 text-[8px] text-red list-none pt-2 pb-4">
              <li className="border-2 border-red rounded-full p-1  hover:scale-125 duration-300">
                <a href={grooms.facebook_link}>
                  <FaFacebookF></FaFacebookF>
                </a>
              </li>
              <li className="border-2 border-red rounded-full p-1  hover:scale-125 duration-300">
                <a href={grooms.twitter_link}>
                  <FaTwitter></FaTwitter>
                </a>
              </li>
              <li className="border-2 border-red rounded-full p-1  hover:scale-125 duration-300">
                <a href={grooms.instagram_link}>
                  <FaInstagram></FaInstagram>
                </a>
              </li>
              <li className="border-2 border-red rounded-full p-1  hover:scale-125 duration-300">
                <a href={grooms.linkedin_link}>
                  <FaLinkedinIn></FaLinkedinIn>
                </a>
              </li>
            </ul>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {bridesMaid.map((brides) => (
          <div
            data-aos="zoom-in-up"
            className="bg-white shadow-md text-center space-y-1"
            key={brides.id}
          >
            <img
              className="w-full px-4 pt-4"
              src={brides.picture}
              alt={brides.full_name}
            />
            <h1 className="text-black font-semibold">{brides.full_name}</h1>
            <p className="text-xs">{brides.work}</p>
            <ul className="flex justify-center gap-1 text-[8px] text-orange list-none pt-2 pb-4">
              <li className="border-2 border-orange rounded-full p-1  hover:scale-125 duration-300">
                <a href={brides.facebook_link}>
                  <FaFacebookF></FaFacebookF>
                </a>
              </li>
              <li className="border-2 border-orange rounded-full p-1  hover:scale-125 duration-300">
                <a href={brides.twitter_link}>
                  <FaTwitter></FaTwitter>
                </a>
              </li>
              <li className="border-2 border-orange rounded-full p-1  hover:scale-125 duration-300">
                <a href={brides.instagram_link}>
                  <FaInstagram></FaInstagram>
                </a>
              </li>
              <li className="border-2 border-orange rounded-full p-1  hover:scale-125 duration-300">
                <a href={brides.linkedin_link}>
                  <FaLinkedinIn></FaLinkedinIn>
                </a>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroomsBrides;
