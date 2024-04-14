import { data } from "autoprefixer";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const State_Card = ({ data }) => {
    const {property,estate_title,id,description,price,status,area,segment_name,location,facilities} = data;
  return (
    <div>
      <div className="card card-compact bg-base-100 border-2">
        <figure>
          <img
            src={property}
            alt="Shoes"
            className="w-fit"
          />
        </figure>
        <div className="card-body">
            <div className="flex justify-between border-b-2 border-dashed p-2">
            <p className="">{id}</p>
            <p className="">{price}</p>
            <p className="">{status}</p>
            <p className="">{area}</p>
            </div>
          <h2 className="text-2xl font-bold font-Merriweather">{estate_title}</h2>
          <p className="text-lg font-medium">{segment_name}</p>
          <p>{description}</p>
          <div>
            <p>{location}</p>
            <div className=" mt-4">
            <p className="space-x-4 flex justify-between font-thin border-dotted border-y-2 p-1">{
                        facilities.map((facility,idx)=> 
                            <span key={idx}>{facility}</span>
                            )
                    }</p>
            </div>
          </div>
          <div className="card-actions justify-center">
            <Link to={`/State_Card_Details/${id}`}><button className="btn bg-[#99d1e9]">View Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

State_Card.propTypes = {
    data:PropTypes.obj
};

export default State_Card;
