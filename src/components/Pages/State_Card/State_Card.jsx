import { data } from "autoprefixer";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const State_Card = ({ data }) => {
    const {property,estate_title,id,segment_name,description,price,status} = data;
  return (
    <div>
      <div className="card card-compact bg-base-100 border-2">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
            <p>{price}</p>
          <h2 className="card-title">{estate_title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-center">
            <Link to={`/Sate${id}`}><button className="btn bg-[#99d1e9]">View Details</button></Link>
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
