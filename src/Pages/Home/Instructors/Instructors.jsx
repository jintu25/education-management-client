// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { ThemeContext } from "../../../Providers/ThemeProvider";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    fetch("/instructor.json")
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
      });
  }, []);
  return (
    <div className={`${theme}`}>
      <div className=" m-auto max-w-screen-xl py-20">
      <h2 className="font-[roboto] text-center mb-3 text-[#333333] text-3xl font-semibold">
        Our Expert Instructors
      </h2>
      <p className="text-center font-serif text-[16px] mb-8 text-[#555555]">
        Meet the dedicated professionals who make learning exciting and
        impactful.
      </p>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
          1280: { slidesPerView: 4, spaceBetween: 30 },
        }}
        modules={[Pagination]}
        className="mySwiper mx-4">
        {instructors.map((instructor) => (
          <SwiperSlide
            key={instructor._id}
            className="relative overflow-hidden">
            {/* Image */}
            <Link className="relative group block">
              <img
                className="w-full h-full object-cover rounded-lg transition-opacity duration-300 ease-in-out group-hover:opacity-70"
                src={instructor.img}
                alt="instructor"
              />

              {/* Darkness overlay initially hidden */}
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-70"></div>

              {/* Text initially hidden, becomes visible on hover */}
              <div className="flex items-center justify-center absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out delay-500 group-hover:opacity-100">
                <div className="text-center text-white">
                  <h4 className="uppercase text-lg lg:text-xl shadow-2xl font-[cursive] font-medium mb-2">
                    {instructor.name}
                  </h4>
                  <p className="text-center text-white font-light text-[16px] font-serif">
                    {instructor.courses.name}
                  </p>
                  <div className="flex justify-center mt-2">
                    <h5 className="bg-white text-slate-500 p-3 mx-1 rounded-full hover:bg-red-600 hover:text-white ease-in-out duration-300">
                      <FaFacebook />
                    </h5>
                    <h5 className="bg-white text-slate-500 p-3 mx-1 rounded-full hover:bg-red-600 hover:text-white ease-in-out duration-300">
                      <FaTwitter />
                    </h5>
                    <h5 className="bg-white text-slate-500 p-3 mx-1 rounded-full hover:bg-red-600 hover:text-white ease-in-out duration-300">
                      <FaLinkedinIn />
                    </h5>
                    <h5 className="bg-white text-slate-500 p-3 mx-1 rounded-full hover:bg-red-600 hover:text-white ease-in-out duration-300">
                      <FaInstagram />
                    </h5>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
};

export default Instructors;
