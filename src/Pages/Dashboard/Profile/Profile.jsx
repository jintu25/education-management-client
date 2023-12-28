import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="grid grid-cols-1 items-center lg:grid-cols-6 gap-4 justify-center">
      <div className="bg-[#ffffff] col-span-2 py-8 px-6 justify-start items-center rounded-lg">
        <div className="text-center flex justify-center">
          <img className="w-64 h-64 rounded-full" src={user?.photoURL} alt="" />
        </div>
        <div className="text-center">
          <h4 className="mt-6 mb-2 text-center font-medium text-xl text-[#0e0e36]">
            Name: <span className="text-[#02070e]">{user?.displayName}</span>
          </h4>
          <h4 className="text-[#33363a] text-[17px] font-semibold text-center mb-4">
            E-mail: {user?.email}
          </h4>
          <button className="btn btn-primary btn-sm">
            <a>Edit</a>
          </button>
        </div>
      </div>

      <div className=" col-span-4 bg-white h-full grid items-center p-4 rounded-lg">
        <h2 className="text-xl font-semibold text-[#143c64]">
          Your Information
        </h2>
        <ul>
          <li className=" border-b-2 border-slate-300 py-3 text-[17px] font-medium  font-sans flex">
            <span>Full Name: </span>
            <span className="ml-5 text-[#696969]">{user?.displayName}</span>
          </li>
          <li className=" border-b-2 border-slate-300 py-3 text-[17px] font-medium  font-sans flex">
            <span>Email: </span>
            <span className="ml-5 text-[#696969]">{user?.email}</span>
          </li>
          <li className=" border-b-2 border-slate-300 py-3 text-[17px] font-medium  font-sans flex">
            <span>Phone: </span>
            <span className="ml-5 text-[#696969]">+8801766768000</span>
          </li>
          <li className=" border-b-2 border-slate-300 py-3 text-[17px] font-medium  font-sans flex">
            <span>Address: </span>
            <span className="ml-5 text-[#696969]">
              {" "}
              Address: mirpur, dhaka, bangladesh
            </span>
          </li>
          <li className=" border-b-2 border-slate-300 py-3 text-[17px] font-medium  font-sans flex">
            <span>Enroll Course: </span>
            <span className="ml-5 text-[#696969]">Processing...</span>
          </li>
        </ul>
        <button className="btn btn-primary btn-sm">
          <Link to="/courses">Buy Course</Link>
        </button>
      </div>
    </div>
  );
};

export default Profile;
