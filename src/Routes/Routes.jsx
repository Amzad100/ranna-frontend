import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Recipes from "../Pages/Recipes/Recipes";
import Chefs from "../Pages/Chefs/Chefs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blog from "../Pages/Blogs/Blog";
import PrivateRoutes from "./PrivateRoutes";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import ErrorPage from "../Pages/About/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
        loader: ({ params }) => fetch(`https://chef-recipes-server-beta.vercel.app/chefs/${params.id}`)
    },
    {
        path: '/login',
        element: <Login></Login>,
    },
    {
        path: '/register',
        element: <Register></Register>,
    },
    {
        path: '/blog',
        element: <PrivateRoutes><Blog></Blog></PrivateRoutes>,
    },
    {
        path: '/about',
        element: <PrivateRoutes><About></About></PrivateRoutes>,
    }
])

export default router;