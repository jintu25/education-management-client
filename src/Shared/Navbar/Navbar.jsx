import { Link } from "react-router-dom";
// import profile from "../../assets/images/1671643939630.jfif";
import logo from "../../assets/images/other/icon.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handlelogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        alert(error.message);
      });
  };
  const menuItems = (
    <>
      <li>
        <Link
          to="/"
          className="hover:text-orange-500 text-[16px] font-semibold ">
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className="hover:text-orange-500 text-[16px] font-semibold ">
          About Us
        </Link>
      </li>
      <li>
        <Link
          to="/courses"
          className="hover:text-orange-500 text-[16px] font-semibold ">
          Courses
        </Link>
      </li>
      <li>
        <Link
          to="/events"
          className="hover:text-orange-500 text-[16px] font-semibold ">
          Events
        </Link>
      </li>

      <li>
        <Link
          to="/blogs"
          className="hover:text-orange-500 text-[16px] font-semibold ">
          Blogs
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          className="hover:text-orange-500 text-[16px] font-semibold ">
          Gallery
        </Link>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-[#ffffff] fixed z-20">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            {isMenuOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {menuItems}
              </ul>
            )}
          </div>
          <Link to="/" className=" h-full">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                  <li>
                    <Link to="/dashboard/userprofile" className="justify-between">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <button
                      className="font-serif font-semibold text-[17px] text-[#ffffff] bg-[#ff662a] hover:text-white hover:bg-[#30304d] duration-300 ease-in-out"
                      onClick={handlelogOut}>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link to='/login' className="text-[#ff9e43] font-semibold text-lg hover:text-[#ff662a] duration-300 ease-in-out border-r-2 pr-3">
                Login
              </Link>
              <Link to='signup' className="text-[#ff9e43] font-semibold text-lg hover:text-[#ff662a] duration-300 ease-in-out  pl-3">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
