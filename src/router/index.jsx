import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Artistas } from "../pages/Artistas";
import { Contacto } from "../pages/Contacto";
import { NotFound } from "../pages/NotFound";
import { Public } from "../layout/Public";





export const router = createBrowserRouter([

    {
        path: '/',
        element: <Public />,
        errorElement: <NotFound />,

        children : [

            {
                path: '/',
                element: <Home />,
            },
        
            {
                path: '/artistas',
                element : <Artistas />,
            },
        
            {
                path: '/contacto',
                element: <Contacto />,
            },

        ] 
    },

]) 