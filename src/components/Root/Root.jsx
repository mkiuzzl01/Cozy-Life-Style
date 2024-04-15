import { Outlet } from "react-router-dom";
import Navbar from "../Layouts/Navbar";
import Footer from "../Layouts/Footer";

const Root = () => {
 
  return (
    <div>
        <header className="max-w-7xl m-auto sticky top-0 z-10">
          <nav>
            <Navbar></Navbar>
          </nav>
        </header>
        <main className="max-w-7xl m-auto min-h-[calc(100vh-284px)]">
          <Outlet></Outlet>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
    </div>
  );
};

export default Root;
