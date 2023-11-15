import { Link } from "react-router-dom";
import image from "../../../src/assets/images/other/registration.png";
const SignUp = () => {
  return (
    <div className="max-w-screen-xl m-auto py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-6">
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <section className="max-w-4xl p-6 mx-auto rounded-md shadow-md mt-20">
            <h1 className="text-xl font-bold text-black capitalize ">
              Create New Account
            </h1>
            <form>
              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                  <label className="text-[#555555]" htmlFor="username">
                    Username
                  </label>
                  <input
                    id="username"
                    type="text"
                    className="block border rounded-lg border-slate-500 w-full px-4 py-2 mt-2 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    placeholder="Type Your Name"
                  />
                </div>

                <div>
                  <label className="text-[#555555]" htmlFor="emailAddress">
                    Email Address
                  </label>
                  <input
                    id="emailAddress"
                    type="email"
                    className="block border rounded-lg border-slate-500 w-full px-4 py-2 mt-2 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    placeholder="Type Your E-mail"
                  />
                </div>

                <div>
                  <label className="text-[#555555]" htmlFor="password">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="block border rounded-lg border-slate-500 w-full px-4 py-2 mt-2 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    placeholder="Type Password"
                  />
                </div>
                <div>
                  <label
                    className="text-[#555555]"
                    htmlFor="passwordConfirmation">
                    Select
                  </label>
                  <select className="block border rounded-lg border-slate-500 w-full px-4 py-2 mt-2 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                    <option>Surabaya</option>
                    <option>Jakarta</option>
                    <option>Tangerang</option>
                    <option>Bandung</option>
                  </select>
                </div>

                <div>
                  <label
                    className="text-[#555555]"
                    htmlFor="passwordConfirmation">
                    Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    className="block border rounded-lg border-slate-500 w-full px-4 py-2 mt-2 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white">
                    Image
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-white"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true">
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth="2"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                          <span className="">Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1 text-white">or drag and drop</p>
                      </div>
                      <p className="text-xs text-white">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
                  Sign Up
                </button>
              </div>
            </form>
            <hr className="my-6 border-gray-300 w-full" />
            <button className="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150 w-full text-center justify-center my-6">
              <img
                className="w-6 h-6"
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                loading="lazy"
                alt="google logo"
              />
              <span>Login with Google</span>
            </button>
            <p className="text-[#141414dc] font-medium text-center">
              already Have an account{" "}
              <Link to="/login" className="text-sky-500 underline">
                please login
              </Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
