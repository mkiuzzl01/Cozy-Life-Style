import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
    const {registerUser,profileUpdate} = useContext(AuthContext);

    const handleRegister= e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const Name = form.get('Name');
        const Email = form.get('Email');
        const PhotoURL = form.get('PhotoURL');
        const Password = form.get('Password');
        console.log(Name,Email,PhotoURL,Password);

        registerUser(Email,Password)
        .then(result=>{
            profileUpdate(Name,PhotoURL)
            .then(result=>{
              console.log('update Result',result);
            })
            console.log('register',result);
        })
        .catch(error=>{
            console.error(error);
        })
    }
    return (
        <div className="flex flex-col md:flex-row md:justify-center items-center bg-purple-400 rounded-lg my-4 p-4">
          <div>
            <img src="https://i.ibb.co/rx78H9q/Brazuca-Planning-1.png" alt="" />
          </div>
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-transparent text-white">
          <h1 className="text-4xl font-bold text-center">Register</h1>
          <form onSubmit={handleRegister} className="space-y-6">
            <div className="space-y-1 text-sm">
              <label
                htmlFor="Name"
                className="block text-black"
              >
                Name:
              </label>
              <input
                type="text"
                name="Name"
                id="Name"
                placeholder="Name"
                required
                className="w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 focus:border-violet-400 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label
                htmlFor="Email"
                className="block text-black"
              >
                Email:
              </label>
              <input
                type="text"
                name="Email"
                id="Email"
                placeholder="Email"
                required
                className="w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 focus:border-violet-400 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label
                htmlFor="PhotoURL"
                className="block text-black"
              >
                PhotoURL:
              </label>
              <input
                type="text"
                name="PhotoURL"
                id="PhotoURL"
                placeholder="PhotoURL"
                className="w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 focus:border-violet-400 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label
                htmlFor="Password"
                className="block text-black"
              >
                Password:
              </label>
              <input
                type="Password"
                name="Password"
                id="Password"
                placeholder="Password"
                required
                className="w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 focus:border-violet-400 focus:dark:border-violet-600"
              />
             
            </div>
            <button className="block w-full p-3 text-center rounded-sm text-white bg-violet-600  hover:bg-sky-600">
            Register
          </button> 
          </form>
          <p className="text-sm text-center sm:px-6 text-black">
            Your have an account?
            
            <Link to='/LogIn' className='font-bold'>LogIn</Link>
          </p>
        </div>
      </div>
    );
};

export default Register;