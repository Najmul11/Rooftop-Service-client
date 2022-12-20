import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const ServiceDetail = ({service}) => {
    const {_id, img2, name, description}=service
    return (
        <div className="card  dark:bg-gray-300 shadow-md">
            <figure><img src={img2} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions justify-end">
                <button className="btn text-black  bg-transparent italic border-0 hover:bg-transparent hover:text-teal-500">View details <BsArrowRight className='font bold text-xl ml-1'></BsArrowRight></button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;