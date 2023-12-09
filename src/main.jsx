import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import Routers from "./AllRoutes/Routers/Routers";
import AuthProvider from "./Context/AuthProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={Routers} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
