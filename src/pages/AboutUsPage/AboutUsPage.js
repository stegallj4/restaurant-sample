import React from 'react'

import { About, History, Testimony, Chef, Gallery, Footer } from '../../container/index';
import { Navbar, Welcome } from '../../components';
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