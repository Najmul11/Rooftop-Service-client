import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const ServiceDetail = ({service}) => {
    const {_id, img2, name}=service
    return (
        <div className="card  dark:bg-gray-300 shadow-md">
            <figure>
                <PhotoProvider>
                    <PhotoView src={img2}><img src={img2} alt="" className='h-60 w-full' /></PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions justify-end">
                <Link to={`/services/${_id}`}>
                    <button className="btn text-black  bg-transparent italic border-0 hover:bg-transparent hover:text-teal-500">View details <BsArrowRight className='font bold text-xl ml-1'></BsArrowRight></button>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;