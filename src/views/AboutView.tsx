import React from "react";
import Navbar from "../components/layout/Nav";
import Bio from "../components/Bio";
import Footer from "../components/layout/Footer";

const AboutView: React.FC = () => {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Bio />
      </main>
      <Footer />
    </>
  );
};

export default AboutView;
