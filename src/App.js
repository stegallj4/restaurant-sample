import React from "react";

import { HomePage } from './pages/HomePage/HomePage';
import { AboutUsPage } from './pages/AboutUsPage/AboutUsPage';
import { createHashRouter, RouterProvider } from 'react-router-dom';

function App() {
    const router = createHashRouter([
        {
            path: '/restaurant-sample',
            element: <HomePage />,
        },
        {
            path: '/aboutus',
            element: <AboutUsPage />
        }
    ])

    return (
        <RouterProvider router={router} />
    )
}


export default App;
