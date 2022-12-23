import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';


const StartRating = ({stars, length}) => {
    return (
        <div className='flex items-center gap-3'>
           <div className='flex'>
            {
                    [...Array(5)].map((a,i)=>
                    <div key={i} className='text-yellow-600 '>
                        {
                            stars >= i + 1 ? <FaStar/> : stars >= i + 0.5 ? <FaStarHalfAlt /> : <AiOutlineStar />
                        }
                    </div> )   
                }
           </div>
            <p className='font-medium'>{length} reviews</p>
        </div>
    );
};

export default StartRating;