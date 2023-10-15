import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import NavbarTop from "../shared/Navbar/NavbarTop";
import Footer from "../shared/Footer/Footer";
import Loader from "../components/Loader/Loader";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for demonstration purposes
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <NavbarTop />
          <Navbar />
          <Outlet />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Main;
