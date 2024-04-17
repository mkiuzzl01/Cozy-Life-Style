import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
// import Home from "../Pages/Home/Home";
import Update_Profile from "../Pages/Update_Profile/Update_Profile";
import State_Card_Details from "../Pages/State_Card-Details/State_Card_Details";
// import LogIn from "../Pages/LogIn/LogIn";
// import Register from "../Pages/Register/Register";
import axios from "axios";
import ProtectedRoute from "./ProtectedRoute";
import Contact_Us from "../Pages/Contact_Us/Contact_Us";
import User_Profile from "../Pages/User_Profile/User_Profile";
// import About from "../Pages/About/About";
import Not_Found_Page from "../Pages/Not_Found/Not_Found_Page";
import React, { Suspense } from "react";
import Loading from "../Pages/Loading/Loading";

const Home = React.lazy(() => import("../Pages/Home/Home"));
const About = React.lazy(() => import("../Pages/About/About"));
const LogIn = React.lazy(() => import("../Pages/LogIn/LogIn"));
const Register = React.lazy(() => import("../Pages/Register/Register"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Not_Found_Page></Not_Found_Page>,
    children: [
      {
        index: true,
        loader: async () => fetch("/residential.json"),
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <Home></Home>
          </Suspense>
        ),
      },
      {
        path: "/About",
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <About></About>
          </Suspense>
        ),
      },
      {
        path: "/State_Card_Details/:id",
        loader: async ({ params }) => {
          return axios.get("/residential.json").then((result) => {
            const states = result.data;
            const info = states.find((state) => state.id == params.id);
            return info;
          });
        },
        element: (
          <ProtectedRoute>
            <State_Card_Details></State_Card_Details>
          </ProtectedRoute>
        ),
      },
      {
        path: "/UpdateProfile",
        element: (
          <ProtectedRoute>
            <Update_Profile></Update_Profile>
          </ProtectedRoute>
        ),
      },
      {
        path: "/UserProfile",
        element: (
          <ProtectedRoute>
            <User_Profile></User_Profile>
          </ProtectedRoute>
        ),
      },
      {
        path: "/LogIn",
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <LogIn></LogIn>
          </Suspense>
        ),
      },
      {
        path: "/Register",
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <Register></Register>
          </Suspense>
        ),
      },
      {
        path: "Contact_Us",
        element: (
          <ProtectedRoute>
            <Contact_Us></Contact_Us>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
