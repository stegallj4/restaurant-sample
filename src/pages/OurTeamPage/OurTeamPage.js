import React from 'react'

import { Navbar, Welcome } from '../../components';
import { Footer, Laurels, ChefGrid } from '../../container';
import '../../App.css';

const OurTeamPage = () => (
    <div>
        <Navbar />
        <Welcome page="Our Team" />
        <ChefGrid />
        <Laurels />
        <Footer />
    </div>
);

export { OurTeamPage };
