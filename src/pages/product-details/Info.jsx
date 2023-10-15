import React, { useContext, useRef, useState } from "react";
import color1 from "../../assets/images/brown.png";
import color2 from "../../assets/images/black.png";
import color3 from "../../assets/images/white.png";
import color4 from "../../assets/images/charcoal.png";
import { BsInfoCircle, BsHandbagFill } from "react-icons/bs";
import { Rating } from "@smastrom/react-rating";
import SocialShare from "../../components/SocialShare/SocialShare";
import { FaPlay, FaPause } from "react-icons/fa";
import ImgBaseUrl from "../../components/ImgBaseUrl/ImgBaseUrl";
import { CartContext } from "../../Provider/CartProvider";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Info = ({ category, changeCategory, product, cost, video }) => {
  const [selectedImage, setSelectedImage] = useState("brown");
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);
  const { cartData, setProductQuantity, isIdTrue } = useContext(CartContext);
  const navigate = useNavigate();

  // toggle video play pause
  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="pt-16">
      <div className="w-full">
                {/* Modal Container */}
                <div>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box  border-2 border-primary">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <p className="text-primary font-medium mb-2">Added To Your Cart</p>
             <div className="flex items-center justify-around gap-5 border-t-2 border-b-2 py-5">
              <figure className="w-[100px]">
                <img src={ImgBaseUrl(product?.p_pic)} alt="" className="object-cover w-full h-full border" />
              </figure>
              <h3>{product?.p_name}</h3>
              <p>${cost?.product_sale_price}</p>
             </div>
             <div className="mt-5">
             <Link to='/checkout' className="btn btn-primary rounded-full w-full text-white">
             view Cart
             </Link>
             <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-outline btn-primary rounded-full w-full mt-5">Continue Shopping</button>
              </form>
             </div>
            </div>
          </dialog>
        </div>
        <div className="text-primary py-6">
          <h4 className="text-xl font-medium leading-loose">MEET LUDLOW</h4>
          <p className="text-lg font-light leading-loose">
            {product?.p_s_description}
          </p>
        </div>

         {/* <div className="pt-8 pb-0 md:pb-8">
          <button className="btn btn-outline bg-white hover:bg-primary text-primary rounded-full hover:text-white w-[300px] md:w-[400px] text-sm font-normal">
            <p className="flex gap-2 items-center">
              <BsInfoCircle /> In stock - Ships within Two Weeks
            </p>
          </button>{" "}
          <br />
          <button
            onClick={() => handleAddToCart(product?.p_id)}
            className="bg-primary hover:bg-white text-white hover:text-primary rounded-full w-[300px] md:w-[400px] btn btn-outline justify-start text-sm font-normal mt-6"
          >
            <p className="flex gap-2 items-center">
              <BsHandbagFill className="" />{" "}
              {!isIdTrue(product?.p_id) ? "Add to cart-" : "View Cart"} $
              {cost?.product_sale_price}
            </p>
          </button>
        </div>  */}

        {/* video */}
        <div className="relative">
          <div className=" w-full h-full">
            <video
              playsInline
              autoPlay
              muted
              loop
              poster="cake.jpg"
              className="w-full h-[100vh] object-cover lg:object-cover"
              ref={videoRef}
            >
              <source src={ImgBaseUrl(video)} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* video button */}
          <div className="absolute z-10 right-8 bottom-8">
            <button
              onClick={togglePlayPause}
              className="border border-primary bg-white hover:bg-[#D8EDF5] transition-all duration-300 ease-linear p-2 rounded-full"
            >
              {isPlaying ? (
                <div className="flex items-center gap-2 px-2 text-primary">
                  <p className="bg-primary p-2 rounded-full">
                    <FaPause className="text-white text-sm" />
                  </p>
                  <p>Pause</p>
                </div>
              ) : (
                <div className="flex items-center gap-2 px-2 text-primary">
                  <p className="bg-primary p-2 rounded-full">
                    <FaPlay className="text-white text-sm" />
                  </p>
                  <p>Play</p>
                </div>
              )}
            </button>
          </div>
        </div>

        {/* <div className="block lg:flex items-center gap-8">
          <nav className="pt-8">
            <ul className="block md:flex justify-between text-sm md:text-base text-primary font-normal text-center">
              <li
                onClick={() => changeCategory("details")}
                className={`cursor-pointer ${
                  category === "details"
                    ? "bg-primary text-white"
                    : "bg-gray-100"
                } hover:text-white py-4 hover:bg-primary px-10 shadow shadow-[#CECECE]`}
              >
                Product details
              </li>
              <li
                onClick={() => changeCategory("dimension")}
                className={`cursor-pointer ${
                  category === "dimension"
                    ? "bg-primary text-white"
                    : "bg-gray-100"
                } hover:text-white py-4 hover:bg-primary px-10 shadow shadow-[#CECECE]`}
              >
                Dimensions
              </li>
              <li
                onClick={() => changeCategory("warranty")}
                className={`cursor-pointer ${
                  category === "warranty"
                    ? "bg-primary text-white"
                    : "bg-gray-100"
                } hover:text-white py-4 hover:bg-primary px-10 shadow shadow-[#CECECE]`}
              >
                Warranty
              </li>
            </ul>
          </nav>

          <SocialShare />
        </div> */}
      </div>
    </section>
  );
};

export default Info;
