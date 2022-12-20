import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const AddService = () => {

    const handleAddService=(e)=>{
        e.preventDefault()
        const form=e.target
        const name=form.name.value
        const img2=form.image.value
        const price=form.price.value
        const description=form.description.value

        const service={img2, name, price, description}
        
        fetch('https://roof-doctor-server-najmul11.vercel.app/service',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(service)
        })
        .then(res=>{})
        .then(()=>{
            e.target.reset()
            toast.success('Service added successfully');
        })
    }
    return (
        <div className='dark:bg-gray-800 min-h-screen'>
            <div className="container mx-auto py-20">
                <div className="card md:w-1/2 mx-auto  shadow-sm border dark:bg-gray-300">
                    <form onSubmit={handleAddService} className="card-body">
                        <h2 className="card-title">Add service</h2>
                        <input type="text" placeholder="service name" name='name' className="input input-bordered w-full mt-2" required />
                        <input type="text" placeholder="service image url" name='image' className="input input-bordered w-full mt-2"  required/>
                        <input type="number" placeholder="price (numbers only)" name='price' className="input input-bordered w-full mt-2" required />
                        <input type="text" placeholder="description" name='description' className="input input-bordered w-full mt-2" required />
                        <div className="card-actions justify-end">
                        <button className="btn px-5 py-2 text-black dark:bg border-teal-400 mt-10 bg-transparent hover:bg-teal-50
                             hover:border-teal-400 dark:text-gray-800 dark:hover:bg-teal-500">Add service</button>
                        </div>
                    </form>
                </div>  
            </div>
            <Toaster />
        </div>
    );
}; 

export default AddService;