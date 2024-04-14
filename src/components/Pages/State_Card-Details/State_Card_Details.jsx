import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { stateContext } from '../../Root/Root';

const State_Card_Details = () => {
    const {id} = useParams();
    const ID = parseInt(id);
    const data = useContext(stateContext);
    const info = data.find((data)=> data.id == ID);
    const {description,
        property,
        estate_title,
        segment_name,
        price,
        status,
        area,
        location,
        facilities
    } = info;
    console.log(description);
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center p-2">
        <div className="bg-[#1313130D] p-8 flex justify-center items-center">
            <img src={property}
            className=""
             alt="" />
        </div>
       <div className="ms-8">
       <div className="">
       <h1 className="font-bold text-4xl py-2">{estate_title}</h1>
        <p className="py-2"><span className="text-[#131313CC] font-medium">{description}</span> </p>
        <p className="text-[#131313CC] font-medium border-y-2 py-2">{segment_name}</p>
        <p className="py-2"><span className="font-bold">Price: </span><span>{price}</span></p>
        <div className="flex items-center border-b-2 py-2">
        <p><span  className="font-bold">Status: </span>{status}</p>
        <div className="text-center p-2 flex">
        </div>
        </div>
        <div>
            <table className='table'>
                <tr>
                    <td><span>Area:</span></td>
                    <td><span className="text-[#131313] font-semibold">{area}</span></td>
                </tr>
                <tr>
                    <td><span>Location:</span></td>
                    <td><span className="text-[#131313] font-semibold">{location}</span></td>
                </tr>
                <tr>
                    <td>Facilities</td>
                    <td><p className="text-[#131313] font-semibold space-x-4">{
                        facilities.map((facility,idx)=> 
                            <span key={idx} className='bg-lime-400 p-1 rounded-lg'>{facility}</span>
                            )
                    }</p></td>
                </tr>
            </table>
        </div>
       </div>
       </div>
    </div>
    );
};

export default State_Card_Details;