import { useLoaderData } from "react-router-dom";
import { IoBookSharp } from "react-icons/io5";
import { MdAssignment, MdQuiz } from "react-icons/md";
import { GiDuration, GiSkills } from "react-icons/gi";
import {
  FaHandsHelping,
  FaProjectDiagram,
  FaSignLanguage,
} from "react-icons/fa";
import { FaBangladeshiTakaSign } from "react-icons/fa6";


const DetailsCourse = () => {
  const detailsCourse = useLoaderData();
  const {
    name,
    image,
    banner,
    certification,
    courseBenefit,
    courseDescription,
    otherInfo,
    outcomes,
    price,
  } = detailsCourse;
  return (
    <>
      <div style={{ position: "relative" }}>
        <h1
          className="text-2xl text-black"
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            zIndex: 1,
          }}>
          {name}
        </h1>
        <img className="w-full h-96" src={banner} alt="" />
        <div
          style={{
            position: "absolute",
            bottom: "50%",
            top: "50%",
            left: "50px",
            zIndex: 1,
            color: "white",
          }}>
          <h3 className="text-2xl lg:text-4xl font-sans font-semibold text-[#ffffff] hidden lg:block">
            Courses Name: {name}
          </h3>
          <p className="text-xl mt-4 font-semibold hidden lg:block">
            {" "}
            {otherInfo.skill}
          </p>
        </div>
      </div>

      <div className="max-w-screen-xl m-auto py-16">
        <h2 className="text-[#42495b] font-[Montserrat] font-semibold text-3xl mx-4 lg:mx-0">
          Courses Name : {name}
        </h2>
        <p className="text-lg text-[#606060] my-3 font-sans w-full md:w-3/5 mx-4 lg:mx-0">
          {outcomes}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mx-4 lg:mx-0">
          <div className="col-span-3">
            <img className="w-full" src={image} alt="" />
            <h1 className="text-[#42495b] mt-6 mb-3 font-semibold text-2xl">
              OverView
            </h1>
            <hr />
            <h1 className="text-[#333333] font-semibold font-sans uppercase text-xl my-3">
              Course Description
            </h1>
            <p className="text-[16px] font-normal font-serif text-slate-700">
              {courseDescription}
            </p>
            <h1 className="text-[#333333] font-semibold font-sans uppercase text-xl my-3">
              We Provide
            </h1>
            <p className="text-[16px] font-normal font-serif text-slate-700">
              {courseBenefit}
            </p>
            <h1 className="text-[#333333] font-semibold font-sans uppercase text-xl my-3">
              Certification
            </h1>
            <p className="text-[16px] font-normal font-serif text-slate-700">
              {certification}
            </p>
            <h1 className="text-[#333333] font-semibold font-sans uppercase text-xl my-3">
              OutComes
            </h1>
            <p className="text-[16px] font-normal font-serif text-slate-700">
              {outcomes}
            </p>
          </div>
          <div className="col-span-2 border-l-2 p-4 border-slate-300">
            <h2 className="text-[#42495b] mt-6 mb-3 font-semibold text-2xl  ">
              COURSE FEATURES
            </h2>
            <hr />
            <ul>
              <li className="text-[18px] font-normal font-serif text-slate-700 my-2 flex items-center">
                <span className="mr-2 text-[#ffbb54]">
                  <IoBookSharp />
                </span>
                lectures: {otherInfo.lectures}
              </li>
              <hr />
              <li className="text-[18px] font-normal font-serif text-slate-700 my-2 flex items-center">
                <span className="mr-2 text-[#ffbb54]">
                  <MdAssignment />
                </span>
                assignment: {otherInfo.assignment}
              </li>
              <hr />
              <li className="text-[18px] font-normal font-serif text-slate-700 my-2 flex items-center">
                <span className="mr-2 text-[#ffbb54]">
                  <GiDuration />
                </span>
                duration: {otherInfo.duration}
              </li>
              <hr />
              <li className="text-[18px] font-normal font-serif text-slate-700 my-2 flex items-center">
                <span className="mr-2 text-[#ffbb54]">
                  <FaSignLanguage />
                </span>
                languages: {otherInfo.languages}
              </li>
              <hr />
              <li className="text-[18px] font-normal font-serif text-slate-700 my-2 flex items-center">
                <span className="mr-2 text-[#ffbb54]">
                  <FaProjectDiagram />
                </span>
                project: {otherInfo.project}
              </li>
              <hr />
              <li className="text-[18px] font-normal font-serif text-slate-700 my-2 flex items-center">
                <span className="mr-2 text-[#ffbb54]">
                  <MdQuiz />
                </span>
                quizzes: {otherInfo.quizzes}
              </li>
              <hr />
              <li className="text-[18px] font-normal font-serif text-slate-700 my-2 flex items-center">
                <span className="mr-2 text-[#ffbb54]">
                  <GiSkills />
                </span>
                skill: {otherInfo.skill}
              </li>
              <hr />
              <li className="text-[18px] font-normal font-serif text-slate-700 my-2 flex items-center">
                <span className="mr-2 text-[#ffbb54]">
                  <FaHandsHelping />
                </span>
                help: {otherInfo.help}
              </li>
              <hr />
              <li className="text-[18px] font-normal font-serif text-slate-700 my-2 flex items-center">
                <span className="mr-2 text-[#ffbb54]">
                <FaBangladeshiTakaSign />
                </span>
                Course Fee: {price}
              </li>
              <hr />
              <button className=" my-8 btn btn-secondary"> Enroll Course</button>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsCourse;
