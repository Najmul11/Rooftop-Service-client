import React from 'react';
import {useParams} from 'react-router-dom'

import toast, { Toaster } from 'react-hot-toast';

const UpdateReview = () => {

    const param=useParams()
    const handleUpdate=(e)=>{
        e.preventDefault()
        const review=e.target.review.value
        const newReview={review}

        fetch(`http://localhost:5000/reviews/${param.id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newReview)
        }).then(res=>res.json())
        .then(()=>{
            toast.success('Review updated')
            e.target.reset()})
    }
    return (
        <div className='dark:bg-gray-800 min-h-screen'>
        <div className="container mx-auto py-20">
            <div className="card md:w-1/2 mx-auto  shadow-sm border dark:bg-gray-300">
                <form onSubmit={handleUpdate} className="card-body">
                    <h2 className="card-title">Changed mind?</h2>
                    <input type="text" placeholder="Your review here..." name='review' className="input input-bordered w-full mt-2" />
                    <div className="card-actions justify-end">
                    <button className="btn px-5 py-2 text-black dark:bg border-teal-400 mt-10 bg-transparent hover:bg-teal-50
                         hover:border-teal-400 dark:text-gray-800 dark:hover:bg-teal-500">Update</button>
                    </div>
                </form>
            </div>  
        </div>
        <Toaster />
    </div>
    );
};

export default UpdateReview;