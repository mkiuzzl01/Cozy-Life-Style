import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Aos from "aos";
import 'aos/dist/aos.css'

const Update_Profile = () => {
  const { user,profileUpdate,successToast} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const Name = form.get('Name');
    const Image = form.get('Image');

    profileUpdate(Name,Image)
    .then(()=>{
        successToast('Profile Updated');
        navigate(location.state = '/UpdateProfile' );
    })
  };
  useEffect(()=>{
    Aos.init({duration:1000});
  },[])
  return (
    <div className="bg-green-100 my-4 rounded-lg grid grid-cols-1 md:grid-cols-2 font-PT_Sans" data-aos="zoom-in">
      <Helmet>
        <title>Cozy-Life-Style | Update Profile </title>
      </Helmet>
      <div className="flex flex-col items-center gap-4 border-e-2 border-white border-dashed">
        <p>Current Profile</p>
        <img
          src={
            user?.photoURL
              ? user.photoURL
              : "https://i.ibb.co/x19M7TG/blank-profile-picture-973460-1280.png"
          }
          alt=""
          className="w-1/3 rounded-lg"
        />
        <div className="space-y-2">
          <h1>
            <span className="text-2xl font-bold">Name:</span>{" "}
            <span className="text-2xl">
              {user?.displayName ? user.displayName : "Username Not Found"}
            </span>
          </h1>
          <p className="">
            <span className="font-semibold">Email:</span>{" "}
            <span>{user?.email}</span>
          </p>
          <p>
            <span className="font-semibold">Profile Creation Time: </span>
            <span>{user.metadata.creationTime}</span>
          </p>
        </div>
      </div>
      <div>
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Profile Update</h1>
          </div>
          <form onSubmit={handleUpdateProfile} className="space-y-12">
            <div className="space-y-4">
              <div>
                <label htmlFor="Name" className="block mb-2 text-sm">
                  New Name
                </label>
                <input
                  type="text"
                  name="Name"
                  id="Name"
                  placeholder="New Name"
                  required
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="image" className="text-sm">
                    New Image URL
                  </label>
                </div>
                <input
                  type="text"
                  name="Image"
                  id="image"
                  placeholder="New Image URL"
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
            </div>
              <button
                className="w-full btn btn-outline btn-success">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update_Profile;
