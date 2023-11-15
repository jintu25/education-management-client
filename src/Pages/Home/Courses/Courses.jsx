import { useEffect, useState } from "react";
import Course from "./Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("/courses.json")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      });
  }, []);
  return (
    <div className="max-w-screen-xl m-auto py-20">
      <h2 className="font-[roboto] text-center mb-2 text-[#333333] text-3xl font-semibold">Popular Courses</h2>
      <p className="text-lg font-medium text-[#555555] text-center mb-12">Limitless learning, more possibilities</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 lg:mx-0">
      {courses.map((course) => (
        <Course course={course} key={course._id}></Course>
      ))}
      </div>
    </div>
  );
};

export default Courses;
