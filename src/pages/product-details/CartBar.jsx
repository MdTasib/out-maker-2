import React, { useContext, useRef, useState } from "react";
import { BsInfoCircle, BsHandbagFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import ImgBaseUrl from "../../components/ImgBaseUrl/ImgBaseUrl";
import { CartContext } from "../../Provider/CartProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CartBar = ({ product, cost }) => {
  const { cartData, setProductQuantity, isIdTrue, setToggle, toggle } =
  useContext(CartContext);
  const navigate = useNavigate();
  // handle cart data
  const handleAddToCart = (id) => {
    const userCode = localStorage.getItem("usercode");
    const isIdMatched = isIdTrue(id);

    if (isIdMatched) {
      navigate("/checkout");
    } else {
      fetch(
        `https://theoutmaker.com/public/api/user/product/add_to/cart/${userCode}/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          toast.success("Successfully Added to your cart.");
          setToggle(!toggle);
          document.getElementById('my_modal_3').showModal()
        });
    }
  };
  console.log(product);

  return (
    <div className="cart-bar fixed bottom-4 left-4 right-4 z-50 p-3 bg-white flex items-center justify-between rounded-full shadow-lg h-16">
      <div className="flex items-center">
        <div
          className="ar-wrapper thumb-wrapper"
          style={{ paddingBottom: "1.0" }}
        >
          <div className="flex items-center justify-center w-16 h-16">
            <img
              className="lazy entered loaded"
              src={ImgBaseUrl(product?.p_pic)}
              alt=""
              data-ll-status="loaded"
            />
          </div>
        </div>
        <p className="ml-2">{product.p_name}</p>
        <span className="text-xs text-right text-gray-500">
          (Ships within 1 week)
        </span>
      </div>

      <div className="divider divider-horizontal"></div>

      <div className="content-wrapper flex items-center justify-between">
        <div className="price-info mr-2">
          <p className="price">
            <del>${cost?.product_regular_price}</del>{" "}
            <span className="text-[#BF0A30] pl-[5px]">
              ${cost?.product_sale_price}
            </span>
          </p>
          <p
            className="affirm-as-low-as"
            data-page-type="product"
            data-amount="350400"
          >
            Free return and 5 Year Warranty
          </p>
        </div>
        <button
          onClick={() => handleAddToCart(product?.p_id)}
          className="bg-primary hover:bg-white text-white hover:text-primary rounded-full w-[300px] md:w-[400px] btn btn-outline justify-start text-sm font-normal"
        >
          <p className="flex gap-2 items-center">
            <BsHandbagFill className="" />{" "}
            {!isIdTrue(product?.p_id) ? "Add to cart-" : "View Cart"} $
            {cost?.product_sale_price}
          </p>
        </button>
      </div>
    </div>
  );
};

export default CartBar;
