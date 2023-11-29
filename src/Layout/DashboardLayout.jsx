import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AiFillGolden, AiFillHome, AiOutlineMenuUnfold } from "react-icons/ai";
import { BiMenu, BiPhoneCall } from "react-icons/bi";
import {
  FaUtensils,
  FaUsers,
  FaListUl,
} from "react-icons/fa";
const DashboardLayout = () => {
  const [isTeacher] = useState(false);
  return (
    <div className="">
      <div className="drawer lg:drawer-open bg-white md:bg-slate-200">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col p-5 px-2 md:py-10 md:px-6 ">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden">
            Dashboard
          </label>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 border-r-2 border-b-slate-600 h-full mr-6 bg-[#0c0c13ec]">
            {isTeacher ? (
              <>
                {/* admin ra ja ja dekbe  */}
                <li>
                  <NavLink
                    to="/dashboard/adminHome"
                    className="text-lg font-semibold text-slate-200 flex">
                    <span>
                      <AiFillHome></AiFillHome>
                    </span>{" "}
                    Teacher Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/addItem"
                    className="text-lg font-semibold text-slate-200 flex">
                    <span>
                      <FaUtensils></FaUtensils>
                    </span>
                    Add Courses
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/addItem"
                    className="text-lg font-semibold text-slate-200 flex">
                    <span>
                      <FaUtensils></FaUtensils>
                    </span>
                    Add Blogs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/addItem"
                    className="text-lg font-semibold text-slate-200 flex">
                    <span>
                      <FaUtensils></FaUtensils>
                    </span>
                    Add Events
                  </NavLink>
                </li>
               
              </>
            ) : (
              <>
                {/* sadaron user der jonno je sob menu gulo dekabe  */}
                <li>
                  <NavLink
                    to="/dashboard/userprofile"
                    className="text-lg font-semibold text-slate-200 flex">
                    <span>
                      <AiFillHome></AiFillHome>
                    </span>{" "}
                    Student Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/payment"
                    className="text-lg font-semibold text-slate-200 flex">
                    <span>
                      <FaListUl></FaListUl>
                    </span>
                    Reservation
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/addReview"
                    className="text-lg font-semibold text-slate-200 flex">
                    <span>
                      <FaUsers></FaUsers>
                    </span>
                    Add Reviews
                  </NavLink>
                </li>
                
              </>
            )}

            <div className="divider divide-slate-100"></div>
            <li>
              <NavLink
                to="/"
                className="hover:text-orange-500 text-[16px] font-semibold text-zinc-200">
                <span>
                  <AiFillHome></AiFillHome>
                </span>{" "}
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="hover:text-orange-500 text-[16px] font-semibold text-zinc-200 ">
                <span>
                  <AiOutlineMenuUnfold></AiOutlineMenuUnfold>
                </span>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className="hover:text-orange-500 text-[16px] font-semibold text-zinc-200 ">
                <span>
                  <BiMenu></BiMenu>
                </span>
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/order/desserts"
                className="hover:text-orange-500 text-[16px] font-semibold text-zinc-200 ">
                <span>
                  <AiFillGolden></AiFillGolden>
                </span>
                Order
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className="hover:text-orange-500 text-[16px] font-semibold text-zinc-200 ">
                <span>
                  <BiPhoneCall></BiPhoneCall>
                </span>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
