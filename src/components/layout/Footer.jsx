import React from 'react';

function Footer() {
  return (
    <footer className='footer'>
      <div className='col-md-6 col-sm-12'>
        <strong>
          <span className='text'>
            &copy; Copyright {new Date().getFullYear()}
          </span>
        </strong>
      </div>
    </footer>
  );
}

export default Footer;
