import { Link, useLocation, useNavigate } from "react-router-dom";
import image from "../../assets/images/other/5243835.jpg";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()

  let from = location.state?.from?.pathname || "/";
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log("user: ", email, password);

    login(email, password).then((result) => {
      const user = result.user;
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Login successfully...",
        showConfirmButton: false,
        timer: 1500
      })
      navigate(from, {replace: true})
    });
  };

  return (
    <div className="max-w-screen-xl m-auto py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-4 lg:mx-0">
        <div>
          <img src={image} alt="login image" />
        </div>
        <div>
          <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
              Log in to your account
            </h1>

            <form
              onSubmit={handleSubmit}
              className="mt-6"
              action="#"
              method="POST">
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoFocus
                  autoComplete
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  id=""
                  placeholder="Enter Password"
                  minLength="6"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
          focus:bg-white focus:outline-none"
                  required
                />
              </div>
              <input
                type="submit"
                className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
        px-4 py-3 mt-6"
                value="Login"
              />
            </form>

            <hr className="my-6 border-gray-300 w-full" />
            <SocialLogin></SocialLogin>

            <p className="mt-8 text-center">
              Need an account?{" "}
              <Link
                to="/signup"
                className="text-blue-500 hover:text-blue-700 font-semibold">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
