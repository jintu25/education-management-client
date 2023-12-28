import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../../Providers/ThemeProvider";
// import CheckoutForm from "./Payments/CheckoutForm";

const EnrollCourse = ({ isOpen, onClose, detailsCourse }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  if (!isOpen) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const address = form.address.value;
    const phone = form.phone.value;
    const courses = form.courses.value;
    const payment = form.payment.value;

    console.log(name, email, address, phone, courses, payment);

    navigate("/payment");
  };

  return (
    <div className={`${theme}`}>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <form
            onSubmit={handleSubmit}
            className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-500 outline-none focus:outline-none"
          >
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h2 className="text-3xl font-semibold">
                Enroll For: {detailsCourse.name}
              </h2>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label htmlFor="full_name">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      id=""
                      disabled
                      required
                      value={user?.displayName}
                      className="py-2 px-4 w-full rounded-lg bg-gray-200 border mt-1"
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      id=""
                      value={user?.email}
                      disabled
                      className="py-2 px-4 w-full rounded-lg bg-gray-200 border mt-1"
                    />
                  </div>

                  <div className="md:col-span-3">
                    <label htmlFor="address">Address / Street</label>
                    <input
                      type="text"
                      name="address"
                      required
                      id=""
                      placeholder="your address"
                      className="py-2 px-4 w-full rounded-lg bg-gray-50 border mt-1"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="text"
                      name="phone"
                      required
                      id=""
                      placeholder="Phone number"
                      className="py-2 px-4 w-full rounded-lg bg-gray-50 border mt-1"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="country">Courses</label>
                    <div className=" items-center mt-1">
                      <input
                        type="text"
                        name="courses"
                        required
                        disabled
                        id=""
                        value={detailsCourse?.name}
                        className="py-2 px-4 w-full rounded-lg bg-gray-200 border mt-1"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="state">Total Payment</label>
                    <div className="">
                      <input
                        type="text"
                        name="payment"
                        id=""
                        disabled
                        placeholder="your state"
                        className="py-2 px-4 w-full rounded-lg bg-gray-300 border mt-1 text-[#f2380a] font-bold text-[17px] "
                        value={detailsCourse?.price}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={onClose}
              >
                Close
              </button>
              <input
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 cursor-pointer"
                type="submit"
                value="Confirm"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
};

export default EnrollCourse;
