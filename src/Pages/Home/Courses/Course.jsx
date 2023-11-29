import { FaHeartBroken } from "react-icons/fa";
import { LuUsers2 } from "react-icons/lu";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { name, courseDescription, image, price, otherInfo, _id } = course;

  return (
    <div className="border border-slate-200 shadow-xl rounded-xl">
      <img className=" rounded-t-xl" src={image} alt="" />
      <div className="p-5 border-b-2 border-slate-300 text-center">
        <Link to={`/detailsCourse/${course._id}`} className="text-[#002147] font-medium font-[roboto] text-2xl my-2 hover:text-[#fc6552] ease-in-out duration-300">
          {name}
        </Link>
        <p className="text-[16px] font-normal mt-3 font-serif text-slate-700">
          {courseDescription.length > 80
            ? `${courseDescription.substring(0, 80)}...`
            : courseDescription}
        </p>
      </div>
      <div className="py-3 flex justify-around items-center">
          <h3 className="flex items-center text-[16px] font-medium text-slate-950"><span className="mr-1"><FaHeartBroken /></span>12</h3> 
          <h3 className="flex items-center text-[16px] font-medium text-slate-950"><span className="mr-1"><LuUsers2 /></span>{otherInfo.students}</h3> 
          <h3 className="text-[#f2380a] font-bold text-[17px]">{price} tk</h3>
      </div>
    </div>
  );
};

export default Course;
