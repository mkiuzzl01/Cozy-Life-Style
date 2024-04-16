import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Update_Profile from "../Pages/Update_Profile/Update_Profile";
import State_Card_Details from "../Pages/State_Card-Details/State_Card_Details";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import axios from "axios";
import ProtectedRoute from "./ProtectedRoute";
import Contact_Us from "../Pages/Contact_Us/Contact_Us";
import User_Profile from "../Pages/User_Profile/User_Profile";
import About from "../Pages/About/About";



const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                index:true,
                loader: async () => (fetch('/residential.json')),
                element:<Home></Home>
                
            },
            {
                path:'/About',
                element:<About></About>
            },
            {
                path:'/State_Card_Details/:id',
                loader:async ({params})=> {
                    return axios.get('/residential.json')
                    .then(result=>{
                        const states = result.data;
                        const info = states.find(state=> state.id == params.id);
                        return info
                    })
                },
                element:<ProtectedRoute><State_Card_Details></State_Card_Details></ProtectedRoute>
            },
            {
                path:'/UpdateProfile',
                element:<ProtectedRoute><Update_Profile></Update_Profile></ProtectedRoute>
            },
            {
                path:'/UserProfile',
                element:<ProtectedRoute><User_Profile></User_Profile></ProtectedRoute>
            },
            {
                path:'/LogIn',
                element:<LogIn></LogIn>
            },
            {
                path:'/Register',
                element:<Register></Register>
            },
            {
                path:'Contact_Us',
                element:<ProtectedRoute><Contact_Us></Contact_Us></ProtectedRoute>
            }
        ]
    }
])

export default router;