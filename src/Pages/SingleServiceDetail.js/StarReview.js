import React,{useState} from 'react';
import {FaStar} from 'react-icons/fa'
import {AiOutlineStar} from 'react-icons/ai'

const StarReview = ({rating, setRating}) => {
    const [hover ,setHover]=useState(null)
    return (
        <div className='flex gap-1'>
        {
          [...Array(5)].map((star, index)=> {
            const ratingValue=index + 1

            return(
              <label className='text-yellow-400 cursor-pointer text-2xl'>
                <input type="radio" name='rating' value={index +1} onClick={()=>setRating(ratingValue)} className='hidden'/>
                  {
                    ratingValue <= (rating || hover) ?
                      <FaStar  onMouseEnter={()=>setHover(ratingValue)} onMouseLeave={()=>setHover(null)}/> 
                       :
                      <AiOutlineStar  onMouseEnter={()=>setHover(ratingValue)} onMouseLeave={()=>setHover(null)}/>
                  }
              </label>
            )
          } )
        }
      </div>
    );
};

export default StarReview;