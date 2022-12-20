import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceDetail from './ServiceDetail/ServiceDetail';
import Slider from './Slider/Slider';
import useTitle from '../../hooks/useTitle'

const Services = () => {
    useTitle('services')
    const allServices=useLoaderData()
    return (
        <div className='dark:bg-gray-800'>
            <div className='container mx-auto'>
                <Slider allServices={allServices}></Slider>
                <div className='mt-20'>
                    <h4 className='text-2xl font-medium overline text-center text-teal-400'>All Services</h4>
                    <div className='grid grid-cols-3 gap-8 py-10 '>
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