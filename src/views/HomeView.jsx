import React from 'react';
import Navbar from '../components/Nav';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomeView = () => {
    return (
        <div className="outerContainer">
            <Header />
            <Navbar />
            <Footer />
        </div>
    )
}

export default HomeView;