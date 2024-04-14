import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Update_Profile from "../Pages/Update_Profile/Update_Profile";
import User_Update from "../Pages/User_Update/User_Update";
import State_Card_Details from "../Pages/State_Card-Details/State_Card_Details";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'State_Card_Details/:id',
                element:<State_Card_Details></State_Card_Details>
            },
            {
                path:'UpdateProfile',
                element:<Update_Profile></Update_Profile>
            },
            {
                path:'UserProfile',
                element:<User_Update></User_Update>
            }
        ]
    }
])

export default router;