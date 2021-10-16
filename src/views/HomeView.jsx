import React from 'react';
import Navbar from '../components/layout/Nav';
import HomePage from '../components/homePage/Homepage';
import About from '../components/homePage/Bio';
import Footer from '../components/layout/Footer';

const HomeView = () => {
  return (
    <div className='outerContainer'>
      <Navbar />
      <HomePage />
      <About />
      <Footer />
    </div>
  );
};

export default HomeView;
