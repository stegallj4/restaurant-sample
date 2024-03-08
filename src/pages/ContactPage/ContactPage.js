import React from 'react'

import { Welcome, Navbar } from '../../components';
import { ContactForm, Footer } from '../../container';
import '../../App.css';

const ContactPage = () => (
  <div>
    <Navbar />
    <Welcome page="Contact" />
    <ContactForm />
    <Footer />
  </div>
)

export { ContactPage };
