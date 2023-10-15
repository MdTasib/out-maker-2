import React, { useEffect, useState } from "react";
import DetailsSlider from "./DetailsSlider";
import Info from "./Info";
import Details from "./Details";
import Dimensions from "./Dimensions";
import Warranty from "./Warranty";
import mic from "../../assets/images/mic.png";
import { useLoaderData, useParams } from "react-router-dom";
import BuyerReview from "./BuyerReview";
import CartBar from "./CartBar";
import useCart from "../../Hooks/useCart";
import UserInitialization from "../../components/UserInitialization/UserInitialization";

const ProductDetails = () => {
  const [category, setCategory] = useState("details");
  const changeCategory = (payload) => setCategory(payload);

  //single product data
  const receivedData = useLoaderData();
  const {
    Product,
    Product_Cost,
    Images,
    Contents,
    Secondary_Images,
    Single_Video,
    Dimensions: data,
    Comments_Replies,
  } = receivedData;

  return (
    <main className="relative">
      <DetailsSlider product={Product} images={Images} />
      <Info
        category={category}
        changeCategory={changeCategory}
        product={Product}
        video={Single_Video[0]?.video_url}
        cost={Product_Cost}
      />
      {category === "details" && (
        <Details
          product={Product}
          content={Contents}
          images={Secondary_Images}
        />
      )}
      {category === "dimension" && (
        <Dimensions
          tpye={Product?.p_type}
          id={Product?.p_id}
          dimensions={data}
        />
      )}
      {category === "warranty" && <Warranty product={Product} />}
      {/* <Weather /> */}
      {/* <Furniture /> */}
      {/* <Buyer /> */}
      <CartBar product={Product} cost={Product_Cost}/>
      <BuyerReview reviews={Comments_Replies} id={Product?.p_id} />
      {/* to generate a rnadom number when user will land on this page */}
      <UserInitialization />
    </main>
  );
};

export default ProductDetails;
