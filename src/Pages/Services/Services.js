import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Slider from './Slider/Slider';

const Services = () => {
    const allServices=useLoaderData()
    return (
        <div className='dark:bg-gray-800'>
            <div className='container mx-auto'>
                <Slider allServices={allServices}></Slider>
            </div>
        </div>
    );
};

export default Services;