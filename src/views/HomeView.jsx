import React from 'react';
import Navbar from '../components/layout/Nav';
import HomePage from '../components/Homepage';
import About from '../components/Bio';
// import SkillsTable from'../components/SkillsTable';
import Footer from '../components/layout/Footer';

const HomeView = () => {
    return (
        <div className="outerContainer">
            <Navbar />
            <HomePage />
            <About />
            {/* <SkillsTable /> */}
            <Footer />
        </div>
    )
}

export default HomeView;