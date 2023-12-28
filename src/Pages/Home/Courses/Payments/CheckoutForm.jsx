import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import image from "../../../../assets/images/other/payment.jpg";
import useDetailsCourse from "../../../../Hooks/useDetailscourse";
import { AuthContext } from "../../../../Providers/AuthProviders";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../../../Providers/ThemeProvider";

const CheckoutForm = () => {
  const { user } = useContext(AuthContext);
  const [detailsCourses, isLoadingDetailsCourse] = useDetailsCourse();
  const [cardError, setCardError] = useState("");
  const paymentStripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState();
  const [transactionId, setTransactionId] = useState();

  const token = localStorage.getItem("access-token");
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (!detailsCourses || !detailsCourses.price || isLoadingDetailsCourse) {
      // Handle loading or missing data
      return;
    }

    fetch(
      "https://dragon-news-server-n2l9xp6ol-jintu45.vercel.app/create-payment-intent",
      {
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          price: detailsCourses.price,
          // Add other data as needed
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [detailsCourses, isLoadingDetailsCourse, token]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!paymentStripe || !elements || !clientSecret) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await paymentStripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await paymentStripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "unknown",
            email: user?.email || "unknown user",
          },
        },
      });
    if (confirmError) {
      console.log("error for payment:", confirmError);
    }
    setProcessing(false);
    if (paymentIntent && paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const payment = {
        name: user?.displayName,
        image: detailsCourses.image,
        email: user?.email,
        courseName: detailsCourses?.name,
        transactionId: paymentIntent.id,
        amount: paymentIntent.amount,
        currency: paymentIntent.currency,
        status: "payment successfully",
        process: "panding",
      };

      try {
        const response = await axios.post(
          "https://dragon-news-server-n2l9xp6ol-jintu45.vercel.app/payment",
          payment,
          {
            headers: {
              authorization: `bearer ${token}`,
              "Content-Type": "application/json", // Add this if needed
            },
          }
        );
        if (response.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Payment pay successfully...",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(from, { replace: true });
        }
      } catch (error) {
        // Handle errors
        console.error("Error posting payment info:", error);
      }
    }
  };
  return (
    <div className={` py-16 ${theme}`}>
      <div className="h-screen lg:min-h-screen flex items-center ">
        <form
          onSubmit={handleSubmit}
          method="POST"
          id="checkout"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
          }}
          className="w-full max-w-xl mx-auto bg-white rounded shadow-xl relative py-4"
        >
          <div className="text-gray-900 font-medium text-xs text-center flex flex-col items-center justify-center">
            <img
              className="h-20 w-20 rounded-full shadow-xl border-4 border-gray-400"
              src={image}
              alt="logo"
            />
            <p className="mx-2 my-3 text-lg">Payment Your Courses</p>
          </div>
          <div className="py-2 px-4 md:px-8">
            <div className="bg-gray-200 rounded py-2">
              <div className="rounded-t-lg text-xs text-gray-800 w-full flex items-center justify-between border-b border-gray-300">
                <div className="rounded-t-lg text-xs text-gray-800 w-full flex items-center justify-between border-b border-gray-300">
                  <h4 className="block ml-2 font-semibold">Credit card</h4>
                  <div className="flex">
                    <img
                      className="h-10 w-10 object-contain mr-2"
                      src="https://upload.wikimedia.org/wikipedia/commons/1/16/Former_Visa_%28company%29_logo.svg"
                      alt="Visa"
                    />
                    <img
                      className="h-10 w-10 object-contain mr-2"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png"
                      alt="Master card"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-1 p-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Card name"
                  required
                  className="w-full px-2 py-1 lg:px-4 lg:py-2 text-gray-700 bg-gray-100 text-xs lg:text-sm border border-gray-300 rounded-lg focus:outline-none focus:bg-white"
                />
              </div>
            </div>

            {/* Stripe CardElement */}
            <div className="mt-4">
              <CardElement
                className="border border-slate-300 p-4 rounded-sm"
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#424770",
                      "::placeholder": {
                        color: "#aab7c4",
                      },
                    },
                    invalid: {
                      color: "#9e2146",
                    },
                  },
                }}
              />
            </div>
            {cardError && (
              <p className="text-red-500 font-medium text-center mt-2">
                {cardError}
              </p>
            )}
            {transactionId && (
              <p className="text-sky-500 text-center font-semibold">
                transaction successfully with transaction id {transactionId}
              </p>
            )}

            <div className="mt-4">
              <div className="w-full">
                <button
                  type="submit"
                  disabled={
                    !paymentStripe ||
                    !clientSecret ||
                    processing ||
                    transactionId
                  }
                  className="h-auto lg:h-12 text-xs py-1 lg:py-2 px-2 lg-px-4 text-white font-light tracking-wider bg-gray-900 rounded-lg uppercase w-full focus:outline-none focus:shadow-outline"
                >
                  Pay
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
