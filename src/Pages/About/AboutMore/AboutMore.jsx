import image1 from "../../../assets/images/about/successful-woman-typing-laptop-isolated-white.jpg";
import image2 from "../../../assets/images/about/handsome-man-with-laptop.jpg";
import image3 from "../../../assets/images/about/front-view-young-female-student-red-shirt-black-bag-holding-copybooks-smiling-white.jpg";

const AboutMore = () => {
  return (
    <div className="max-w-screen-xl m-auto py-16">
      <h2 className="font-[roboto] text-center mb-4 text-[#333333] text-3xl font-semibold">
        What Our Students Say
      </h2>
      <p className="text-center font-serif text-[16px] mb-10 text-[#555555]">
        Emphasize what sets your courses apart from others in terms of quality,
        innovation, or unique teaching methods.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-5 mx-4 lg:mx-0">
        <div className="rounded-lg col-span-3 h-full lg:h-fit shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
          <img className="h-96 w-full lg:h-72" src={image1} alt="" />
          <h3 className=" text-[#000] text-xl font-semibold bg-slate-300 py-3 px-4">
            Comprehensive Curriculum:
          </h3>
          <div className="p-4">
            <p
              style={{ lineHeight: "30px" }}
              className="text-[16px] font-medium text-[#7A7A7A] my-3"
            >
              In-depth and well-structured courses. Coverage of essential topics
              in [all courses].Gain a thorough understanding of Learn skills and
              techniques that are currently in demand.
            </p>
            <button className=" text-[#ff624d] text-[18px] tracking-tight hover:tracking-wide duration-300 font-semibold font-mono">
              Read More
            </button>
          </div>
        </div>
        <div className="rounded-lg col-span-4 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
          <img className="h-96 w-full" src={image2} alt="" />
          <h3 className=" text-[#000] text-xl font-semibold bg-slate-300 py-3 px-4">
            Flexible Learning:
          </h3>
          <div className="p-4">
            <p
              style={{ lineHeight: "30px" }}
              className="text-[16px] font-medium text-[#7A7A7A] my-3"
            >
              Access to courses anytime, anywhere.Self-paced learning with
              interactive modules.Fit learning into your schedule.Learn at your
              own pace, ensuring a comfortable and effective learning
              experience.Practical, hands-on projects to apply theoretical
              knowledge.Real-world scenarios and case studies.Develop practical
              skills through application. Build a portfolio showcasing your
              ability to tackle real challenges.
            </p>
            <button className=" text-[#ff624d] text-[18px] tracking-tight hover:tracking-wide duration-300 font-semibold font-mono">
              Read More
            </button>
          </div>
        </div>
        <div className="col-span-3 rounded-lg h-full lg:h-fit shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
          <img className="h-96 w-full lg:h-72" src={image3} alt="" />
          <h3 className=" text-[#000] text-xl font-semibold bg-slate-300 py-3 px-4">
            What We Provide:
          </h3>
          <div className="p-4">
            <p
              style={{ lineHeight: "30px" }}
              className="text-[16px] font-medium text-[#7A7A7A] my-3"
            >
              Courses aligned with industry standards and
              certifications.Opportunities for certification exams.Increase
              employability with recognized certifications.Align your skills
              with industry expectations.
            </p>
            <button className=" text-[#ff624d] text-[18px] tracking-tight hover:tracking-wide duration-300 font-semibold font-mono">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMore;
