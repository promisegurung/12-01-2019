import React from 'react';

import './footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-menu">
                <div className="use-town">
                <h6 id="title">Use TOWN</h6>
                <a className="link1" href="/">How it Works</a>
                <a className="link2" href="/">Pricing</a>
                <a className="link3" href="/">Our Mobile App</a>
                </div>
                <div className="contact-us">
                <h6 id="title">Contact us</h6>
                <a className="link1" href="/">Contact Support</a>
                </div>
                <div className="menu">
                <a href="/">About</a>
                <a href="/">Help</a>
                <a href="/">Developers</a>
                <a href="/">Terms</a>
                <a href="/">Privacy</a>
                </div>
                <div className="copyright">©2019 Time Out with Nepalese</div>
                <div className="country">United Kingdom</div>
            </div>
        </div>
    );
};

export default Footer;