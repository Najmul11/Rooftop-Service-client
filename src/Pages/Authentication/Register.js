import React, { useContext } from 'react';
import {Link, useNavigate} from "react-router-dom"
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { AuthContext } from '../../Contexts/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';



const Register = () => {
    const {signInWithGoogle, signInWithFacebook, createUser,updateUserProfile}=useContext(AuthContext)
    const navigate=useNavigate()
    // create user with email/pass
    const handleSubmit=e=>{
        e.preventDefault()
        const form=e.target;
        const name=form.name.value;
        const photo=form.photo.value;
        const email=form.email.value;
        const password=form.password.value;

        if (password.length<6) {
           return  toast.error('password should be atleast 6 characters')
        }

        createUser(email, password)
        .then(result=>{
            updateProfile(name,photo)
            navigate('/')
        })
        .catch(error=>{
            console.log(error);
            toast.error('user already exist!')
        })
    }
    // update name /photo 
    const updateProfile=(name, photo)=>{
        const profile={
            displayName:name,
            photoURL:photo
        }
        updateUserProfile(profile)
        .then(res=>{})
        .then(err=>{})
    }
    // google popup signin
    const googleSignIn=()=>{
        signInWithGoogle()
        .then(result=>{
            navigate('/')
        })
        .catch(error=>{})
    }
    // facebook popup signin
    const facebookSignIn=()=>{
        signInWithFacebook()
        .then(result=>{
            navigate('/')
        })
        .catch(error=>{})
    }
    return (
        <div className='dark:bg-gray-800'>
            <div className='container mx-auto py-10'>
                <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto" >
                <div>
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Create an account</h5>
                    <div className='flex justify-center items-center mt-8'>
                        <div className="tooltip" data-tip="Continue with Google">
                            <button onClick={googleSignIn} className='btn bg-transparent btn-circle mx-2 hover:bg-transparent border-inherit'>
                                <FcGoogle className='text-4xl'></FcGoogle>
                            </button>
                        </div>
                        <div className="tooltip" data-tip="Continue with Facebook">
                            <button onClick={facebookSignIn} className='btn bg-transparent btn-circle mx-2 hover:bg-transparent border-inherit'>
                                <FaFacebook className='text-4xl fill-blue-600'></FaFacebook>
                            </button>
                        </div>
                    </div>
                    <div className='flex justify-center items-center mt-3 mb-3'>
                        <hr className='w-24' /><span className='mx-1 text-slate-600 '>Or</span> <hr className='w-24' />
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6" action="#">
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign up with email</h5>
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full name</label>
                        <input type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Ariana Grande" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo url</label>
                        <input type="text" name="photo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="url@shutup.com" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                            </div>
                            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Accept terms and conditions</label>
                        </div>
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Already have an account? <Link to='/login' className="text-blue-700 hover:underline dark:text-blue-500">Log in</Link>
                    </div>
                </form>
            </div>
            <Toaster/>
            </div>
       </div>
    );
};

export default Register;