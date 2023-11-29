// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("/instructor.json")
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
      });
  }, []);
  return (
    <div className=" m-auto max-w-screen-xl my-20">
        <h4 className="font-[roboto] text-center mb-3 text-[#333333] text-3xl font-semibold">Our Expert Instructors</h4>
        <p className="text-center font-serif text-[16px] mb-8 text-[#555555]">Meet the dedicated professionals who make learning exciting and impactful.</p>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@1.00": {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          "@1.20": {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className="mySwiper mx-4">
        {instructors.map((instructor) => (

          <SwiperSlide
            key={instructor._id}
            className="relative overflow-hidden">
            {/* Image */}
            <Link className="relative group">
              <img
                className="w-full rounded-lg transition-opacity duration-300 ease-in-out group-hover:opacity-70"
                src={instructor.img}
                alt="instructor"
              />

              {/* Darkness overlay initially hidden */}
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-70"></div>

              {/* Text initially hidden, becomes visible on hover */}
              <div className="flex items-center justify-center absolute inset-0  opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out delay-500 group-hover:opacity-100">
                <div className=" text-center">
                  <h4 className="uppercase text-lg lg:text-xl text-white shadow-2xl font-[cursive] font-medium mb-2">
                    {instructor.name}
                  </h4>
                  <p className="text-center text-white font-light text-[16px] font-serif">
                    {instructor.courses.name}
                  </p>
                  <div className="flex justify-center mt-2">
                    <span className="bg-white p-3 mx-1 rounded-full hover:bg-red-600 hover:text-white ease-in-out duration-300">
                      <FaFacebook></FaFacebook>
                    </span>
                    <span className="bg-white p-3 mx-1 rounded-full hover:bg-red-600 hover:text-white ease-in-out duration-300">
                      <FaTwitter></FaTwitter>
                    </span>
                    <span className="bg-white p-3 mx-1 rounded-full hover:bg-red-600 hover:text-white ease-in-out duration-300">
                      <FaLinkedinIn></FaLinkedinIn>
                    </span>
                    <span className="bg-white p-3 mx-1 rounded-full hover:bg-red-600 hover:text-white ease-in-out duration-300">
                      <FaInstagram></FaInstagram>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>

        ))}
      </Swiper>
    </div>
  );
};

export default Instructors;
