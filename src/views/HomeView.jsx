import React from 'react';
import Navbar from '../components/layout/Nav';
import HomePage from '../components/homePage/Homepage';
import Footer from '../components/layout/Footer';

const HomeView = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      <Footer />
    </>
  );
};

export default HomeView;
