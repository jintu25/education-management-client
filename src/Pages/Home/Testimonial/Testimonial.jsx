// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { useContext, useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { ThemeContext } from "../../../Providers/ThemeProvider";
const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  const { theme } = useContext(ThemeContext);
  
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <div className={`${theme}`}>
      <div className=" m-auto max-w-screen-xl py-20">
        <h2 className="font-[roboto] text-center mb-3 text-[#333333] text-3xl font-semibold">
          What Our Students Say
        </h2>
        <p className="text-center font-serif text-[16px] mb-8 text-[#555555]">
          Meet the dedicated Students who make success.
        </p>
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
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination]}
          className="mySwiper mx-4"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id} className="">
              <div className="py-12">
                <div className="text-center"></div>
                <div className="flex">
                  <img
                    className="w-24 h-24 mr-3 rounded-full"
                    src={review.img}
                    alt=""
                  />
                  <div>
                    <h2 className="text-[#0c0b2b] text-xl font-semibold">
                      {review.name}
                    </h2>
                    <div className="flex my-3">
                      <Rating
                        className="text-center flex justify-center"
                        style={{ maxWidth: 120 }}
                        value={review.rating}
                        readOnly
                      />
                    </div>
                    <p>{review.details}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
