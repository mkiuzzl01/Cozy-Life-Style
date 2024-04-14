import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="flex justify-center">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
          <h1 className="text-2xl font-bold text-center">Register</h1>
          <form noValidate="" action="" className="space-y-6">
            <div className="space-y-1 text-sm">
              <label
                htmlFor="Name"
                className="block text-gray-400 dark:text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                name="Name"
                id="Name"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 focus:border-violet-400 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label
                htmlFor="Email"
                className="block text-gray-400 dark:text-gray-600"
              >
                Email
              </label>
              <input
                type="text"
                name="Email"
                id="Email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 focus:border-violet-400 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label
                htmlFor="PhotoURL"
                className="block text-gray-400 dark:text-gray-600"
              >
                PhotoURL
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
                className="block text-gray-400 dark:text-gray-600"
              >
                Password
              </label>
              <input
                type="Password"
                name="Password"
                id="Password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 focus:border-violet-400 focus:dark:border-violet-600"
              />
             
            </div>
            <button className="block w-full p-3 text-center rounded-sm text-gray-900 dark:text-gray-50 bg-violet-400 dark:bg-violet-600">
              Register
            </button>
          </form>
          <p className="text-xs text-center sm:px-6 text-gray-400 dark:text-gray-600">
            Your have an account?
            
            <Link to='/LogIn'>LogIn</Link>
          </p>
        </div>
      </div>
    );
};

export default Register;