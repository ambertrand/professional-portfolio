import React from 'react';

function Footer() {
    return (
        <>
            <div className="footer col-12">
                <footer className="mb-3"><strong><span className="text">&copy; Copyright {new Date().getFullYear()}</span></strong></footer>
            </div>
        </>
    )
}

export default Footer;