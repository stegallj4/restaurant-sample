import React from 'react'

import { About, History, Testimony } from '../../container/index';
import { Navbar, Welcome } from '../../components';
import { Chef, Gallery, Footer } from '../../container/index';
import '../../App.css';

const AboutUsPage = () => (
    <div>
      <Navbar />
      <Welcome page="About" />
      <History />
      <About />
      <Chef />
      <Testimony />
      <Gallery />
      <Footer />
    </div>
);

export { AboutUsPage };