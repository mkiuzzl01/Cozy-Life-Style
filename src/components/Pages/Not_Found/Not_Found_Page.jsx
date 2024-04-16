import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Not_Found_Page = () => {
  return (
    <div>
      <Helmet>
        <title>Cozy-Life-Style | Not Found Page </title>
      </Helmet>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-7xl font-bold">404</h1>
        <p className="text-3xl font-semibold">Page Not Found</p>
        <img
          src="https://i.ibb.co/MfnRRd4/Hands-Denied.png"
          alt=""
          className="w-1/4"
        />
        <Link to="/">
          <button className="btn">Back to Home Page</button>
        </Link>
      </div>
    </div>
  );
};

export default Not_Found_Page;
