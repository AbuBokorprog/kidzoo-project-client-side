import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import AuthProvider from "./AuthProvider/AuthProvider";
import router from "./Routes/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="mx-w-7xl mx-20">
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
);
