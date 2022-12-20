import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const SingleService = ({service}) => {
    const {name, img, description}=service
    return (
        <div className="card  bg-base-100  dark:bg-gray-300">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description.slice(0,100)+'...'}</p>
                <div className="card-actions">
                    <button className="btn text-black  bg-transparent italic border-0 hover:bg-transparent hover:text-teal-500">View details <BsArrowRight className='font bold text-xl ml-1'></BsArrowRight></button>
                </div>
            </div>
        </div>
    );
};

export default SingleService;
