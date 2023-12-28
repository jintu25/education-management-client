import React, { useState } from 'react';

const AddReview = () => {
  const [review, setReview] = useState({
    name: '',
    comment: '',
    rating: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the review submission (e.g., API call, state update, etc.)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Add Review</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={review.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            placeholder="John Doe"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="comment" className="block text-sm font-medium text-gray-600 mb-2">
            Comment
          </label>
          <textarea
            id="comment"
            name="comment"
            value={review.comment}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 border rounded-md"
            placeholder="Write your review here..."
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="rating" className="block text-sm font-medium text-gray-600 mb-2">
            Rating
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={review.rating}
            onChange={handleChange}
            min="0"
            max="5"
            className="w-full p-2 border rounded-md"
            placeholder="Enter rating (0-5)"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default AddReview;
