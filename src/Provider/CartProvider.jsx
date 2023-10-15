import { useQuery } from "@tanstack/react-query";
import React, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const userId = parseInt(localStorage.getItem("usercode")) || null;
  const [productQuantity, setProductQuantity] = useState(0);
  const [cartData, setCartData] = useState(null);
  const [toggle, setToggle] = useState(true)
  // first converted the object data in array format
  const [convertedData, setConvertedData] = useState(null);
  // filter the object data
  const objectOnlyData = convertedData?.filter(
    (item) => typeof item === "object"
  );
  // find the number value(total cost) from the converted array
  const costData = convertedData?.find((item) => typeof item === "number");

  // check the id 
  const isIdTrue = id => {
    const productId = Object.keys(cartData);
    const findSameId = productId.find((item) => parseInt(item) === id);
    if (findSameId) {
      return true
    }
    else {
      return false
    }
  }

  // Fetch cart data function
  const fetchCartData = () => {
    fetch(`https://theoutmaker.com/public/api/user/product/all/cart/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        const parsedData = JSON.parse(data);
        setCartData(parsedData);
        setConvertedData(Object.values(parsedData));
      });
  };

  useEffect(() => {
    // fetch cart data
    fetchCartData();
  }, [userId]);

  // Function to update objectOnlyData
  const updateObjectOnlyData = (updatedData) => {
    setConvertedData(updatedData);
  };

  const cartInfo = {
    cartData,
    convertedData,
    objectOnlyData,
    costData,
    setProductQuantity,
    isIdTrue,
    updateObjectOnlyData,
    setToggle,
    toggle,
    fetchCartData

  };
  return (
    <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
