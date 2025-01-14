import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

const User_Profile = () => {
    const {user} = useContext(AuthContext);
    useEffect(()=>{
      Aos.init({duration:1000});
    },[])
  return (
    <div className="bg-green-100 my-8 py-20 rounded-lg font-PT_Sans" data-aos="zoom-in">
      <Helmet>
        <title>Cozy-Life-Style | User Profile </title>
      </Helmet>
        <div className="flex flex-col items-center lg:flex-row lg:justify-evenly">
        <img src={user?.photoURL? user.photoURL : 'https://i.ibb.co/x19M7TG/blank-profile-picture-973460-1280.png'} alt="" className="w-1/4 rounded-xl" />
          <div className="space-y-4">
            <h1><span className="text-4xl font-bold">Name:</span> <span className="text-4xl">{user?.displayName? user.displayName : 'Unknown user'}</span></h1>
            <p className="">
            <span className="font-semibold">Email:</span> <span>{user?.email}</span>
            </p>
            <p><span className="font-semibold">Profile Creation Time: </span><span>
            {user.metadata.creationTime}</span></p>
            <div className="text-center">
            <Link to='/UpdateProfile'><button className="w-full btn btn-outline btn-success">Update Profile</button></Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default User_Profile;
