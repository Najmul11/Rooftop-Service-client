import React from 'react';

const SingleServiceDetail = () => {
    return (
        <div className='dark:bg-gray-800'>
            <div className='container mx-auto py-28 b'>
                <div className="card lg:card-side bg-base-100 rounded-md dark:bg-gray-200">
                    <div className='w-1/2 pt-8'>
                        <div className="card-body">
                            <h2 className=" card-title text-5xl font-semibold">Your Best Roofing <br /> Expert in Town</h2>
                            <h4 className='text-2xl font-medium mt-10'>Frequrntly asked questions</h4>
                           
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <figure><img src={"https://placeimg.com/400/225/arch"} className='rounded-r-md' alt="Album"/></figure>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleServiceDetail;