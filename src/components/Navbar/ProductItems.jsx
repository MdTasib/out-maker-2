import React, { useState } from "react";
import img1 from "../../assets/Navbar/product-item/image-1.png";
import img2 from "../../assets/Navbar/product-item/image-2.png";
import img3 from "../../assets/Navbar/product-item/image-3.png";
import img4 from "../../assets/Navbar/product-item/image-4.png";
import img5 from "../../assets/Navbar/product-item/image-5.png";
import img6 from "../../assets/Navbar/product-item/image-6.png";
import { FaArrowRight } from "react-icons/fa";
import color1 from "../../assets/images/brown.png";
import color2 from "../../assets/images/black.png";
import color3 from "../../assets/images/white.png";
import color4 from "../../assets/images/charcoal.png";
import color5 from "../../assets/images/option-1.png";
import color6 from "../../assets/images/option-2.png";
import color7 from "../../assets/images/option-3.png";
import color8 from "../../assets/images/option-4.png";
import { Link } from "react-router-dom";
import useCollections from "../../Hooks/useCollections";
import Carousel from "react-multi-carousel";
import ImgBaseUrl from "../ImgBaseUrl/ImgBaseUrl";

const ProductItems = () => {
  const { collections } = useCollections();
  return (
    <>
      <section className="lg:px-32 bg-white p-5 md:p-0 ">
        <div className="pt-10 pb-20 relative stylish">
          <h3 className="text-primary font-medium text-xl mb-7 uppercase">
            Outmaker Products
          </h3>
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerclassName="container-with-dots"
            dotListclassName=""
            draggable
            focusOnSelect={false}
            infinite
            itemclassName=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: { max: 5000, min: 1024 },
                items: 6,
              },
              tablet: {
                breakpoint: { max: 1024, min: 780 },
                items: 2,
              },
              mobile: {
                breakpoint: { max: 780, min: 0 },
                items: 1,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={true}
            sliderclassName=""
            slidesToSlide={1}
            swipeable
          >
            {collections?.map((collection) => (
              <div key={collection?.category_id}>
                <div className="rounded-lg card-hover mr-5 p-2">
                  <figure>
                    <img
                      src={ImgBaseUrl(collection?.category_pic)} // Directly use collection?.category_pic
                      alt=""
                      className="object-cover w-[280px] h-[200px] rounded-lg"
                    />
                  </figure>
                  <Link to={`products/${collection?.category_id}`}>
                    <p className="mt-2">{collection?.category_name}</p>
                    <p className="text-sm">{collection?.category_desc}</p>
                  </Link>
                </div>
              </div>
            ))}
          </Carousel>

          <div className="absolute bottom-[5%] left-[15%] bg-[#d5dfff] p-[1px] ml-20 w-[60%] stylish-devider"></div>
        </div>
        {/* button */}
        <div className="my-12 flex items-center lg:items-start justify-center lg:justify-start">
          <Link to="/collections">
            <button className="flex items-center gap-2 bg-primary text-white text-lg py-4 px-7 rounded-full hover:bg-white hover:text-primary border border-primary duration-500 transition-all ease-in-out">
              <span>View All Products</span>
              <span>
                <FaArrowRight />
              </span>
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default ProductItems;

/*

<div className="flex flex-col md:flex-wrap lg:flex-nowrap md:flex-row gap-5 mb-[30px]">
          <div className="border rounded-lg card-hover">
            <img src={img1} alt="item" className="p-2 rounded" />
            <h2 className="text-center mb-5 mt-2">Product</h2>
          </div>
*/
