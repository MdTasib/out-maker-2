import React, { useContext, useEffect } from "react";
import image from "../../assets/care-guide/image-1.png";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useState } from "react";
import PaymentButtons from "../../components/PaymentButtons";
import { Link } from "react-router-dom";
import UserInitialization from "../../components/UserInitialization/UserInitialization";
import { CartContext } from "../../Provider/CartProvider";
import ImgBaseUrl from "../../components/ImgBaseUrl/ImgBaseUrl";

const Checkout = () => {

  const {
    cartData,
    convertedData,
    objectOnlyData,
    setProductQuantity,
    isIdTrue,
    setToggle,
    toggle,
    setConvertedData,
    updateObjectOnlyData,
    fetchCartData
  } = useContext(CartContext);

  // Fetch cart data when the component mounts
  useEffect(() => {
    fetchCartData();
  }, []);
  // Calculate the total price from objectOnlyData
  const totalEstimatedPrice = objectOnlyData?.reduce(
    (total, item) => total + ((item?.cost?.total_cost * item?.qunatity) || 0),
    0
  );
  // handle increase the quantity
  const handleIncreaseQuantity = (id) => {
    const userCode = localStorage.getItem("usercode");
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
        console.log(data);
        setToggle(!toggle)
      });
    if (isIdTrue(id)) {
      // Update the quantity in the objectOnlyData array
      const updatedData = objectOnlyData.map((item) => {
        if (item.product.p_id === id) {
          return {
            ...item,
            qunatity: (item.qunatity || 0) + 1, // Increase the quantity by 1
          };
        }
        return item;
      });

      // Update the objectOnlyData state
      setProductQuantity((prev) => prev + 1);
      updateObjectOnlyData(updatedData);
    }
  };

  // handle decrease the quantity
  const handleDecreaseQuantity = (id) => {
    const userCode = localStorage.getItem("usercode");
    fetch(
      `https://theoutmaker.com/public/api/user/product/delete_from/cart/${userCode}/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToggle(!toggle);
      });

    if (isIdTrue(id)) {
      // Find the item to update or remove
      const updatedData = objectOnlyData.map((item) => {
        if (item.product.p_id === id) {
          if (item.qunatity > 1) {
            // Decrease the quantity by 1 (if it's greater than 1)
            return {
              ...item,
              qunatity: item.qunatity - 1,
            };
          } else {
            // Remove the item if the quantity is 1
            return null;
          }
        }
        return item;
      });

      // Remove null entries (items with quantity 0)
      const updatedDataWithoutNull = updatedData.filter((item) => item !== null);

      // Update the objectOnlyData state
      setProductQuantity((prev) => prev - 1);
      updateObjectOnlyData(updatedDataWithoutNull);
    }
  };

  return (
    <>
      <section className="text-primary container mx-auto px-2 md:px-10 py-10 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* cards */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold mb-6">
              Your Cart ({cartData ? objectOnlyData.length : 0} Item )
            </h3>
            <div className="shadow-xl rounded">
              {/* card */}

              {objectOnlyData?.map((singleData, index) => (
                <div key={index} className="flex flex-col md:flex-row">
                  <div>
                    <figure className="w-full md:w-[280px] md:pl-6 py-8">
                      <img
                        src={ImgBaseUrl(singleData?.product?.p_pic)}
                        alt=""
                        className="object-fill w-full h-full rounded-lg"
                      />
                    </figure>
                  </div>
                  <div className="card-body">
                    <h2 className="card-title">
                      {singleData?.product?.p_name}
                    </h2>
                    <p>Color: Glacier</p>
                    <p>Dimension: {singleData?.dimension}</p>
                    <p>Category: {singleData?.category}</p>
                    <div className="card-actions justify-end items-center">
                      <p className="text-xl">
                        Price: ${singleData?.cost?.product_sale_price}
                      </p>
                      <div className="flex items-center gap-6 border-2 border-primary p-1 rounded-full cursor-pointer">
                        <p
                          onClick={() =>
                            handleDecreaseQuantity(singleData?.product?.p_id)
                          }
                        >
                          <FaMinus />
                        </p>
                        <span>{singleData?.qunatity}</span>
                        <p
                          onClick={() =>
                            handleIncreaseQuantity(singleData?.product?.p_id)
                          }
                          className="cursor-pointer"
                        >
                          <FaPlus />
                        </p>
                      </div>
                    </div>
                    <div className="h-[4px] bg-[#B8B8B8]"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* payment */}
          <div className="w-full md:w-[550px]">
            <h3 className="text-3xl font-bold mb-6">Order Summary</h3>
            <div className="p-[30px] shadow-xl rounded">
              <div>
                {/* pomo code */}
                {/* <h4 className="mb-6">Apply Promo Code +</h4>
                  <div className="flex items-center justify-between gap-4">
                    <input
                      type="text"
                      placeholder="Apply Pomo code"
                      className="input w-full max-w-xs h-8 pl-0"
                    />
                    <p className="text-red-500 text-xl">-$500</p>
                  </div> */}
                {/* total ammount */}
                <div className="flex items-center justify-between mt-12 text-xl">
                  <p>Estimated Total</p>
                  <p className="font-bold">${totalEstimatedPrice}</p>
                </div>
                {/* checkout button */}
                <div>
                  <Link to="/checkout-info">
                    <button className="w-full text-center border-2 border-primary rounded-full py-[14px] text-2xl font-medium mt-12 hover:bg-primary hover:text-white duration-500 transition-all ease-linear">
                      Checkout
                    </button>
                  </Link>
                </div>
                {/* divider */}
                {/* <div className="divider">OR</div> */}
                {/* pay buttons */}
                {/* <PaymentButtons /> */}
                {/* <p className="mt-10">
                    For Affirm orders, if one or more items in your order have a
                    backordered ship date, your loan payment(s), including
                    interest, may be due before your entire order ships. Please
                    note that you may not receive a rebate of any interest that
                    may have already accrued on an amount that later gets
                    refunded.
                  </p> */}
              </div>
            </div>
          </div>
        </div>
        {/* to generate a rnadom number when user will land on this page */}
        <UserInitialization />
      </section>
    </>
  );
};

export default Checkout;