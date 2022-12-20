import React from 'react';
import img1 from '../../../assets/Home/landing.png';
import './Home.css'
import { AiOutlineDown } from "react-icons/ai";
import HomeServices from '../HomeServices/HomeServices';
import Experience from '../Experince/Experience';
import Faq from '../Faq/Faq';
const Home = () => {
    return (
        <div>
            <div className=' relative w-full'>
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
            <HomeServices></HomeServices>
            <div className='dark:bg-gray-800 py-20' id='experience'>
                <div className='container mx-auto  grid grid-cols-4 justify-items-center'>
                    <Experience number={4} info={'YEARS OF EXPERIENCE'}></Experience>
                    <Experience number={6} info={'QUALITY SERVICES'}></Experience>
                    <Experience number={'350+'} info={'COMPLETED PROJECTS'}></Experience>
                    <Experience number={'80+'} info={'ELITE CUSTOMERS'}></Experience>
                </div>
            </div>
            <Faq></Faq>
        </div>
    );
};

export default Home;