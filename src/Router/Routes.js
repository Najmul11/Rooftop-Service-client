import {createBrowserRouter} from 'react-router-dom'
import Main from '../layouts/Main'
import Login from '../Pages/Authentication/Login'
import Register from '../Pages/Authentication/Register'
import Blog from '../Pages/Blog/Blog'
import Home from '../Pages/Home/Home/Home'
import Services from '../Pages/Services/Services'


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
                loader:()=>fetch('https://roof-doctor-server-najmul11.vercel.app/allservices'),
                element:<Services></Services>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
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