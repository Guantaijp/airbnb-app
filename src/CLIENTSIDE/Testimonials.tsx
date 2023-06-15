import React from "react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { FaStar } from "react-icons/fa";

SwiperCore.use([Pagination, Autoplay]);
const testimonials = [
  {
    name: "John S.",
    image: require("../images/johns.webp"),
    text: "I was skeptical about booking accommodations online, but Guan Bnb made it so easy and the quality exceeded my expectations.",
    rating: 4,
  },
  {
    name: "Sarah K.",
    image: require("../images/sarahk.jpeg"),
    text: "I recently stayed at a Guan Bnb property and I couldn't be happier! The accommodation was perfect and the service was top-notch.",
    rating: 5,
  },
  {
    name: "Michael B.",
    image: require("../images/michaelb.webp"),
    text: "I have never experienced such comfortable and well-designed accommodations before. Guan Bnb really knows how to provide a great stay.",
    rating: 4,
  },
  {
    name: "Amanda R.",
    image: require("../images/amandar.webp"),
    text: "Guan Bnb's properties have been a game-changer for me. I can finally enjoy my trips without worrying about the quality of my accommodation.",
    rating: 4,
  },
  {
    name: "Jay K.",
    image: require("../images/jayk.jpeg"),
    text: "The customer service at Guan Bnb is fantastic. They helped me find the perfect accommodation that suited my needs and preferences.",
    rating: 5,
  },
  {
    name: "Carl W.",
    image: require("../images/carlw.webp"),
    text: "I've been a loyal Guan Bnb customer for years and I always recommend them to friends and family. Their properties are unbeatable.",
    rating: 3,
  },
  {
    name: "Rachel B.",
    image: require("../images/rachelb.jpeg"),
    text: "I love the modern and comfortable design of the accommodations I've booked through Guan Bnb. They always exceed my expectations.",
    rating: 4,
  },
];


function Testimonials() {
  return (
    <div className="max-w-7xl mx-auto -mt-28 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-black mb-4 lg:text-center">
        What Our Customers Say About Us
      </h2>
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="relative mb-10 mt-8 rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-96">
                <div className="absolute top-0 left-0 right-0 bottom-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-40 h-40 object-cover object-center transition duration-300 ease-in-out transform hover:scale-110 rounded-full m-auto mt-4"
                    style={{ zIndex: 1 }}
                  />
                </div>
                <div className="absolute z-10 bottom-0 left-0 right-0 px-1 py-2">
                  <p className="text-m text-center font-medium mb-4 text-gray-500">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center justify-center mb-4">
                    {[...Array(testimonial.rating)].map((star, i) => (
                      <FaStar key={i} className="text-yellow-300" />
                    ))}
                  </div>
                  <p className="text-black text-center mb-4">
                    - {testimonial.name} -
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonials;
