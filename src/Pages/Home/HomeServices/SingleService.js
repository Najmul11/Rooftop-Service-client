import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
const SingleService = ({service}) => {
    const {name, img, description, _id}=service
    return (
        <div className="card  bg-base-100  dark:bg-gray-300">
            <figure className="px-10 pt-10">
                <PhotoProvider>
                    <PhotoView src={img}><img src={img} alt="" /></PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description.slice(0,100)+'...'}</p>
                <div className="card-actions">
                    <Link to={`/services/${_id}`}>
                        <button className="btn text-black  bg-transparent italic border-0 hover:bg-transparent hover:text-teal-500">View details <BsArrowRight className='font bold text-xl ml-1'></BsArrowRight></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleService;
