// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./banner.css";
// import required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
const Banner = () => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        autoplay={{ delay: 3000 }}
        className="mySwiper">
        <SwiperSlide>
          <div className="first py-20 md:py-28 lg:py-48 flex item-center">
            <div className="px-3 md:px-20 w-full md:w-4/5 lg:w-3/5">
              <h2 className="text-white font-semibold text-2xl lg:text-5xl">
                Develop Your Skills
              </h2>
              <p className="text-[16px] lg:text-[18px] font-serif font-medium leading-7 py-6">
                In the rapidly evolving landscape of technology, acquiring and
                enhancing your computer skills is crucial for personal and
                professional growth.
              </p>
              <button className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-300 text-white py-2 px-3 rounded text-lg font-bold">
                Get More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="second py-20 md:py-28 lg:py-48 flex item-center">
            <div className="px-3 md:px-20 w-full md:w-4/5 lg:w-3/5">
              <h2 className="text-white font-semibold text-2xl lg:text-5xl">
                Enjoy the class and grow knowledge{" "}
              </h2>
              <p className="text-[16px] lg:text-[18px] font-serif font-medium leading-7 py-6">
                Embarking on the path of education is not just a journey of
                acquiring information but an opportunity for personal growth and
                knowledge enrichment.
              </p>
              <button className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-300 text-white py-2 px-3 rounded text-lg font-bold">
                Get More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="third py-20 md:py-28 lg:py-48 flex item-center">
            <div className="px-6 md:px-20 w-full md:w-4/5 lg:w-3/5">
              <h2 className="text-white font-semibold text-2xl lg:text-5xl">
                Read books and grow your knowledge
              </h2>
              <p className="text-[16px] lg:text-[18px] font-serif font-medium leading-7 py-6">
                In the digital age, where information is abundant, the act of
                reading books remains a powerful and transformative means of
                acquiring knowledge and fostering personal growth.
              </p>
              <button className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-300 text-white py-2 px-6 rounded text-lg font-bold">
                Get More
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
