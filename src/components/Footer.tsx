import { Link } from "react-router-dom";
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (

    <div>
<div className="bg-gray-900 flex flex-grow justify-between">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          <div className="text-center md:text-left pl-20">
            <h4 className="text-xl font-bold text-white mb-4 mr-8">
              Sign up for our newsletter, and get updates on our latest offers
            </h4>
            <Link
              to="/signup"
              className="bg-white text-blue-900 py-2 px-4 mt-20 mr-6  mb-8 font-bold rounded-full hover:bg-[#95873C] hover:text-white transition duration-200"
            >
              Sign Up Now
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <h6 className="text-lg ml-12 font-bold text-white mb-1 text-center">
              Connect With Us
            </h6>
            <div className="flex flex-row flex-wrap mt-6 space-x-4">
              <a
                href="/"
                className="text-blue-500 hover:text-blue-900 transition duration-200 items-center"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="/"
                className="text-blue-500 hover:text-blue-900 transition duration-200 items-center"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="/"
                className="text-orange-500 hover:text-orange-700 transition duration-200 items-center"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="/"
                className="text-red-700 hover:text-red-900 transition duration-200 items-center"
              >
                <FaYoutube size={20} />
              </a>
              <a
                href="https://wa.me/254795070535"
                className="text-green-700 hover:text-green-900 transition duration-200 items-center"
              >
                <FaWhatsapp size={20} />
              </a>
              <a
                href="mailto:jpguantai@gmail.com"
                className="text-blue-500 hover:text-blue-900 transition duration-200 items-center"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center md:mr-0">
            <h5 className="font-bold ml-6 text-white text-lg"> Guan Bnb</h5>
            <ul className="list-none">
              <li className="mt-2">
                <Link
                  to="/"
                  className="text-white hover:text-blue-900 transition duration-200"
                >
                  Home
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  to="/contact"
                  className="text-white hover:text-blue-900 transition duration-200"
                >
                  Contact Us
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  to="/airbnb"
                  className="text-white hover:text-blue-900 transition duration-200"
                >
                  Airbnbs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
      <div className="text-center text-white bg-black py-2  text-sm bottom-0 w-full">
        © {new Date().getFullYear()} Guan Bnb | All rights reserved.
      </div>
    </div>
  )
};

export default Footer;