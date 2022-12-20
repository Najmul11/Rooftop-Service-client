import React from 'react';
import image from '../../../assets/Home/repair.jpg'
import Item from '../../Shared/Item/Item';

const Faq = () => {
    return (
        <div className='dark:bg-gray-800'>
            <div className='container mx-auto py-28 b'>
                <div className="card lg:card-side bg-base-100 rounded-md dark:bg-gray-200">
                    <div className='md:w-1/2 pt-8'>
                        <div className="card-body">
                            <h2 className=" card-title text-5xl font-semibold">Your Best Roofing <br /> Expert in Town</h2>
                            <h4 className='text-2xl font-medium mt-10'>Frequrntly asked questions</h4>
                            <div className='mt-3'>
                                <Item title={'Do you provide consultancy on weekend?'} description={'Yes everyday'}></Item>
                                <Item title={'Do you provide inspection service?'} description={'Yes this service is most wanted'}></Item>
                                <Item title={'Your service avaliavle on midnight?'} description={'No, daytime only'}></Item>
                                <Item title={'What you do with the broken things?'} description={'Sell and earn money from that also'}></Item>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2'>
                        <figure><img src={image} className='rounded-r-md' alt="Album"/></figure>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;