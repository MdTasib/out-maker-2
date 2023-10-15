import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import Button from "../../shared/Button/Button";


import ImgBaseUrl from "../../components/ImgBaseUrl/ImgBaseUrl";

const Dimensions = ({ dimensions }) => {
  const [singleDimension, setSingleDimension] = useState(null);

  const handleDimensionTab = (id) => {
    const singleData = dimensions?.find(
      (dimension) => dimension?.dimension?.dim_id === id
    );
    setSingleDimension(singleData);
  };

  console.log("line 19", dimensions[0].dimension?.dim_width);
  return (
    <section className="w-full p-4 md:p-10">
      <h4 className="text-primary text-2xl font-semibold uppercase">
        Dimensions
      </h4>

      <div className="py-6">
        {dimensions?.map((dimension) => (
          <button
            key={dimension?.dimension?.dim_id}
            onClick={() => handleDimensionTab(dimension?.dimension?.dim_id)}
            className="btn btn-primary rounded-full text-white hover:text-primary hover:bg-white font-normal mr-4 px-6 text-xs"
          >
            {dimension?.dimension?.dim_title}
          </button>
        ))}
      </div>
      <div className="block md:flex gap-4 pb-6">
        <div className="border-2 border-gray-200 rounded-lg text-primary font-normal text-base md:w-1/3 p-4 mb-4 md:mb-0">
          <p>
            {!singleDimension
              ? dimensions[0].dimension?.dim_title
              : singleDimension?.dimension?.dim_title}
            WITH
            {!singleDimension
              ? dimensions[0].dimension?.dim_width
              : singleDimension?.dimension?.dim_width}
            " x
            {!singleDimension
              ? dimensions[0].dimension?.dim_length
              : singleDimension?.dimension?.dim_length}
            ' x
            {!singleDimension
              ? dimensions[0].dimension?.dim_height
              : singleDimension?.dimension?.dim_height}
            "
          </p>
          <p>
            Weight:
            {!singleDimension
              ? dimensions[0].dimension?.dim_weight
              : singleDimension?.dimension?.dim_weight}
          </p>
        </div>
      </div>

      <div className="pt-10">
        <img
          src={ImgBaseUrl(
            !singleDimension
              ? dimensions[0].dimension?.dim_pic
              : singleDimension?.dimension?.dim_pic
          )}
          alt=""
          className="md:w-2/3"
        />
      </div>

      <Button className="btn btn-primary rounded-full text-white hover:text-primary hover:bg-white font-normal px-6 mt-5">
        View Full Spec PDF <BsArrowRight className="ms-2" />
      </Button>
    </section>




    // <section className='container mx-auto p-4 md:p-10'>
    // 	<h4 className='text-primary text-2xl font-semibold uppercase'>
    // 		Dimensions
    // 	</h4>

    // 	<div className='py-6'>
    // 		<Button className='btn btn-primary rounded-full text-white hover:text-primary hover:bg-white font-normal mr-4 px-6'>
    // 			90° Corner
    // 		</Button>
    // 		<Button className='btn border-1 border-primary rounded-full text-primary hover:text-white hover:bg-primary bg-white font-normal px-6'>
    // 			45° Corner
    // 		</Button>
    // 	</div>

    // 	<div className='block md:flex gap-4 pb-6'>
    // 		<div className='border-2 border-gray-200 rounded-lg text-primary font-normal text-base md:w-1/3 p-4 mb-4 md:mb-0'>
    // 			<p>LARGE SECTIONAL WITH 90° CORNER 97.75" x 97.75' x 30"</p>
    // 		</div>
    // 		<div className='border-2 border-gray-200 rounded-lg text-primary font-normal text-base md:w-1/3 p-4'>
    // 			<p>LARGE SECTIONAL WITH 45° CORNER 97.75" x 97.75' x 30"</p>
    // 		</div>
    // 	</div>

    // 	<Button className='btn btn-primary rounded-full text-white hover:text-primary hover:bg-white font-normal px-6'>
    // 		View Full Spec PDF <BsArrowRight className='ms-2' />
    // 	</Button>

    // 	<div className='pt-10'>
    // 		<img src={dimensions} alt='' className='md:w-2/3' />
    // 	</div>
    // </section>
  );
};

export default Dimensions;
