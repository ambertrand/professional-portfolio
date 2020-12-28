import React from 'react';
import Navbar from '../components/layout/Nav';
import HomePage from '../components/Homepage';
import Footer from '../components/layout/Footer';

const HomeView = () => {
    return (
        <div className="outerContainer">
            <Navbar />
            <HomePage />
            <Footer />
        </div>
    )
}

export default HomeView;