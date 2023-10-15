import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import ImgBaseUrl from "../../components/ImgBaseUrl/ImgBaseUrl";

const ImageSlider = ({ images }) => {
  const [sideImage, setSideImage] = useState("");
  const [zoomed, setZoomed] = useState(false);

  const handleMouseEnter = () => {
    setZoomed(true);
  };

  const handleMouseLeave = () => {
    setZoomed(false);
  };
  return (
    <>
      <section className="flex flex-col lg:flex-row items-end gap-5 lg:gap-10 mb-20 p-2">
        <div
          className="h-[200px] md:h-[300px] lg:h-[500px] w-full lg:w-7/12 mr-2"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={ImgBaseUrl(
              sideImage === "" ? images[0]?.image_url : sideImage
            )}
            alt=""
            className={`md:object-fill object-fill h-full w-full rounded-md cursor-zoom-in ${
              zoomed ? "zoomed" : ""
            }`}
          />
        </div>

        {/* slider and text container */}
        <div className="lg:w-5/12 overflow-hidden">
          {/* slider */}
          <div>
            <Swiper
              modules={[Pagination]}
              navigation={true}
              pagination={{ clickable: true }}
              loop={true}
              className="w-[400px] md:w-[700px] lg:w-[800px] h-[200px] md:h-[350px]"
              spaceBetween={0}
              slidesPerView={1} // Default for mobile devices
              breakpoints={{
                640: {
                  slidesPerView: 2, // Two slides for tablets
                },
                1024: {
                  slidesPerView: 2, // Two slides for PCs
                },
              }}
            >
              {images.map((image, index) => (
                <SwiperSlide
                  key={index}
                  onClick={() => setSideImage(image?.image_url)}
                  className="px-2 pb-10"
                >
                  <img
                    src={ImgBaseUrl(image?.image_url)}
                    alt="slider-image"
                    className={`object-fill h-full w-full rounded-2xl drop-shadow-xl ${
                      sideImage === image?.image_url
                        ? "border-2 border-primary"
                        : ""
                    }`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImageSlider;
