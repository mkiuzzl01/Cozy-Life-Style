import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { LuEyeOff } from "react-icons/lu";
import { FiEye } from "react-icons/fi";
import { Helmet } from "react-helmet";

const Register = () => {
  const { registerUser, profileUpdate, successToast, errorToast } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const Name = e.target.name.value;
    const Email = e.target.email.value;
    const PhotoURL = e.target.image.value;
    const Password = e.target.password.value;
    console.log(Name,Email,PhotoURL,Password);
    // Password Validation
    setError("");
    if (Password.length < 6) {
      return setError("Password must be at least 6 character or longer");
    } else if (!/[A-Z]/.test(Password)) {
      return setError("Should contain at least one upper case");
    } else if (!/[a-z]/.test(Password)) {
      return setError("Should contain at least one lower case");
    }
    //Register Password
    registerUser(Email, Password)
      .then(() => {
        profileUpdate(Name, PhotoURL).then((result) => {
          console.log("update Result", result);
        });
        successToast("Registration Successful");
        navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        errorToast("Something Wrong");
      });
  };
  return (
    <div className="flex flex-col md:flex-row md:justify-center items-center bg-slate-500  rounded-lg my-4 p-4">
      <Helmet>
        <title>Cozy-Life-Style | Register </title>
      </Helmet>
      <div>
        <img src="https://i.ibb.co/rx78H9q/Brazuca-Planning-1.png" alt="" />
      </div>
      <div className="w-full md:w-1/2 space-y-3 rounded-xl bg-transparent ">
        <form onSubmit={handleRegister} className="card-body">
          <h1 className="text-4xl font-bold text-yellow-200 text-center">
            Register
          </h1>
          <div className="form-control">
            <label className="label">
              <span className="text-white">Name:</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input w-full  "
              name="name"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-white">Email:</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input w-full  "
              name="email"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-white">Photo URL:</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              className="input w-full  "
              name="image"
              
            />
          </div>
          <div className="form-control">
            <span className="text-white my-2">Password:</span>
            <label className="input w-full   flex items-center gap-2">
              <input
                type={showPass ? "text" : "password"}
                placeholder="Password"
                className="grow"
                name="password"
                required
              />
              <div>
                <span onClick={() => setShowPass(!showPass)}>
                  {showPass ? <LuEyeOff /> : <FiEye />}
                </span>
              </div>
            </label>
              <p className="text-red-300">{error}</p>
          </div>
          <div className="form-control mt-6">
          <button className="block w-full  p-3 text-center rounded-sm text-black bg-yellow-200  hover:bg-green-600">
            Register
          </button>
          </div>
          <p className="text-sm text-center sm:px-6 text-white">
            Your have an account?
            <Link to="/LogIn" className="font-bold">
              LogIn
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
