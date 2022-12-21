import React from 'react';

const MyReviewCard = ({review,handleDelete}) => {
    const {serviceName,userReview, _id}=review
    return (
        <div className='flex justify-betwe  border items-center p-2 gap-8 dark:bg-gray-200 rounded'>
            <button onClick={()=>handleDelete(_id)} className='bg-red-100 px-3 font-medium rounded text-black hover:bg-red-300'>DELETE</button>
            <div className='flex justify-between w-full items-center'>
                <div className="tooltip w-full" data-tip={userReview}>
                    <p className=' text-left font-medium'>{serviceName}</p>
                    <p className='mt-1 text-left'>{userReview.length>65 ? userReview.slice(0,65)+'...':userReview}</p>
                </div>
                <button className='bg-teal-100 px-3 py-0 rounded font-medium first:rounded hover:bg-teal-300'>UPDATE</button>
            </div>
        </div>
    );
};

export default MyReviewCard;