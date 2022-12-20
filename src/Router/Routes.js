import {createBrowserRouter} from 'react-router-dom'
import Main from '../layouts/Main'
import AddService from '../Pages/AddService/AddService'
import Login from '../Pages/Authentication/Login'
import Register from '../Pages/Authentication/Register'
import Blog from '../Pages/Blog/Blog'
import Home from '../Pages/Home/Home/Home'
import MyReviews from '../Pages/MyReviews/MyReviews'
import Services from '../Pages/Services/Services'
import SingleServiceDetail from '../Pages/SingleServiceDetail.js/SingleServiceDetail'
import PrivateRoute from './PrivateRoute'


export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/services',
                element:<Services></Services>
            },
            {
                path:'/services/:id',
                element:<SingleServiceDetail></SingleServiceDetail>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/reviews',
                element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path:'/addservice',
                element:<PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
        ]
    }
])