import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const User_Profile = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
  return (
    <div className="bg-red-100 p-4 my-4 rounded-lg">
        <div className="flex flex-col items-center lg:flex-row lg:justify-evenly">
        <img src={user?.photoURL? user.photoURL : 'https://i.ibb.co/x19M7TG/blank-profile-picture-973460-1280.png'} alt="" className="w-1/4 rounded-xl" />
          <div className="space-y-4">
            <h1><span className="text-4xl font-bold">Name:</span> <span className="text-4xl">{user?.displayName? user.displayName : 'Unknown user'}</span></h1>
            <p className="">
            <span className="font-semibold">Email:</span> <span>{user?.email}</span>
            </p>
            <p><span className="font-semibold">Profile Creation Time: </span><span>
            {user.metadata.creationTime}</span></p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
  );
};

export default User_Profile;
