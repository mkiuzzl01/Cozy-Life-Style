import { MdOutlineMapsHomeWork } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";
import { AiOutlineRise } from "react-icons/ai";
import { FaWpforms } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Our_Services = () => {
  useEffect(()=>{
    Aos.init({duration:1000});
  },[])
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4" data-aos="fade-left">
      <div className="lg:col-span-2 card p-4 shadow-sm border-2">
        <p className="text-2xl font-bold uppercase"><span className="text-yellow-500">____</span>Why we can help you</p>
        <p>
          Detailed descriptions of properties allow a good preselection. Prior
          to an inspection we can provide additional high resolution pictures.{" "}
        </p>
      </div>
      <div className="card p-4 shadow-sm border-2">
        <div>
        <span><MdOutlineMapsHomeWork className="text-4xl text-green-400"/></span> 
        </div>
        <h1 className="text-xl font-semibold">Home inspection</h1>
        <p>
          We make sure you get what you were promised before signing the papers.
        </p>
      </div>
      <div className="card p-4 shadow-sm border-2">
        <span ><AiOutlineHome className="text-4xl text-green-400"/></span>
        <h1 className="text-xl font-semibold">Home loans</h1>
        <p>
          We offer you free consultancy to get a loan if you buy a home with us.
        </p>
      </div>
      <div className="card p-4 shadow-sm border-2">
        <span ><FaHandshake className="text-4xl text-green-400"/></span>
        <h1 className="text-xl font-semibold">Sell your home</h1>
        <p>We sell your home at the best market price for a low commission.</p>
      </div>
      <div className="card p-4 shadow-sm border-2">
        <span ><AiOutlineRise className="text-4xl text-green-400"/></span>
        <h1 className="text-xl font-semibold">Buy a home</h1>
        <p>
          We have the newest listings on the market and we can tell the trends.
        </p>
      </div>
      <div className="card p-4 shadow-sm border-2">
        <span><FaWpforms className="text-4xl text-green-400"/></span>
        <h1 className="text-xl font-semibold">Free Submission</h1>
        <p>Add your listing for free on our website and have it published instantly. </p>
      </div>
      <div className="card p-4 shadow-sm border-2">
        <span ><FaCamera className="text-4xl text-green-400"/></span>
        <h1 className="text-xl font-semibold">Free Photoshoot</h1>
        <p>We will assist you to take professional photos of your home.</p>
      </div>
    </div>
  );
};

export default Our_Services;
