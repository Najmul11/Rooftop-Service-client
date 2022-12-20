import React, { useContext } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const PrivateRoute = ({children}) => {
   const {user,loading}=useContext(AuthContext)
   const location=useLocation()

   if (loading) {
    return <div className='min-h-screen flex items-center justify-center dark:bg-gray-800'>
            <InfinitySpin width='200' color="#00baa6" />
        </div>
    }

   if (user) {
    return children
   }
   return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
};

export default PrivateRoute;