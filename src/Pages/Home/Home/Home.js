import React from 'react';
import img1 from '../../../assets/Home/landing.png';
import './Home.css'
import { AiOutlineDown } from "react-icons/ai";
import Services from '../../Services/Services';
const Home = () => {
    return (
        <div>
            <div className='bg-green-200 relative w-full'>
                <div className='landing-img'>
                    <img src={img1} className='w-full min-h-screen' alt="" />
                </div>
                <div className='absolute w-full top-2/4 p-0 '>
                    <h1 className='text-center text-5xl font-bold text-white'>Your Rooftop Expert</h1>
                    <h1 className='text-center text-5xl font-bold text-white'>Since 2018</h1>
                    <div className='text-white text-center font-medium text-xl mt-5 mx-auto'>
                        <AiOutlineDown className='animate-bounce text-6xl text-teal-400  mx-auto'></AiOutlineDown>SCROLL
                    </div>
                </div>
            </div>
            <Services></Services>
        </div>
    );
};

export default Home;