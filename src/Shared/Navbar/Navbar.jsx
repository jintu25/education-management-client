import { Link } from "react-router-dom";
// import profile from "../../assets/images/1671643939630.jfif";
import logo from "../../assets/images/other/logo.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { FaUser } from "react-icons/fa";
import { ThemeContext } from "../../Providers/ThemeProvider";
// import useProfile from "../../Hooks/useProfile";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  // const [isUser] = useProfile()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

//   const toggleProfileMenu = () => {
//   setIsProfileMenuOpen(!isProfileMenuOpen)
// }
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

  const darkIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  );

  const lightIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );
  const menuItems = (
    <>
      <li>
        <Link
          to="/"
          className="hover:text-orange-500 text-[16px] font-semibold "
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className="hover:text-orange-500 text-[16px] font-semibold "
        >
          About Us
        </Link>
      </li>
      <li>
        <Link
          to="/courses"
          className="hover:text-orange-500 text-[16px] font-semibold "
        >
          Courses
        </Link>
      </li>
      <li>
        <Link
          to="/events"
          className="hover:text-orange-500 text-[16px] font-semibold "
        >
          Events
        </Link>
      </li>

      <li>
        <Link
          to="/blogs"
          className="hover:text-orange-500 text-[16px] font-semibold "
        >
          Blogs
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          className="hover:text-orange-500 text-[16px] font-semibold "
        >
          Gallery
        </Link>
      </li>

      <div className="">
        <button
          className={`w-16 h-8 rounded-full border justify-between ${
            theme === "dark" ? "border-gray-700" : "border-white"
          } flex items-center justify-center transition duration-300 focus:outline-none shadow relative`}
          onClick={toggleTheme}
        >
          <div
            id="switch-toggle"
            className={`w-8 h-8 rounded-full transition duration-500 transform ${
              theme === "dark"
                ? "bg-gray-700 translate-x-full"
                : "bg-yellow-500 -translate-x-2"
            } p-1 text-white flex items-center justify-center`}
          >
            {theme === "dark" ? darkIcon : lightIcon}
          </div>
        </button>
      </div>
    </>
  );
  return (
    <div>
      <div className="navbar bg-[#030033] text-white fixed z-20">
        <div className="navbar-start ">
          <div className="dropdown ">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#030033] rounded-box w-52"
              >
                {menuItems}
              </ul>
            )}
          </div>
          <Link to="/" className=" h-3/5">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
        <div className="navbar-end ]">
          {user ? (
            <>
              <div className="dropdown dropdown-end ">
                <label
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  tabIndex={1}
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    {user ? (
                      <img
                        className="border-slate-50 border-2"
                        src={user?.photoURL}
                      />
                    ) : (
                      <span className="w-full m-auto text-center justify-center items-center">
                        <FaUser />
                      </span>
                    )}
                  </div>
                </label>
                {isProfileMenuOpen && (
                  <ul
                    tabIndex={1}
                    className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#080227] rounded-box w-52"
                  >
                    <li>
                      <Link to="/dashboard/profile" className="justify-between">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li>
                    <li>
                      <button
                        className="font-serif font-semibold text-[17px] text-[#ffffff] bg-[#ff662a] hover:text-white hover:bg-[#30304d] duration-300 ease-in-out"
                        onClick={() => {
                          handlelogOut();
                          setIsProfileMenuOpen(false); // Close the menu after logout
                        }}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-[#ff9e43] font-semibold text-lg hover:text-[#ff662a] duration-300 ease-in-out border-r-2 pr-3"
              >
                Login
              </Link>
              <Link
                to="signup"
                className="text-[#ff9e43] font-semibold text-lg hover:text-[#ff662a] duration-300 ease-in-out  pl-3"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
