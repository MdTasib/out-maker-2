import React from "react";
import { Link } from "react-router-dom";
import navImg from "../../assets/images/nav-img.png";
const LearnItem = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row p-5 lg:p-0 ">
        <div className="lg:px-32 grid grid-cols-2 lg:grid-cols-3 gap-[100px] mt-10 mb-24">
          {/* first column */}
          <div className="flex flex-col w-full">
            <div className="grid">
              <h3 className="nav-text-style">About</h3>
              <div className="space-y-[15px] flex flex-col">
                <Link>Our Story</Link>
                <Link>Customer Review</Link>
                <Link to="/sustainability">Sustainability</Link>
                <Link>Product Quality</Link>
                <Link>Careers</Link>
              </div>
            </div>
          </div>
          {/* second column */}
          <div>
            <h3 className="nav-text-style">Resources</h3>
            <div className="space-y-[15px] flex flex-col">
              <Link to="/blog">Our Blog</Link>
              <Link to="/shipping">Shipping & Delivery</Link>
              <Link to="/care-guide">Care & Maintaince</Link>
              <Link>Return & Refunds</Link>
              <Link>Frequently Asked Questions</Link>
            </div>
          </div>
          {/* third column */}
          <div>
            <h3 className="nav-text-style">Contact Info.</h3>
            <div className="">
              <a href="tel:+1234567890" className="mb-4 block">
                +1 (234) 567-890
              </a>
              <a href="tel:+1234567890" className="block mb-6">
                +1 (234) 567-890
              </a>
              <a href="mailto:outmaker@outmaker.com" className="mb-6">
                outmaker@outmaker.com
              </a>
              <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
            </div>
          </div>
          {/* img container */}
        </div>
        <div>
          <img src={navImg} alt="" className="object-fill h-full w-full" />
        </div>
      </div>
    </>
  );
};

export default LearnItem;
