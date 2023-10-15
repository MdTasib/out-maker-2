/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../assets/css/stylish.css";
import { FaArrowRight } from "react-icons/fa";
import useCollections from "../../Hooks/useCollections";
import ImgBaseUrl from "../ImgBaseUrl/ImgBaseUrl";
import { Link } from "react-router-dom";
import useCategories from "../../Hooks/useCategories";

const CollectionItem = () => {
const { categories} = useCategories()
  return (
    <>
      <section className="lg:px-32 bg-white mt-10 p-5 md:p-0">
        <div className="pt-10 pb-20 relative stylish">
          <h3 className="text-primary font-medium text-xl mb-7 uppercase">
            Outmaker Collection
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
                items: 3,
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
            {categories?.map((category) => (
              <div key={category?.collection_id}>

                <div className="lg:h-[339px] space-y-[16px] text-primary border border-gray-50 p-3 rounded card-hover">
                  <div className="h-[192px]">
                    <img
                      src={ImgBaseUrl(category?.collection_pic)} // Directly use collection?.category_pic
                      alt="IMAGE"
                      className="object-cover h-full w-full rounded"
                    />
                  </div>
                  <Link 
                  to={`category-product/${category?.collection_id}`}
                  className="text-xl md:text-2xl lg:text-3xl">{category?.collection_name}</Link>
                  <p className="text-xs pb-6">{category?.collection_desc}</p>

                </div>
              </div>
            ))}
          </Carousel>

          <div className="absolute bottom-[5%] left-[15%] bg-[#d5dfff] p-[1px] ml-20 w-[60%] stylish-devider"></div>
        </div>
        {/* button */}
        <div className="my-12 flex items-center lg:items-start justify-center lg:justify-start">
          <Link to="/categories">
            <button className="flex items-center gap-2 bg-primary text-white text-lg py-4 px-7 rounded-full hover:bg-white hover:text-primary border border-primary duration-500 transition-all ease-in-out">
              <span>View All Collections</span>
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

export default CollectionItem;
