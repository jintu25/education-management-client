import { useContext, useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
import Course from "./Course";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../Providers/ThemeProvider";
// import { useLoaderData } from "react-router-dom";

const Courses = () => {
  const { theme } = useContext(ThemeContext);
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("https://dragon-news-server-n2l9xp6ol-jintu45.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      });
  }, []);

  return (
    <div className={`${theme}`}>
      <div className="max-w-screen-xl m-auto py-20">
        <h2 className="font-[roboto] text-center mb-2 text-[#333333] text-3xl font-semibold">
          Popular Courses
        </h2>
        <p className="text-lg font-medium text-[#555555] text-center mb-12">
          Limitless learning, more possibilities
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 lg:mx-0">
          {courses.slice(0, 6).map((course) => (
            <Course course={course} key={course._id}></Course>
          ))}
        </div>

        <div className="text-center justify-center flex mt-10">
          <Link
            to="/courses"
            href="#"
            className="flex text-gray-100 justify-center transition duration-200 ease-in-out transform px-4 py-2 w-48 border-b-4 border-gray-500 hover:border-b-2 bg-gradient-to-t from-gray-400  via-gray-600 to-gray-200 rounded-2xl hover:translate-y-px "
          >
            <span className="font-bold">More Courses</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Courses;
