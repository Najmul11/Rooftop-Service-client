import React, {useContext} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom"
import { FcGoogle,  } from "react-icons/fc";
import {AiFillFacebook} from "react-icons/ai";
import { AuthContext } from '../../Contexts/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const {signInWithGoogle, signInWithFacebook, signIn}=useContext(AuthContext)
    const location=useLocation()
    const navigate=useNavigate()
    const from=location.state?.from?.pathname || '/'
    // signin with email/password
    const handleSubmit=e=>{
        e.preventDefault()
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;

        signIn(email, password)
        .then(result=>{
            navigate(from, {replace:true})
        })
        .catch(error=>{
            toast.error('Email or Password invalid')
        })
    }
    // google popup signin
    const googleSignIn=()=>{
        signInWithGoogle()
        .then(result=>{
            navigate(from, {replace:true})
        })
        .catch(error=>{})
    }
    // facebook popup signin
    const facebookSignIn=()=>{
        signInWithFacebook()
        .then(result=>{
            navigate(from, {replace:true})
        })
        .catch(error=>{})
    }
    return (
        <div className='dark:bg-gray-800'>
            <div className='container mx-auto py-10'>
                <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto" >
                    <form onSubmit={handleSubmit} className="space-y-6" action="#">
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in </h5>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                            <input type="password" name="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                        </div>
                        <div className="flex items-start justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
                                </div>
                                <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                            </div>
                            <Link className='font-medium text-sm text-blue-700 hover:underline' to='/recover_password'>Forgot password?</Link>
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Continue</button>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            New here? <Link to='/register' className="text-blue-700 hover:underline dark:text-blue-500">Create an account</Link>
                        </div>
                    </form>
                    <div>
                        <div className='flex justify-center items-center mt-3'>
                            <hr className='w-24' /><span className='mx-1 text-slate-600 '>Or</span> <hr className='w-24' />
                        </div>
                        <div className='mt-4'>
                            <button onClick={facebookSignIn} type="submit" className="btn w-full  bg-transparent hover:bg-gray-200 text-blue-700 dark:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><AiFillFacebook className='text-2xl mr-2'/> Continue with Facebook</button>

                            <button onClick={googleSignIn} type="submit" className="btn  w-full mt-3 bg-transparent hover:bg-gray-200  text-black  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><FcGoogle className='text-2xl mr-2'/> Continue with Google</button>
                        </div>
                        <Toaster/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;