import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      <div className="footer">
        <span>&copy; Copyright {new Date().getFullYear()}</span>
      </div>
    </>
  );
}

export default Footer;
