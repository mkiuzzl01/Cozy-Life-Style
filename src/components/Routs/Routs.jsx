import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import User_Update from "../Pages/User_Update";
import Update_Profile from "../Pages/Update_Profile";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'Home',
                element:<Home></Home>
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