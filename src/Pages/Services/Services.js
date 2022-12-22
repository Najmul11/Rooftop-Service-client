import React,{useState, useEffect} from 'react';
import ServiceDetail from './ServiceDetail/ServiceDetail';
import Slider from './Slider/Slider';
import useTitle from '../../hooks/useTitle'
import { InfinitySpin } from 'react-loader-spinner';

const Services = () => {
    useTitle('services')
    const [loading, setLoading]=useState(false)
    const [allServices, setAllServices]=useState([])
    useEffect(()=>{
        setLoading(true)
        fetch('https://roof-doctor-server-najmul11.vercel.app/allservices')
        .then(res=>res.json())
        .then(data=>setAllServices(data))
        .finally(()=>setLoading(false))
    },[])

    if (loading) {
        return <div className='min-h-screen flex items-center justify-center dark:bg-gray-800'>
                <InfinitySpin width='200' color="#00baa6" />
            </div>
    }
    return (
        <div className='dark:bg-gray-800'>
            <div className='container mx-auto'>
                <Slider allServices={allServices}></Slider>
                <div className='mt-20'>
                    <h4 className='text-2xl font-medium overline text-center text-teal-400'>All Services</h4>
                    <div className='grid md:grid-cols-3 gap-8 py-10 '>
                        {
                        allServices.map(service=><ServiceDetail key={service.price} service={service}></ServiceDetail>)
                        }  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;