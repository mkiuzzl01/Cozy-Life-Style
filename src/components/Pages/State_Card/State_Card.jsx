import { LiaIdCard } from "react-icons/lia";
import { FiTag } from "react-icons/fi";
import { LuScale3D } from "react-icons/lu";
import { IoLocationSharp } from "react-icons/io5";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

const State_Card = ({ state }) => {
    const {property,estate_title,id,description,price,status,area,segment_name,location,facilities} = state;

  useEffect(()=>{
    Aos.init({duration:1000});
  },[])
  return (
    <div data-aos="zoom-in">
      <div className="card card-compact bg-base-100 border-2 shadow-lg">
        <figure>
          <img
            src={property}
            alt={estate_title}
            className="w-fit"
            loading="lazy"
          />
        </figure>
        <div className="card-body">
            <div className="flex justify-between border-b-2 border-dashed p-2">
            <p className="flex items-center space-x-1"><span><LiaIdCard /></span><span>{id}</span></p>
            <p className=""><span></span>{price}</p>
            <p className="flex items-center space-x-1"><span><FiTag /></span><span>{status}</span></p>
            <p className="flex items-center space-x-1"><span><LuScale3D /></span><span>{area}</span></p>
            </div>
          <h2 className="text-2xl font-bold font-Merriweather">{estate_title}</h2>
          <p className="text-lg font-medium">{segment_name}</p>
          <p className="font-PT_Sans">{description}</p>
          <div>
            <p className="flex items-center font-semibold"><span className=""><IoLocationSharp /></span> <span>{location}</span></p>
            <div className=" mt-4">
            <p className="space-x-4 flex justify-between font-thin border-dotted border-y-2 p-1">{
                        facilities.map((facility,idx)=> 
                            <span key={idx}>{facility}</span>
                            )
                    }</p>
            </div>
          </div>
          <div className="card-actions justify-center">
            <Link to={`/State_Card_Details/${id}`}><button className="btn btn-outline btn-success">View Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

State_Card.propTypes = {
    state:PropTypes.obj
};

export default State_Card;
