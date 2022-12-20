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
                // loader:({params})
                element:<SingleServiceDetail></SingleServiceDetail>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/reviews',
                element:<MyReviews></MyReviews>
            },
            {
                path:'/addservice',
                element:<AddService></AddService>
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