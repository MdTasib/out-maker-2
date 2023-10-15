import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import { Toaster } from "react-hot-toast";
import CartProvider from "./Provider/CartProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>
    <QueryClientProvider client={queryClient}>
     <CartProvider>
     <RouterProvider router={router} />
     </CartProvider>
      <Toaster />
      </QueryClientProvider>
    </div>
  </React.StrictMode>
);
