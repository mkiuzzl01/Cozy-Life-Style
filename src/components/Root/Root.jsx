import { Outlet } from "react-router-dom";
import Navbar from "../Layouts/Navbar";
import Footer from "../Layouts/Footer";
import { createContext, useEffect, useState } from "react";

export const stateContext = createContext(null);

const Root = () => {
  const [state,setState] = useState(null);

  useEffect(()=>{
    fetch('residential.json')
    .then(res=> res.json())
    .then(data=> setState(data));
  },[])

  // const shareInfo = {
  //   state,
  // }
  return (
    <div>
      <stateContext.Provider value={state}>
        <header className="max-w-7xl m-auto">
          <Navbar></Navbar>
        </header>
        <main className="max-w-7xl m-auto min-h-[calc(100vh-284px)]">
          <Outlet></Outlet>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </stateContext.Provider>
    </div>
  );
};

export default Root;
