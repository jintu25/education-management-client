import { Link, useNavigate } from "react-router-dom";
import image from "../../../src/assets/images/other/registration.png";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import { FaRegMehRollingEyes } from "react-icons/fa";
import { FaFaceRollingEyes } from "react-icons/fa6";
import { ThemeContext } from "../../Providers/ThemeProvider";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState();
  const { theme } = useContext(ThemeContext);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return;
    }
    createUser(data.email, data.password).then((result) => {
      const user = result.user;

      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const saveUser = {
            name: data.name,
            email: data.email,
            photoURL: data.photoURL,
          };
          fetch(
            "https://dragon-news-server-n2l9xp6ol-jintu45.vercel.app/users",
            {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(saveUser),
            }
          );
          reset();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Login successfully...",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  return (
    <div className={`${theme}`}>
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

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                  <div>
                    <label className="text-[#555555]" htmlFor="username">
                      Username
                    </label>
                    <input
                      id="Your Name"
                      type="text"
                      name="name"
                      {...register("name", { required: true })}
                      className="block border rounded-lg border-slate-500 w-full px-4 py-2 mt-2 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      placeholder="Type Your Name"
                    />
                    {errors.name && (
                      <span className="text-red-500">
                        name field is required
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="text-[#555555]" htmlFor="emailAddress">
                      Email Address
                    </label>
                    <input
                      id="emailAddress"
                      type="email"
                      name="email"
                      {...register("email", { required: true })}
                      className="block border rounded-lg border-slate-500 w-full px-4 py-2 mt-2 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      placeholder="Type Your E-mail"
                    />
                    {errors.email && (
                      <span className="text-red-500">
                        email field is required
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="text-[#555555]" htmlFor="password">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        {...register("password", {
                          pattern:
                            /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                        })}
                        className="block border rounded-lg border-slate-500 w-full px-4 py-2 mt-2 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        placeholder="Type Password"
                      />
                      <span
                        className="absolute right-2 top-2 cursor-pointer text-[22px] "
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? (
                          <FaRegMehRollingEyes className="text-green-600" />
                        ) : (
                          <FaFaceRollingEyes className="text-zinc-800500" />
                        )}
                      </span>
                    </div>
                    {errors.password && (
                      <span className="text-red-500">
                        Password must be strong
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-700">
                      Type Your PhotoURL
                    </label>
                    <input
                      {...register("photoURL", { required: true })}
                      type="text"
                      name="photoURL"
                      id=""
                      placeholder="photoURL"
                      className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                      autoFocus
                      required
                    />

                    {errors.photoURL && (
                      <span className="text-red-500 text-sm font-semibold">
                        photoURL field is required
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <input
                    className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
                    type="submit"
                    value="sign Up"
                  />
                </div>
              </form>
              <hr className="my-6 border-gray-300 w-full" />
              <SocialLogin></SocialLogin>
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
    </div>
  );
};

export default SignUp;
