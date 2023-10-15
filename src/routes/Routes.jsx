import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import About from "../pages/About/About/About";
import CareGuide from "../pages/CareGuide/CareGuide/CareGuide";
import Shipping from "../pages/Shipping/Shipping/Shipping";
import Sustainability from "../pages/Sustainability/Sustainability/Sustainability";
import Home from "../pages/home/Home";

import AllBlogs from "../pages/all-blogs/AllBlogs";
import Blog from "../pages/blog/Blog";
import Product from "../pages/product/product";
import ProductDetails from "../pages/product-details/ProductDetails";
import Contact from "../pages/contact/Contact";
import Collections from "../pages/collections/collections";
import Checkout from "../pages/Checkout/Checkout";
import CheckoutInfo from "../pages/Checkout/CheckoutInfo";
import ShippingInfo from "../pages/Checkout/ShippingInfo";
import PaymentInfo from "../pages/Checkout/PaymentInfo";
import TestPayement from "../pages/Checkout/TestPayement";
import BuyerReview from "../pages/product-details/BuyerReview";
/*
<Route path='/' element={<Home />} />
				<Route path='/collections' element={<Collections />} />
				<Route path='/all-blogs' element={<AllBlogs />} />
				<Route path='/blog' element={<Blog />} />
				<Route path='/product' element={<Product />} />
				<Route path='/product-details' element={<ProductDetails />} />
				<Route path='/contact' element={<Contact />} />

*/ 

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/collections',
          element: <Collections/>
        },
        {
          path: '/categories',
          element: <Collections/>
        },
        {
          path: '/all-blogs',
          element: <AllBlogs/>
        },
        {
          path: '/blog',
          element: <Blog/>
        },
        {
          path: '/products/:id',
          element: <Product/>,
          loader: ({params}) => fetch(`https://theoutmaker.com/api/get/category/single/${params.id}`)
        },
        {
          path: '/category-product/:id',
          element: <Product/>,
          loader: ({params}) => fetch(`https://theoutmaker.com/api/get/collection/single/${params.id}`)
        },
        {
          path: '/product-details/:id',
          element: <ProductDetails/>,
          loader: ({params}) => fetch(`https://theoutmaker.com/api/get/product/single/${params.id}`)
        },
        {
          path: '/contact',
          element: <Contact/>
        },
        {
          path: '/about',
          element: <About/>
        },
        {
          path: '/care-guide',
          element: <CareGuide/>
        },
        {
          path: '/sustainability',
          element: <Sustainability/>
        },
        {
          path: '/shipping',
          element: <Shipping/>
        },
        {
          path: '/checkout',
          element: <Checkout/>
        },
        {
          path: '/checkout-info',
          element: <CheckoutInfo/>
        },
        {
          path: '/shipping-info',
          element: <ShippingInfo/>
        },
        {
          path: '/payment-info',
          element: <PaymentInfo/>
        },
        {
          path: '/reviews',
          element: <BuyerReview/>
        },
      ]
    },
  ]);

  export default router
  