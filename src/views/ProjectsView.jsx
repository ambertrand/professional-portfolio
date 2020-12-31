import React from 'react';
import Navbar from '../components/layout/Nav';
import ProjCarousel from '../components/ProjCarousel';
import Footer from '../components/layout/Footer';

const ProjectView = () => {
    return(
        <div className="outerContainer">
            <Navbar />
            <ProjCarousel />
            <Footer />
        </div>
    )
}

export default ProjectView;