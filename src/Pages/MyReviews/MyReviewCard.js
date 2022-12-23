import React from 'react';
import { Link } from 'react-router-dom';

const MyReviewCard = ({review,handleDelete}) => {
    const {serviceName,userReview, _id}=review
    return (
        <div className='flex justify-between  border items-center p-2 gap-8 dark:bg-gray-200 rounded'>
            <button onClick={()=>handleDelete(_id)} className='bg-red-100 px-3 font-medium rounded text-black hover:bg-red-300'>DELETE</button>
            <div className='flex justify-between w-full items-center'>
                <div className="tooltip w-full" data-tip={userReview}>
                    <p className=' text-left font-medium'>{serviceName}</p>
                    <p className='mt-1 text-left'>{userReview.length>65 ? userReview.slice(0,65)+'...':userReview}</p>
                </div>
                <Link to={`/updatereview/${_id}`}><button className='bg-teal-100 px-3 py-0 rounded font-medium ml-2 first:rounded hover:bg-teal-300'>EDIT</button></Link>
            </div>
        </div>
    );
};

export default MyReviewCard;