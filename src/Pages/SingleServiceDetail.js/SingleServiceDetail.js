import React,{useState, useEffect, useContext} from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import toast, { Toaster } from 'react-hot-toast';
import useTitle from '../../hooks/useTitle'
import {  useLocation, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import ReviewCard from './ReviewCard';
import StartRating from './StartRating';
import StarReview from './StarReview';


const SingleServiceDetail = () => {
    const location=useLocation()
    const navigate=useNavigate()
    useTitle('service detail')
    const {user}=useContext(AuthContext)
    const param=useParams()

    let totalStarReview=0
    const [rating, setRating]=useState(null)
    const [loading, setLoading]=useState(false)
    const [service, setService]=useState({})
    const {img2,name, price, description, _id, ratings}=service
    const [reviews, setReviews]=useState([])

    useEffect(()=>{
        setLoading(true)
        fetch(`https://roof-doctor-server-najmul11.vercel.app/reviews?name=${name}`)
        .then(res=>res.json())
        .then(data=>setReviews(data))
        .finally(()=>setLoading(false))
    },[name])

    const url=`https://roof-doctor-server-najmul11.vercel.app/services/${param.id}`
    useEffect(()=>{
        setLoading(true)
        fetch(url)
        .then(res=>res.json())
        .then(data=>setService(data))
        .finally(()=>setLoading(false))
    },[url])

    //post review
    const handleReviewSubmit=e=>{
        e.preventDefault()
        const review=e.target.review.value
        const userDisplayname=user?.displayName
        const email=user?.email
        const photo=user?.photoURL

        const serviceReview={
            userReview:review, 
            userName:userDisplayname,
            userPhoto:photo,
            serviceName:name,
            userEmail:email,
            starRating:rating
        }

        fetch('https://roof-doctor-server-najmul11.vercel.app/reviews',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(serviceReview)
        })
        .then(res=>{})
        .then(()=>{
            setReviews([...reviews, serviceReview])
            e.target.reset()
            toast.success('Thanks for the feedback');   
        })
        .finally(()=>{
            // update rating  to  service
            for (const review of reviews) {
             totalStarReview=totalStarReview + review.starRating    
            }
            const serviceRating=totalStarReview / reviews.length
            const newServiceRating={serviceRating}

            fetch(`https://roof-doctor-server-najmul11.vercel.app/services/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newServiceRating)
        }).then(res=>res.json())
        .then(()=>{})
        })
    }
    //  redirect to the service detail page after login to review
    const handleRedirect=()=>{
        navigate('/login',{state:{from:location}})
    }

    // spinner
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
                            <StartRating ratings={ratings} length={reviews.length}></StartRating>
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
                        <>
                            {
                                rating ?
                                <>
                                <div className='md:w-1/2 mx-auto flex justify-center gap-2 mb-3 mt-10'>
                                    <h4 className=''>Rate the service </h4>
                                    <StarReview rating={rating} setRating={setRating}></StarReview>
                                </div>
                                <form className='mb-10 md:w-1/2 mx-auto relative' onSubmit={handleReviewSubmit}>
                                    <input type="text" placeholder="Your review here...." name='review' className="input border-inherit w-full pr-16" /> 
                                    <button className="btn absolute top-0 right-0 rounded-l-none  text-black border-0  bg-teal-200 hover:bg-teal-400 hover:border-0">Submit</button>
                                </form> 
                                </>
                                :
                                 <div className='md:w-1/2 mx-auto  flex justify-center my-10 gap-2'>
                                    <h4 className=''>Rate the service </h4>
                                    <StarReview rating={rating} setRating={setRating}></StarReview>
                                </div>
                            }
                        </>
                        :
                        <div className="card md:w-1/3 bg-gray-100 shadow-md mx-auto my-10 ">
                            <div className="card-body">
                                <h2 className="card-title">Please Login to review</h2>
                               <button onClick={handleRedirect} className="btn px-5 py-2 text-black border-teal-400 mt-10 bg-transparent hover:bg-teal-50
                                    hover:border-teal-400 dark:text-white dark:hover:bg-teal-500">Login</button>
                            </div>
                       </div>
                    }
                    {
                        reviews.length ===0 ?
                        <div className='flex items-center justify-center'>
                            <p className='text-4xl font-medium dark:text-teal-400'>This service has no review</p>
                        </div> 
                        :
                        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20'>
                            {
                                reviews.map((review,i)=><ReviewCard key={i+'asd'} review={review}></ReviewCard>)
                            }
                        </div>
                    }
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default SingleServiceDetail;