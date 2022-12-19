import {createBrowserRouter} from 'react-router-dom'
import Main from '../layouts/Main'
import Login from '../Pages/Authentication/Login'
import Register from '../Pages/Authentication/Register'
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
                element:<Services></Services>
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