import React, { useContext, useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { PiMagnifyingGlassThin } from "react-icons/pi";
import { BsBag, BsPerson } from "react-icons/bs";
import logo from "../../assets/Navbar/Frame.svg";
import ProductItems from "./ProductItems";
import "aos/dist/aos.css";
import AOS from "aos";
import { Link, useLocation } from "react-router-dom";
import CollectionItem from "./CollectionItem";
import LearnItem from "./LearnItem";
import useOutsideClick from "../../Hooks/useOutsideClick";
import { CartContext } from "../../Provider/CartProvider";
AOS.init();
const Navbar = () => {
  const { objectOnlyData } = useContext(CartContext);
  // states for toggle the buttons
  const [productItem, setProductItem] = useState(false);
  const [collectionItem, setCollectionItem] = useState(false);
  const [learnItem, setLearnItem] = useState(false);
  // to close the navbar if anyone click outside of the component
  const dropdownRef = useRef(null);
  const closeDropdown = () => {
    setProductItem(false);
    setLearnItem(false);
    setCollectionItem(false); // Update the state to close the dropdown
  };
  useOutsideClick(dropdownRef, closeDropdown);

  const location = useLocation(); // Get the current location
  useEffect(() => {
    // Close the navigation menu whenever the route changes
    setProductItem(false);
    setLearnItem(false);
    setCollectionItem(false);
  }, [location.pathname]);

  useEffect(() => {}, [objectOnlyData]);
  // navItems
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li onClick={() => toggleNavButton("collectionItem")}>
        <p>
          <span>Collection</span>
          <span>
            <FaAngleDown />
          </span>
        </p>
      </li>
      <li onClick={() => toggleNavButton("productItem")}>
        <p>
          <span>Products</span>
          <span>
            <FaAngleDown />
          </span>
        </p>
      </li>
      <li onClick={() => toggleNavButton("learnItems")}>
        <p>
          <span>Learn</span>
          <span>
            <FaAngleDown />
          </span>
        </p>
      </li>
    </>
  );

  // nav button functionalities
  const toggleNavButton = (itemName) => {
    setProductItem(false);
    setLearnItem(false);
    setCollectionItem(false);
    if (itemName === "collectionItem") {
      setCollectionItem(!collectionItem);
    } else if (itemName === "productItem") {
      setProductItem(!productItem);
    } else {
      setLearnItem(!learnItem);
    }
  };

  return (
    <>
      {/* <NavbarTop/> */}
      {/* navbar functonalities */}
      <div className="navbar nav-shadow lg:px-32 z-50">
        <div className="navbar-start w-1/3 lg:w-full">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <ul className="menu menu-horizontal px-1 hidden lg:flex">
            {navItems}
          </ul>
        </div>
        <div className="navbar-center lg:flex">
          <Link to="/">
            <div className="rounded-full bg-white py-6 px-5  z-50 w-[120px] h-[120px] nav-shadow">
              <img
                src={logo}
                alt="our-company-logo"
                className="object-fill w-full h-full"
              />
            </div>
          </Link>
        </div>
        <div className="navbar-end w-full">
          <div className="flex gap-0 flex-row md:items-center">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search Products"
                className="input input-bordered rounded-3xl w-full max-h-9 placeholder:text-sm"
              />
              <div className="absolute right-3 top-2">
                <PiMagnifyingGlassThin className="text-lg" />
              </div>
            </div>
            <div className="flex ml-5 md:ml-16">
              <div className="relative">
                <p className="absolute -top-3 right-3 text-black font-bold">
                  {objectOnlyData ? objectOnlyData?.length : 0}
                </p>
                <Link
                  to="/checkout"
                  className="btn btn-sm btn-circle btn-outline mr-4"
                >
                  <BsBag />
                </Link>
              </div>

              {/* <button className="btn btn-sm btn-circle btn-outline">
                <BsPerson />
              </button> */}
            </div>
          </div>
        </div>
      </div>
      {/* functionalities */}
      {/* duration-700 transition-all ease-in-out */}
      <div ref={dropdownRef}>
        {productItem === true ? (
          <div
            className={`bg-white w-full ${productItem && "z-10"}`}
          >
            <ProductItems setProductItem={setProductItem} />
          </div>
        ) : collectionItem === true ? (
          <div
            className={`bg-white w-full ${
              collectionItem && "z-10"
            }`}
          >
            <CollectionItem />
          </div>
        ) : learnItem === true ? (
          <div
            className={`bg-white w-full ${learnItem && "z-10"}`}
          >
            <LearnItem />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
export default Navbar;
