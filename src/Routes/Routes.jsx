import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Recipes from "../Pages/Recipes/Recipes";
import Chefs from "../Pages/Chefs/Chefs";

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
        element: <Recipes></Recipes>,
        loader: ({ params }) => fetch(`http://localhost:5000/chefs/${params.id}`)
    },
    {
        path: '/chef',
        element: <Chefs></Chefs>
    }
])

export default router;