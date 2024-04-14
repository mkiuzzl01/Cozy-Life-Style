import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./components/Root/Root.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./components/Routs/Routs.jsx";
import AuthProvider from "./components/AuthProvider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        <Root></Root>
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
