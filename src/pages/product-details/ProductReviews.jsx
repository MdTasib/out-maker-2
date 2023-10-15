import React from "react";
import img from "../../assets/images/review-user-1.png";
import reviewImg from "../../assets/images/review-img1.png";
import { Rating } from "@smastrom/react-rating";
import SocialShare from "../../components/SocialShare/SocialShare";

const ProductReviews = ({ reviews }) => {
  function formatDate(inputDate) {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const date = new Date(inputDate);
    return date.toLocaleDateString(undefined, options);
  }
  return (
    <>
      {/* container */}
      {reviews?.map((review) => (
        <div key={review?.comment?.comment_id}>
          {/* image container */}
          <div className=" px-8 lg:px-5 py-7 border rounded-xl mb-8 w-full">
          {/* <div className="flex flex-col lg:flex-row gap-5 px-8 lg:px-5 py-7 border rounded-xl mb-8 w-full"> */}
            {/* <div className="lg:w-1/6 rounded-full">
              <img src={img} alt="" className="object-cover w-[60px] h-[60px] " />
            </div> */}
            {/* text container */}
            <div className="space-y-[20px] text-primary">
              <div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <h4 className="text-lg lg:text-xl">{review?.comment?.user_name}</h4>
                 
                </div>
                {/* ratings container */}
                <div className="flex flex-row items-center gap-5">
                  <Rating style={{ maxWidth: 100 }} value={review?.comment?.rating} readOnly />
                  <p className="text-2xl">{review?.comment?.rating}</p>
                </div>
              </div>
              <p className="text-lg lg:text-xl text-primary">
                    {review?.comment?.title}
                  </p>
              <p>{review?.comment?.comment}</p>
              {/* images container */}
              {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-5">
                  <img src={reviewImg} alt="" className="w-full h-[152px] object-fill rounded-md"/>
                  <img src={reviewImg} alt="" className="w-full h-[152px] object-fill rounded-md"/>
                  <img src={reviewImg} alt="" className="w-full h-[152px] object-fill rounded-md"/>
                  <img src={reviewImg} alt="" className="w-full h-[152px] object-fill rounded-md"/>
            </div> */}
              {/* share and date  */}
              <div className="flex flex-col md:flex-row md:items-center justify-between w-full">
                <SocialShare />
                <p>{formatDate(review?.comment?.created_at)}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductReviews;
