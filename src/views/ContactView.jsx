import React from 'react';
import Navbar from '../components/layout/Nav';
import Contact from '../components/Contact';
import Footer from '../components/layout/Footer';

const ContactView = () => {
    return(
        <div className="outerContainer">
            <Navbar />
            <Contact />
            <Footer />
        </div>
    )
}

export default ContactView;