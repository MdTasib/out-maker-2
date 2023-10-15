import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import roundedImage from "../../assets/images/slider-rounded.png";
import slider1 from "../../assets/images/details-slider1.png";
import slider2 from "../../assets/images/details-slider2.png";
import slider3 from "../../assets/images/details-slider3.png";
import slider4 from "../../assets/images/video.mp4";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../assets/css/details.css";
import ImgBaseUrl from "../../components/ImgBaseUrl/ImgBaseUrl";
import { FaPlay } from "react-icons/fa";

const DetailsSlider = ({ product, images }) => {
  const [headerImage, setHeaderImage] = useState(null);

  // handler for image change
  const handleImageClick = (image) => {
    setHeaderImage(image);
  };

  return (
    <header>
      <div className="text-center pt-10 md:pt-24 w-full h-[30vh] lg:h-[390px]">
        <div>
          <div className="block md:flex items-center justify-center">
            <h4 className="text-primary uppercase text-xl md:text-4xl font-semibold">
              {product?.p_name}
            </h4>
          </div>

          <div className="flex items-center justify-center mt-2">
            <Rating
              style={{ maxWidth: 100 }}
              value={product?.review ? product?.review?.[0]?.review : 4.5}
              readOnly
            />
          </div>
        </div>

        <div
          className="block md:flex pt-6"
          style={{ justifyContent: "center" }}
        >
          <div className="">
            <p className="text-xl font-normal">Color: Black</p>
            <div className="flex gap-4 pt-2">
  
              <div className="text-center">
                <div className="bg-[#D49854] h-9 w-9 rounded-full mx-auto"></div>
                <p className="text-xs text-[#666666] font-normal">Brown</p>
              </div>
              <div className="text-center">
                <div className="bg-[#DFD7C3] h-9 w-9 rounded-full mx-auto"></div>
                <p className="text-xs text-[#2F2E33] font-normal">Off White</p>
              </div>
       
            </div>
          </div>
        </div>

        {headerImage?.endsWith(".mp4") ? (
          <div className="lg:w-9/12 h-[25vh] lg:h-[370px] mx-auto">
            <video
              className="object-cover w-full h-full"
              controls
              muted
              poster={headerImage}
            >
              <source src={headerImage} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ) : (
          <div className="lg:w-9/12 h-[25vh] lg:h-[370px] mx-auto">
            <img
              src={headerImage ? headerImage : ImgBaseUrl(product?.p_pic)}
              alt=""
              className="object-fill w-full h-full"
            />
          </div>
        )}
      </div>

      <div className="w-full details-slider relative mt-40 md:mt-34 lg:mt-52">
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
          sliderclassName=""
          slidesToSlide={1}
          swipeable
        >
          {images?.map((image, index) => (
            <div
              key={index}
              onClick={() => handleImageClick(ImgBaseUrl(image?.image_url))}
              className="cursor-pointer"
            >
              <div
                className={`bg-white mx-auto flex justify-center items-center md:w-[180px] lg:w-[280px] h-[150px] rounded ${
                  headerImage === ImgBaseUrl(image?.image_url)
                    ? "border-2 border-primary"
                    : ""
                }`}
              >
                {image?.image_url.endsWith(".mp4") ? (
                  <div className="relative w-full h-full">
                    <video
                      src={ImgBaseUrl(image?.image_url)}
                      className="object-cover w-full h-full"
                    ></video>
                    <FaPlay className="absolute inset-0 m-auto" />
                  </div>
                ) : (
                  <img
                    src={ImgBaseUrl(image?.image_url)}
                    alt=""
                    className="object-cover md:object-contain w-full h-full"
                  />
                )}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </header>
  );
};

export default DetailsSlider;
