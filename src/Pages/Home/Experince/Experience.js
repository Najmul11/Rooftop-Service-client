import React from 'react';

const Experience = ({number, info}) => {
    return (
        <div className="card w-72 dark:bg-gray-300 text-neutral-content rounded-sm hover:bg-gray-100 shadow-md hover:shadow-xl dark:shadow-teal-500/20">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-6xl text-teal-500">{number}</h2>
                <p className='text-black font-medium'>{info}</p>    
            </div>
        </div>
    );
};

export default Experience;