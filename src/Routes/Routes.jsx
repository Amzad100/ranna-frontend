import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Recipes from "../Pages/Recipes/Recipes";
import Chefs from "../Pages/Chefs/Chefs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blog from "../Pages/Blogs/Blog";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
    {
        path: '/chef/:id',
        element: <PrivateRoutes><Recipes></Recipes></PrivateRoutes>,
        loader: ({ params }) => fetch(`http://localhost:5000/chefs/${params.id}`)
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/blog',
        element: <Blog></Blog>
    }
])

export default router;