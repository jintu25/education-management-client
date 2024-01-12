import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import ReactStars from 'react-stars';
import { AuthContext } from '../../../Providers/AuthProviders';
import Swal from 'sweetalert2';
// import Swal from 'sweetalert2';

const AddReview = () => {
  const { user } = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();

  const [ratings, setRatings] = useState(0) 
  
  const ratingChanged = (newRating) => {
    setRatings(newRating);
  };

  const onSubmit = (data) => {
    const { name, details } = data;
    const reviews = { name, details, img: user?.photoURL, rating: ratings };
    console.log(reviews);

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("access-token")}`,
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((result) => {
        reset();
        if (result.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Thank you for your review...",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Add Review</h2>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600 mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            {...register("name", { required: true })}
            className="w-full p-2 border rounded-md  text-slate-950"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="comment"
            className="block text-sm font-medium text-gray-600 mb-2">
            Comment
          </label>
          <textarea
            id="comment"
            name="comment"
            {...register("details", { required: true })}
            rows="4"
            className="w-full p-2 border rounded-md"
            placeholder="Write your review here..."
            required></textarea>
        </div>

        <div className="flex">
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={40}
            activeColor="#ffd700"
          />
        </div>

        <div className="col-span-2 text-right">
          <button className="btn btn-primary">
            <input
              className="py-3 px-6 font-bold w-full sm:w-32 cursor-pointer"
              type="submit"
              value="Add Review"
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
