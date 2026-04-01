import React from "react";
import Navbar from "../components/layout/Nav";
import HomePage from "../components/Homepage";
import Footer from "../components/layout/Footer";

const HomeView: React.FC = () => {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HomePage />
      </main>
      <Footer />
    </>
  );
};

export default HomeView;
