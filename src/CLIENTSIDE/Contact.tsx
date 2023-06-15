import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaYoutube,
  FaClock,
} from "react-icons/fa";
import photo from "../images/home.jpg";
import photo2 from "../images/home1.jpg";
import photo3 from "../images/image2.jpeg";
import photo4 from "../images/image3.jpeg";
import photo5 from "../images/images4.jpeg";

const Contact = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  bg-white p-2">
      <div className="p-10">
        <h2 className="text-2xl font-bold mb-8">Contact Us</h2>
        <p className="text-lg text-gray-500 mb-12" style={{ lineHeight: "2" }}>
          We would love to hear from you! If you have any questions,<br></br>
          comments or feedback, please don't hesitate to get in touch<br></br>
          with us using the contact details below.
        </p>
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <div className="flex items-center mb-2">
            <span className="text-m mr-2">
              <FaEnvelope />
            </span>
            <span className="text-m text-[#95873C]  font-semibold">Email:</span>
          </div>
          <div className="text-m text-gray-500 mb-4">
            guan@gmail.com
          </div>
        </div>
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <div className="flex items-center mb-2">
            <span className="text-m mr-2">
              <FaWhatsapp />
            </span>
            <span className="text-m text-[#95873C]  font-semibold">Phone:</span>
          </div>
          <div className="text-m text-gray-500 mb-4">0795070535</div>
        </div>
        <div className="mb-8">
          <div className="flex items-center mb-2">
            <span className="text-m mr-2">
              <FaEnvelope />
            </span>
            <span className="text-m text-[#95873C]  font-semibold">Address:</span>
          </div>
          <div className="text-m text-gray-500">
            Guan House, Moi Kileleshwa<br></br>P.O.BOX 416-00100
          </div>
        </div>

        <h1 className="text-[#95873C]  font-semibold text-m mb-4">
          Connect with us
        </h1>
        <div className="flex mb-8">
          <a
            href="https://web.facebook.com/OpticaLimited/?_rdc=1&_rdr"
            className="mr-4 text-xl text-blue-500 hover:text-blue-900 transition duration-200 flex items-center"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com/OpticaKenya"
            className="mr-4 text-xl text-blue-500 hover:text-blue-900 transition duration-200 flex items-center"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/opticakenya"
            className="mr-4 text-xl text-orange-500 hover:text-orange-900 transition duration-200 flex items-center"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com/channel/UCxdnH57klG2NMY8hzsGvZQg?view_as=subscriber"
            className="mr-4 text-xl text-red-700 hover:text-red-900 transition duration-200 flex items-center"
          >
            <FaYoutube />
          </a>
          <a
            href="https://wa.me/254709709000"
            className="mr-4 text-xl text-green-700 hover:text-green-900 transition duration-200 flex items-center"
          >
            <FaWhatsapp />
          </a>
          <a
            href="mailto:support@optica.africa"
            className="text-blue-500 hover:text-blue-900 transition duration-200 items-center"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
      {/* Decorative image grid */}
      <div className="grid grid-cols-2 items-center gap-x-4">
        <div className="grid grid-cols-1 gap-y-6 ">
          <div className="h-64 w-55 overflow-hidden rounded-lg">
            <img
              src={photo}
              alt=""
              className="h-full w-full  object-contain md:object-cover object-center rounded-lg"
            />
          </div>
          <div className="h-64 w-55 overflow-hidden rounded-lg">
            <img
              src={photo2}
              alt=""
              className="h-full w-full object-cover object-center rounded-lg"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-6  p-2">
          <div className=" overflow-hidden rounded-lg">
            <img
              src={photo3}
              alt=""
              className="h-full w-full object-contain md:object-cover object-center rounded-lg"
            />
          </div>
          <div className=" overflow-hidden rounded-lg">
            <img
              src={photo4}
              alt=""
              className="h-full w-full object-contain md:object-cover object-center rounded-lg"
            />
          </div>
          <div className=" overflow-hidden rounded-lg">
            <img
              src={photo5}
              alt=""
              className="h-full w-full object-contain md:object-cover object-center rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
