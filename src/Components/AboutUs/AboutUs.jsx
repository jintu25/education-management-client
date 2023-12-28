import { useContext, useState } from "react";
import { GiCheckMark } from "react-icons/gi";
// import videos from "../../assets/images/other/Flexi Online School Promo Video.mp4";
import { ThemeContext } from "../../Providers/ThemeProvider";
import first from "../../assets/images/other/instuctor.webp";
import second from "../../assets/images/other/online-communication.jpg"
const AboutUs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { theme } = useContext(ThemeContext);

  const handleClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  return (
    <div className={`${theme}`}>
      <div className={`max-w-screen-xl m-auto py-16`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-4 lg:mx-0 items-center">
          <div className="w-full text-center mb-24 lg:mb-20">
            <div className="relative items-center flex justify-center md:mt-5 mx-5 lg:mx-0">
              <img className="w-[75%] h-[50vh] rounded-md" src={first} alt="" />
              <div className="absolute h-[65%] w-[50%] bottom-[-90px] left-[-10px] border shadow-2xl">
                <img className="w-[100%] h-[100%]" src={second} alt="" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[#7A7A7A] font-medium font-sans text-lg">
              ABOUT US
            </h3>
            <h1
              style={{ lineHeight: "48px" }}
              className="text-[#000] font-bold font-[spartan] text-3xl md:text-4xl mt-6 mb-8"
            >
              We Provide Best <span className="text-[#1AB69D]">Education</span>{" "}
              <br /> Services For You
            </h1>

            <div>
              <ul className="flex gap-8 my-6 text-[#000] text-xl font-semibold">
                <li
                  onClick={() => handleClick(0)}
                  className={
                    activeTab === 0
                      ? "text-red-500 cursor-pointer border-b-2 border-red-500"
                      : "cursor-pointer"
                  }
                >
                  About eSmartEdu
                </li>
                <li
                  onClick={() => handleClick(1)}
                  className={
                    activeTab === 1
                      ? "text-red-500 cursor-pointer border-b-2 border-red-500"
                      : "cursor-pointer"
                  }
                >
                  Our Mission
                </li>
                <li
                  onClick={() => handleClick(2)}
                  className={
                    activeTab === 2
                      ? "text-red-500 cursor-pointer border-b-2 border-red-500"
                      : "cursor-pointer"
                  }
                >
                  Our Vision
                </li>
              </ul>
              <div>
                {activeTab === 0 && (
                  <div>
                    <p
                      style={{ lineHeight: "30px" }}
                      className="text-[16px] font-medium text-[#7A7A7A] mb-6"
                    >
                      At eSmart Education, we believe in the transformative
                      power of education. Our mission is to provide a dynamic
                      online learning platform that empowers individuals to
                      unlock their full potential and achieve academic and
                      professional success.
                    </p>
                    <ul>
                      <li className="flex items-center text-xl font-semibold text-[#181818] mb-2 font-[Spartan]">
                        <span className="text-[#EE4A62] mr-3 font-bold text-xl">
                          <GiCheckMark />
                        </span>{" "}
                        Education award achived
                      </li>
                      <li className="flex items-center text-xl font-semibold text-[#181818] mb-2 font-[Spartan]">
                        <span className="text-[#EE4A62] mr-3 font-bold text-xl">
                          <GiCheckMark />
                        </span>{" "}
                        Available online courses
                      </li>
                    </ul>
                  </div>
                )}
                {activeTab === 1 && (
                  <div>
                    <p
                      style={{ lineHeight: "30px" }}
                      className="text-[16px] font-medium text-[#7A7A7A] mb-6"
                    >
                      eSmart Education is more than just an online course
                      platform; we are a team of passionate educators, tech
                      enthusiasts, and industry experts committed to reshaping
                      the future of education.
                    </p>
                    <ul>
                      <li className="flex items-center text-xl font-semibold text-[#181818] mb-2 font-[Spartan]">
                        <span className="text-[#EE4A62] mr-3 font-bold text-xl">
                          <GiCheckMark />
                        </span>{" "}
                        Industry Expert Instructor
                      </li>
                      <li className="flex items-center text-xl font-semibold text-[#181818] mb-2 font-[Spartan]">
                        <span className="text-[#EE4A62] mr-3 font-bold text-xl">
                          <GiCheckMark />
                        </span>{" "}
                        Up-to-Date Course Content
                      </li>
                    </ul>
                  </div>
                )}
                {activeTab === 2 && (
                  <div>
                    <p
                      style={{ lineHeight: "30px" }}
                      className="text-[16px] font-medium text-[#7A7A7A] mb-6"
                    >
                      To revolutionize education by leveraging technology to
                      make learning accessible, engaging, and personalized for
                      every individual, regardless of geographical boundaries.
                    </p>
                    <ul>
                      <li className="flex items-center text-xl font-semibold text-[#181818] mb-2 font-[Spartan]">
                        <span className="text-[#EE4A62] mr-3 font-bold text-xl">
                          <GiCheckMark />
                        </span>{" "}
                        Online Remote Learning
                      </li>
                      <li className="flex items-center text-xl font-semibold text-[#181818] mb-2 font-[Spartan]">
                        <span className="text-[#EE4A62] mr-3 font-bold text-xl">
                          <GiCheckMark />
                        </span>{" "}
                        Lifetime Access For Learning
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
