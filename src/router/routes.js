import Main from "../components/Main/Main";
import Home from "../components/shared/Home";
import Dashboard from "../components/Dashboard/Dashboard";
import LoginContainer from "../components/Entry/Login/LoginContainer";
import RegisterContainer from "../components/Entry/Register/RegisterContainer";
import PrivateRoute from "../components/PrivateSection/PrivateRoute";
import Blogs from "../components/shared/Blogs";
import Posts from "../components/Posts/Posts";
import PosterDashBoard from "../components/Dashboard/PosterDashBoard";
import AdminDashboard from "../components/Dashboard/AdminDashboard";
import ErrorPage from "../components/shared/ErrorPage";
import AntiquePhone from "../components/AllProducts/AntiquePhone";
import SmartPhone from "../components/AllProducts/SmartPhone";
import ButtonPhone from "../components/AllProducts/ButtonPhone";
const { createBrowserRouter } = require("react-router-dom");


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
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
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/addAPost',
                element:<Posts></Posts>
            },
            {
                path:'/category/AntiquePhone',
                element:<AntiquePhone></AntiquePhone>
            },
            {
                path:'/category/SmartPhone',
                element:<SmartPhone></SmartPhone>
            },
            {
                path:'/category/ButtonPhone',
                element:<ButtonPhone></ButtonPhone>
            },
            
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/dashboard/adminDashBoard',
                element:<AdminDashboard></AdminDashboard>
                
            }
        ]
    },
    {
        path:'/dashboard/sellerDashBoard',
        element:<PrivateRoute><PosterDashBoard></PosterDashBoard></PrivateRoute>,
        
    }
])
export default router;