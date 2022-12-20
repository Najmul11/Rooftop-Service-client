import React,{useState, useEffect, useContext} from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import toast, { Toaster } from 'react-hot-toast';

import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import ReviewCard from './ReviewCard';

const SingleServiceDetail = () => {
    const {user}=useContext(AuthContext)
    const param=useParams()
    const [loading, setLoading]=useState(false)

    const [service, setService]=useState({})
    const {img2,name, price, description}=service

    const [reviews, setReviews]=useState([])
    useEffect(()=>{
        setLoading(true)
        fetch('https://roof-doctor-server-najmul11.vercel.app/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
        .finally(()=>setLoading(false))
    },[])

    const url=`https://roof-doctor-server-najmul11.vercel.app/services/${param.id}`
    useEffect(()=>{
        setLoading(true)
        fetch(url)
        .then(res=>res.json())
        .then(data=>setService(data))
        .finally(()=>setLoading(false))
    },[url])

    
    const handleReviewSubmit=e=>{
        e.preventDefault()
        const review=e.target.review.value
        const userDisplayname=user?.displayName
        const photo=user?.photoURL

        const serviceReview={userReview:review, userName:userDisplayname, userPhoto:photo, serviceName:name}
        // post review
        fetch('https://roof-doctor-server-najmul11.vercel.app/reviews',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(serviceReview)
        })
        .then(res=>{})
        .then(()=>{
            e.target.reset()
            toast.success('Service added successfully');
        })
    }
    if (loading) {
        return <div className='min-h-screen flex items-center justify-center dark:bg-gray-800'>
                <InfinitySpin width='200' color="#00baa6" />
            </div>
    }
    return (
        <div className='dark:bg-gray-800'>
            <div className='container mx-auto py-28'>
                <div className="card lg:card-side bg-base-100 rounded-md dark:bg-gray-200">
                    <div className='md:w-1/2 pt-8'>
                        <div className="card-body">
                            <h2 className=" card-title text-5xl font-semibold">{name}</h2>
                            <p className='mt-5'>{description}</p>
                            <span className='text-4xl font-medium mt-5'>${price}</span>
                        </div>
                    </div>
                    <div className='md:w-1/2'>
                        <figure><img src={img2} className='rounded-r-md w-full' alt="Album"/></figure>
                    </div>
                </div>
                <div className='my-20'>
                    <h4 className='text-3xl font-medium  text-center text-teal-400'>Reviews</h4>
                    {
                        user? 
                        <form className='my-10 md:w-1/2 mx-auto relative' onSubmit={handleReviewSubmit}>
                            <input type="text" placeholder="Your review here...." name='review' className="input border-inherit w-full pr-16" /> 
                            <button className="btn absolute top-0 right-0 rounded-l-none  text-black border-0  bg-teal-200 hover:bg-teal-400 hover:border-0">Submit</button>
                        </form> :
                        <div className="card md:w-1/3 bg-gray-100 shadow-md mx-auto my-10">
                            <div className="card-body">
                                <h2 className="card-title">Please Login to review</h2>
                               <Link to='/login'>
                               <button className="btn px-5 py-2 text-black border-teal-400 mt-10 bg-transparent hover:bg-teal-50
                                    hover:border-teal-400 dark:text-white dark:hover:bg-teal-500">Login</button>
                               </Link>
                            </div>
                       </div>
                    }
                    
                    <div className='grid grid-cols-4 gap-8 mt-20'>
                        {
                            reviews.map(review=><ReviewCard key={review._id} review={review}></ReviewCard>)
                        }
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default SingleServiceDetail;