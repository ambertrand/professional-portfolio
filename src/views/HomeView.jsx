import React from 'react';
import Navbar from '../components/layout/Nav';
import HomePage from '../components/homePage/Homepage';
import About from '../components/homePage/Bio';
// import Footer from '../components/layout/Footer';

const HomeView = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      <About />
      {/* <Footer /> */}
    </>
  );
};

export default HomeView;
