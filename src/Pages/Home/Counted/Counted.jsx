import "./counted.css";
import { TfiWrite } from "react-icons/tfi";
import { PiStudentFill } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { TbUsers } from "react-icons/tb";

const Counted = () => {
  return (
    <div className="counted-banner ">
      <div className="max-w-screen-lg m-auto ">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mx-4 lg:mx-0">
          <div className="text-center">
            <h3 className="text-5xl mb-2 text-center flex justify-center text-[#FFB606]">
              <TfiWrite />
            </h3>
            <h1 className="text-4xl font-bold my-3">94532</h1>
            <h4 className="text-xl font-semibold text-[#929292]">Learners</h4>
          </div>
          <div className="text-center">
            <h3 className="text-5xl mb-2 text-center flex justify-center text-[#FFB606]">
            <PiStudentFill />
            </h3>
            <h1 className="text-4xl font-bold my-3">4532</h1>
            <h4 className="text-xl font-semibold text-[#929292]">Graduates</h4>
          </div>
          <div className="text-center">
            <h3 className="text-5xl mb-2 text-center flex justify-center text-[#FFB606]">
              <TbUsers />
            </h3>
            <h1 className="text-4xl font-bold my-3">25678</h1>
            <h4 className="text-xl font-semibold text-[#929292]">Students Enrolled</h4>
          </div>
          <div className="text-center">
            <h3 className="text-5xl mb-2 text-center flex justify-center text-[#FFB606]">
            <GiTeacher />
            </h3>
            <h1 className="text-4xl font-bold my-3">32</h1>
            <h4 className="text-xl font-semibold text-[#929292]">Active Teachers</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counted;
