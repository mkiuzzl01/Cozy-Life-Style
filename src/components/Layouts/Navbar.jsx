import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const logout = () => {
    logOut()
      .then((result) => {
        toast.info("Logout Successful !", {
          position: "bottom-center"
        });
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const navLink = (
    <>
      <NavLink
      className={({ isActive }) =>
      isActive
        ? "border-t-2 rounded-lg text-[#23BE0A] border-red-500 p-2"
        : "p-2 hover:border-gray-600 hover:border-b-2 rounded-lg"
    }
       to="/">Home</NavLink>
      { user &&
        <NavLink
        className={({ isActive }) =>
        isActive
          ? "border-t-2 rounded-lg text-[#23BE0A] border-red-500 p-2"
          : "p-2 hover:border-gray-600 hover:border-b-2 rounded-lg"
      }
        to="/UpdateProfile">Update Profile</NavLink>
      }
      <NavLink
       className={ ({ isActive }) =>
       isActive
         ? "border-t-2 rounded-lg text-[#23BE0A] border-red-500 p-2"
         : "p-2 hover:border-gray-600 hover:border-b-2 rounded-lg"
     }
      to="/UserProfile">User Profile</NavLink>
      <NavLink
       className={({ isActive }) =>
       isActive
         ? "border-t-2 rounded-lg text-[#23BE0A] border-red-500 p-2"
         : "p-2 hover:border-gray-600 hover:border-b-2 rounded-lg"
     }
      to="/Contact_Us">Contact_Us</NavLink>
    </>
  );
  return (
    <div className="navbar bg-[#0b4736] text-white rounded-b-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 text-black shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Cozy-Life-Style</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-4">{navLink}</ul>
      </div>
      <div className="navbar-end space-x-2">
        {user ? (
          <>
            <p className={`hover:${user?.email}`}>{user?.email}</p>

            <div className="tooltip tooltip-bottom" data-tip={user?.displayName? user.displayName : 'Unknown user'}>
            <img src={user?.photoURL? user.photoURL : 'https://i.ibb.co/x19M7TG/blank-profile-picture-973460-1280.png'} alt="" className="w-10 rounded-full " />
            </div>
            <Link>
              <button onClick={logout} className="btn bg-[#99d1e9] border-none">
                LogOut
              </button>
              <ToastContainer />
            </Link>
          </>
        ) : (
          <Link to="/LogIn">
            <button className="btn bg-[#99d1e9] border-none">LogIn</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
