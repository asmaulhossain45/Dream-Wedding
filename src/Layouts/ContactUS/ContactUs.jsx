import GoogleMapReact from "google-map-react";
import { ImLocation } from "react-icons/im";
import { MdCall } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const ContactUs = () => {
  const defaultProps = {
    center: {
      lat: 24.4999071,
      lng: 89.1395738,
    },
    zoom: 11,
  };

  return (
    <div className="">
      <div className="w-5/6 md:w-3/4 lg:w-4/6 mx-auto rounded-xl my-6 md:my-36 lg:my-48 bg-orange">
        <div className="bg-red py-2 rounded-t-md">
          <h1 className="text-xl font-bold text-center">Send us a Message</h1>
          <p className="text-sm text-center">We will get back to you</p>
        </div>
        <div className="md:grid grid-cols-2 gap-x-6 place-content-center w-5/6 mx-auto mt-4">
          <div className="mt-2">
            <h1 className="font-semibold">Your Name</h1>
            <input
              className="outline-0 py-2 px-4 w-full rounded-md mt-1 bg-transparent  border-b-2 border-gray-600"
              type="text"
            />
          </div>
          <div className="mt-2">
            <h1 className="font-semibold">E-mail</h1>
            <input
              className="outline-0 py-2 px-4 w-full rounded-md mt-1  bg-transparent  border-b-2 border-gray-600 "
              type="text"
            />
          </div>
          <div className="mt-2">
            <h1 className="font-semibold">Phone Number</h1>
            <input
              className="outline-0 py-2 px-4 w-full rounded-md mt-1  bg-transparent  border-b-2 border-gray-600 "
              type="text"
            />
          </div>
          <div className="mt-2">
            <h1 className="font-semibold">Address</h1>
            <input
              className="outline-0 py-2 px-4 w-full rounded-md mt-1  bg-transparent  border-b-2 border-gray-600 "
              type="text"
            />
          </div>
        </div>
        <div className="w-5/6 mx-auto mt-4 pb-8">
          <h1 className="font-semibold mb-2">Your Message</h1>
          <textarea
            className="w-full border-2 border-gray-600 bg-transparent outline-0 rounded-md p-4"
            name=""
            id=""
            rows="3"
          ></textarea>
        </div>
      </div>
      <div className=" md:flex justify-evenly items-center mx-auto bg-gradient-to-r from-red to-orange">
        <div className="w-full mx-auto h-[300px]">
          <div className="flex flex-col justify-center px-6 md:px-12 py-[98px]">
            <h1
              className="text-4xl font-bold
          "
            >
              Contact Details
            </h1>
            <p className="flex items-center my-2 gap-1">
              <span>
                <ImLocation></ImLocation>
              </span>
              187 Singra Bridge, Singra, Bangladesh
            </p>
            <p className="flex items-center gap-1">
              <span>
                <MdCall></MdCall>
              </span>
              01234567899
            </p>
          </div>
        </div>
        <div className="h-[300px] w-full mx-auto">
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
