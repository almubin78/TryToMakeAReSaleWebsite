import Main from "../components/Main/Main";
import Home from "../components/shared/Home";
import Dashboard from "../components/Dashboard/Dashboard";
import LoginContainer from "../components/Entry/Login/LoginContainer";
import RegisterContainer from "../components/Entry/Register/RegisterContainer";
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
            }
        ]
    },
    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
    }
])
export default router;