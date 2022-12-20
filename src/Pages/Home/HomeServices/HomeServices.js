import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import SingleService from './SingleService';

const HomeServices = () => {
    const [allServices, setAllServices]=useState([])
    useEffect(()=>{
        fetch('https://roof-doctor-server-najmul11.vercel.app/services')
        .then(res=>res.json())
        .then(data=>setAllServices(data))
    },[])
    return (
        <div className=' dark:bg-gray-800 py-20'>
            <div className='container mx-auto text-center'>
                <h4 className='text-2xl font-medium overline text-center text-teal-400'>Top Services</h4>
                <h2 className='text-center text-5xl font-semibold mt-3 dark:text-teal-400'>Best Rooftop Expert</h2>
                <h6 className='text-center font-medium text-xl mt-5 dark:text-white'>Providing quality rooftop services for a long time. I bet you are at the best place</h6>

                <div className='grid grid-cols-3 gap-8  mt-20'>
                    {
                        allServices.map(service=><SingleService key={service._id} service={service}></SingleService>)
                    }  
                </div> 
                 <Link to='/services'>
                    <button className="btn px-5 py-2 text-black border-teal-400 mt-10 bg-transparent hover:bg-teal-50
                 hover:border-teal-400 dark:text-white dark:hover:bg-teal-500">see all</button>
                 </Link>
            </div>
        </div>
    );
};

export default HomeServices;