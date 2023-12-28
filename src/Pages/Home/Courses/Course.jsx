import { useContext } from "react";
import { FaHeartBroken } from "react-icons/fa";
import { LuUsers2 } from "react-icons/lu";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../Providers/ThemeProvider";

const Course = ({ course }) => {
  const { name, courseDescription, image, price, otherInfo } = course;
  const { theme } = useContext(ThemeContext);

  return (
    <Link
      to={`/detailsCourse/${course._id}`}
      className={`relative bg-white border border-gray-300 rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 ${theme}`}
    >
      <div className="relative">
        <img
          className="w-full h-64 object-cover rounded-t-xl"
          src={image}
          alt={name}
        />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-black opacity-75 text-white p-6">
          <h2 className="text-2xl font-bold mb-2 font-roboto my-2 hover:text-[#5271fc] ease-in-out duration-300 block transition">
            {name}
          </h2>
          <p className="text-[16px] font-normal text-gray-300">
            {courseDescription.length > 80
              ? `${courseDescription.substring(0, 80)}...`
              : courseDescription}
          </p>
        </div>
      </div>
      <div>
        <div className=" py-3 px-4 bg-zinc-200 flex justify-between items-center">
          <div className="flex items-center space-x-2 text-[16px] font-medium text-gray-800">
            <span className="mr-1">
              <FaHeartBroken className="text-red-500" />
            </span>
            <h4>12</h4>
          </div>
          <div className="flex items-center space-x-2 text-[16px] font-medium text-gray-800">
            <span className="mr-1">
              <LuUsers2 className="text-blue-500" />
            </span>
            <h4>{otherInfo.students}</h4>
          </div>
          <div className="text-[#f2380a] font-bold text-[17px]">$ {price}</div>
        </div>
      </div>
    </Link>
  );
};

export default Course;
