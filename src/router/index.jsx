import { createBrowserRouter } from "react-router-dom"
import Layout from "../layout/Layout"
import Home from "../pages/Home"
import Guerreroz from "../pages/Guerreroz"
import GuerrerozDetail from "../pages/GuerrerozDetail"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/guerreroz",
                element: <Guerreroz />
            },
            {
                path: "/guerreroz/:id",
                element: <GuerrerozDetail />
            }
        ]
    }
])