import { Rating } from "@smastrom/react-rating";
import React, { useState } from "react";
import toast from "react-hot-toast";

const WriteReview = ({ isReviw, id }) => {
  const [rating, setRating] = useState(0);

  // form submit functionalities
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const user_name = form.name.value;
    const user_email = form.email.value;
    const title = form.title.value;
    const comment = form.comment.value;
    
    fetch(`https://theoutmaker.com/api/product/single/comment/store/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rating, user_name, user_email, title, comment }),
    })
    .then(res=> res.json())
    .then(data => {
      if(data === 1){
        toast.success('Successfully Submitted!')
        form.reset()
      }
    })
  };
  // form submit functionalities
  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const question = form.question.value;
  };
  return (
    <>
      {isReviw ? (
        <div className="p-5">
          <div className="mb-2">
            <p className="text-lg mb-2">
              <span className="text-red-500">*</span>
              <span>Rating:</span>
            </p>
            <Rating
              style={{ maxWidth: 120 }}
              value={rating}
              onChange={setRating}
              isRequired
            />
          </div>
          <form onSubmit={handleReviewSubmit}>
            <div className="flex flex-col lg:flex-row lg:items-center gap-2 w-full lg:w-4/6">
              <div className="flex-1 mb-2">
                <p className="text-lg mb-2">
                  <span className="text-red-500">*</span>
                  <span>Name:</span>
                </p>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered border-primary rounded-full w-full"
                />
              </div>
              <div className="flex-1 mb-2">
                <p className="text-lg mb-2">
                  <span className="text-red-500">*</span>
                  <span>Email:</span>
                </p>
                <input
                  required
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered border-primary rounded-full w-full"
                />
              </div>
            </div>
            <div className="mb-2">
              <p className="text-lg mb-2">
                <span className="text-red-500">*</span>
                <span>Title:</span>
              </p>
              <input
                required
                type="text"
                name="title"
                placeholder="Title"
                className="input input-bordered border-primary rounded-full w-full lg:w-4/6"
              />
            </div>
            <div className="mb-2">
              <p className="text-lg mb-2">
                <span className="text-red-500">*</span>
                <span>Review:</span>
              </p>
              <textarea
                required
                name="comment"
                className="textarea textarea-bordered border-primary w-full lg:w-4/6"
                placeholder="Review"
              ></textarea>
            </div>
            <button
              className="btn btn-primary text-white"
              disabled={!rating ? true : false}
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <div className="p-5">
          <form onSubmit={handleQuestionSubmit}>
            <div className="flex flex-col lg:flex-row lg:items-center gap-2 w-full lg:w-4/6">
              <div className="flex-1 mb-2">
                <p className="text-lg mb-2">
                  <span className="text-red-500">*</span>
                  <span>Name:</span>
                </p>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered border-primary rounded-full w-full"
                />
              </div>
              <div className="flex-1 mb-2">
                <p className="text-lg mb-2">
                  <span className="text-red-500">*</span>
                  <span>Email:</span>
                </p>
                <input
                  required
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered border-primary rounded-full w-full"
                />
              </div>
            </div>
            <div className="mb-2">
              <p className="text-lg mb-2">
                <span className="text-red-500">*</span>
                <span>Review:</span>
              </p>
              <textarea
                required
                name="question"
                className="textarea textarea-bordered border-primary   w-full lg:w-4/6"
                placeholder="Question"
              ></textarea>
            </div>
            <button className="btn btn-primary text-white">Submit</button>
          </form>
        </div>
      )}
    </>
  );
};

export default WriteReview;
