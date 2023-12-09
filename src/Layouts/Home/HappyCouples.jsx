/* eslint-disable react/no-unescaped-entities */
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const HappyCouples = () => {
  return (
    <div className="mx-auto px-4 md:px-8 my-10 md:my-16">
      <h1 className="text-3xl text-black md:text-5xl font-bold text-center mb-5 md:mb-10">
        <span className="text-orange">Happy</span> Couple
      </h1>
      <div className="flex flex-col md:flex-row w-full text-center">
        <div className="grid card place-items-center space-y-3 mt-4 md:w-2/4">
          <img
            className="rounded-full w-60 border-8 border-orange"
            src="https://i.ibb.co/BGg8JNk/Groom-01.jpg"
            alt=""
          />
          <h1 className="text-2xl text-black font-semibold">
            Alexia Anderson
          </h1>
          <p className="px-6 text-sm text-slate2">
            Alexia Anderson is someone who places a strong emphasis on their
            family's well-being and happiness.
          </p>
          <ul className="flex gap-2 text-xs text-orange list-none ">
            <li className="border-2 border-orange rounded-full p-1 hover:scale-125 duration-300">
              <FaFacebookF></FaFacebookF>
            </li>
            <li className="border-2 border-orange rounded-full p-1 hover:scale-125 duration-300">
              <FaTwitter></FaTwitter>
            </li>
            <li className="border-2 border-orange rounded-full p-1 hover:scale-125 duration-300">
              <FaInstagram></FaInstagram>
            </li>
            <li className="border-2 border-orange rounded-full p-1 hover:scale-125 duration-300">
              <FaLinkedinIn></FaLinkedinIn>
            </li>
          </ul>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="grid card place-items-center space-y-3 mt-4 md:w-2/4">
          <img
            className="rounded-full w-60 border-8 border-orange"
            src="https://i.ibb.co/FDNBz20/Bride-01.jpg"
            alt=""
          />
          <h1 className="text-2xl text-slate-700 font-semibold">
            Olivia Parker
          </h1>
          <p className="px-6 text-sm text-slate2">
            Olivia Parker plays a central role in maintaining a loving,
            supportive abd taking care of responsibilities.
          </p>
          <div className="flex gap-2 text-xs text-orange list-none">
            <li className="border-2 border-orange rounded-full p-1 hover:scale-125 duration-300">
              <FaFacebookF></FaFacebookF>
            </li>
            <li className="border-2 border-orange rounded-full p-1 hover:scale-125 duration-300">
              <FaTwitter></FaTwitter>
            </li>
            <li className="border-2 border-orange rounded-full p-1 hover:scale-125 duration-300">
              <FaInstagram></FaInstagram>
            </li>
            <li className="border-2 border-orange rounded-full p-1 hover:scale-125 duration-300">
              <FaLinkedinIn></FaLinkedinIn>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyCouples;
