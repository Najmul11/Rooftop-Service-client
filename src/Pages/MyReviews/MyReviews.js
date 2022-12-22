import React,{useContext, useState, useEffect} from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { AuthContext } from '../../Contexts/AuthProvider';
import MyReviewCard from './MyReviewCard';
import toast, { Toaster } from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';



const MyReviews = () => {
    useTitle('reviews')
    const {user}=useContext(AuthContext)
    const [loading, setLoading]=useState(false)
    const [reviews, setReviews]=useState([])
    useEffect(()=>{
        setLoading(true)
        fetch(`https://roof-doctor-server-najmul11.vercel.app/reviews?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setReviews(data))
        .finally(()=>setLoading(false))
    },[user?.email])

    // delete review function
    const handleDelete=(id)=>{
        fetch(`https://roof-doctor-server-najmul11.vercel.app/reviews/${id}`,{
            method:'DELETE',
        })
        .then(res=>{})
        .then(data=>{
            const filteredReviews=reviews.filter(review=>review._id !==id)
            setReviews(filteredReviews)
            toast.success('Review deleted successfully');
        })
    }

    if (loading) {
        return <div className='min-h-screen flex items-center justify-center dark:bg-gray-800'>
                <InfinitySpin width='200' color="#00baa6" />
            </div>
    }

    return (
        <div>
            {
                reviews.length ===0 ? 
                <div className=' dark:bg-gray-800'>
                    <div className='flex items-center justify-center min-h-screen '>
                        <p className='text-4xl font-medium dark:text-teal-400'>No reviews were<br /> added ------</p>
                    </div> 
                </div>
                :
                <div className='h-screen dark:bg-gray-800 pt-12 md:pt-32'>
                    <div className="container mx-auto">
                        <div className='grid md:grid-cols-2 gap-8'>
                            {
                                reviews.map(review=><MyReviewCard key={review._id} review={review} handleDelete={handleDelete}></MyReviewCard>)
                            }
                        </div>
                    </div>
                </div>
            }
            <Toaster />
        </div>
    );
};

export default MyReviews;