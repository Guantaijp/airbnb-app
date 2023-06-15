import React from "react";
import Testimonials from "./Testimonials";

const About = () => {
  return (
    <div className="relative overflow-hidden bg-white px-10">
      <div className="pb-40 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-14">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-1">
          <div className="sm:max-w-xlg">
            <h1 className="font text-2xl font-bold text-black sm:text-6xl">
              Discover more about Guan Bnb
            </h1>

            <p className="mt-4 text-m text-gray-500">
              At Guan Bnb, we believe in providing exceptional accommodation
              experiences for our guests. Whether you're looking for a cozy
              hotel or a unique Airbnb, we strive to make your stay
              unforgettable.
            </p>
            <p className="mt-4 text-m text-gray-500">
              Browse our website to find affordable and high-quality
              accommodations that are sure to satisfy your needs.
            </p>
            <a
              href="/airbnb"
              className="inline-block rounded-md mt-4 border border-transparent bg-[#95873C] px-5 py-3 text-center font-bold text-black "
            >
              View Airbnbs
            </a>
          </div>

          <div className="sm:max-w-xlg">
            <h1 className="font text-xl mt-10 font-bold text-black sm:text-4xl">
              Committed to exceptional hospitality
            </h1>
            <p className="mt-4 text-m text-gray-500 ">
              Our passion for providing outstanding accommodation options drives
              us to deliver top-notch service across the board. With a diverse
              selection of hotels and unique Airbnb listings, we aim to offer
              the utmost quality and comfort to our guests.
            </p>
            <p className="mt-4 text-m text-gray-500 ">
              Our team is dedicated to providing personalized service, ensuring
              a memorable experience for every guest. Since our inception, our
              unwavering commitment to superior quality and love for
              hospitality has established us as a leader in the industry.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="w-full sm:w-1/2 sm:pr-4">
              <h1 className="font text-xl mt-10 font-bold text-black sm:text-4xl">
                Mission
              </h1>
              <p className="mt-4 text-m text-gray-500 ">
                Our mission is to provide our customers with exceptional hotel
                and Airbnb options at competitive prices, backed by
                professionalism and unrivaled service.
              </p>
            </div>
            <div className="w-full sm:w-1/2 sm:pl-4">
              <h1 className="font text-xl mt-10 font-bold text-black sm:text-4xl">
                Vision
              </h1>
              <ul className="mt-4 text-m text-gray-500 list-disc ml-20">
                <li>
                  To be the leading provider of comprehensive and memorable
                  accommodation experiences in the industry.
                </li>
                <li>
                  To create a work environment that inspires our employees to be
                  their best and deliver exceptional service.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Testimonials />
    </div>
  );
};

export default About;
