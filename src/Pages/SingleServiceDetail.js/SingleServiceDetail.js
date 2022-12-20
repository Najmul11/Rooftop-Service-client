import React,{useState, useEffect} from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';

const SingleServiceDetail = () => {
    const param=useParams()
    const [loading, setLoading]=useState(false)
    const [service, setService]=useState({})
    const url=`https://roof-doctor-server-najmul11.vercel.app/services/${param.id}`

    useEffect(()=>{
        setLoading(true)
        fetch(url)
        .then(res=>res.json())
        .then(data=>setService(data))
        .finally(()=>setLoading(false))
    },[url])
    const {img2,name, rating, price, description}=service
    if (loading) {
        return <div className='min-h-screen flex items-center justify-center dark:bg-gray-800'>
                <InfinitySpin width='200' color="#00baa6" />
            </div>
    }
    return (
        <div className='dark:bg-gray-800'>
            <div className='container mx-auto py-28 b'>
                <div className="card lg:card-side bg-base-100 rounded-md dark:bg-gray-200">
                    <div className='md:w-1/2 pt-8'>
                        <div className="card-body">
                            <h2 className=" card-title text-5xl font-semibold">{name}</h2>
                            <p className='mt-5'>{description}</p>
                            <div className='flex justify-between items-center mt-5'>
                                <span className='text-4xl font-medium'>${price}</span>
                                <span className='text-xl font-medium '>Rating: {rating}</span>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2'>
                        <figure><img src={img2} className='rounded-r-md w-full' alt="Album"/></figure>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleServiceDetail;