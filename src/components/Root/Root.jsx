import { Outlet } from "react-router-dom";
import Navbar from "../Layouts/Navbar";
import Footer from "../Layouts/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Root = () => {
 
  return (
    <div>
        <header className="max-w-7xl m-auto sticky top-0 z-10">
          <nav>
            <Navbar></Navbar>
            <ToastContainer></ToastContainer>
          </nav>
        </header>
        <main className="max-w-7xl m-auto px-2 md:px-0 min-h-[calc(100vh-348px)]">
          <Outlet></Outlet>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
    </div>
  );
};

export default Root;
