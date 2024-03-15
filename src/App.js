import React from "react";

import { HomePage } from './pages/HomePage/HomePage';
import { AboutUsPage } from './pages/AboutUsPage/AboutUsPage';
import { ContactPage } from './pages/ContactPage/ContactPage';
import { OurTeamPage} from './pages/OurTeamPage/OurTeamPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
    const router = createBrowserRouter([
        {
            path: '/restaurant-sample',
            element: <HomePage />,
        },
        {
            path: '/aboutus',
            element: <AboutUsPage />
        },
        {
            path: '/contact',
            element: <ContactPage />
        },
        {
            path: '/our-team',
            element: <OurTeamPage />
        },
        {
            path: '/our-team/:bio',
            element: <OurTeamPage />
        },
    ])

    return (
        <RouterProvider router={router} />
    )
}


export default App;
