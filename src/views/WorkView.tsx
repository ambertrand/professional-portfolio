import React from "react";
import Navbar from "../components/layout/Nav";
import ProjCarousel from "../components/Projects";
import Footer from "../components/layout/Footer";

const WorkView: React.FC = () => {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <ProjCarousel />
      </main>
      <Footer />
    </>
  );
};

export default WorkView;
