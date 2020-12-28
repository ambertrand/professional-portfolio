import React from 'react';

function Footer() {
    return (
        <>
            <div className="footer col-12">
                <footer className="m-3 text-white"><strong><span className="text">&copy; Copyright {new Date().getFullYear()}</span></strong></footer>
            </div>
        </>
    )
}

export default Footer;