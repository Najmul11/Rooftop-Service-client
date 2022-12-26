import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';


const StartRating = ({ratings, length}) => {
    return (
        <div className='flex items-center gap-3'>
           <div className='flex items-center gap-1'>
            {
                    [...Array(5)].map((a,i)=>
                    <div key={i} className='text-yellow-400'>
                        {
                            length === 0 ? <AiOutlineStar className='text-[20.5px]'/> :
                            <div>
                                {
                                ratings >= i + 1 ? <FaStar/> : ratings >= i + 0.5 ? <FaStarHalfAlt/> : <AiOutlineStar className='text-[20.5px]' />
                                }
                            </div>
                        }
                       
                    </div> )   
                }
           </div>
            <p className='font-medium'>( {length} reviews )</p>
        </div>
    );
};

export default StartRating;