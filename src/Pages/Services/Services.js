import React,{useEffect, useState} from 'react';

const Services = () => {
    const [allServices, setAllServices]=useState()
    useEffect(()=>{
        fetch('https://roof-doctor-server-najmul11.vercel.app/services')
        .then(res=>res.json())
        .then(data=>setAllServices(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Services;