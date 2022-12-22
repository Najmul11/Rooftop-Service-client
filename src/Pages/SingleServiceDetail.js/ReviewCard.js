import React from 'react';

const ReviewCard = ({review}) => {
    const {userName, userPhoto, userReview}=review
    return (
        <div className="card bg-gray-200 shadow-sm">
            <div className="card-body">
                <div className='flex gap-3 '>
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={userPhoto} alt=''/>
                        </div>
                    </label>
                    <div>
                        <h2 className="card-title">{userName}</h2>
                        <p>{userReview}</p>
                    </div>
                </div>    
            </div>
        </div>
    );
};

export default ReviewCard;