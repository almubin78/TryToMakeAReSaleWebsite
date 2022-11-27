import Main from "../components/Main/Main";
import Home from "../components/shared/Home";
import Dashboard from "../components/Dashboard/Dashboard";
import LoginContainer from "../components/Entry/Login/LoginContainer";
import RegisterContainer from "../components/Entry/Register/RegisterContainer";
import TempData from "../components/TempData";
import AllProducts from "../components/AllProducts/AllProducts";
import PrivateRoute from "../components/PrivateSection/PrivateRoute";
import Blogs from "../components/shared/Blogs";
const { createBrowserRouter } = require("react-router-dom");


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<LoginContainer></LoginContainer>
            },
            {
                path:'/register',
                element:<RegisterContainer></RegisterContainer>
            },
            {
                path:'/tempCollection',
                element:<TempData></TempData>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/category',
                element:<AllProducts></AllProducts>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    }
])
export default router;