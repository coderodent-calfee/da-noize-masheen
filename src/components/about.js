/**
 * This file is about
 *
 */
import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function About(props) {

    console.log("about props", props);

    return (
        <header className="grid-container grid-style about-page">
            <p id="pageHeader">
                This is Da Noize Masheen!
            </p>
            <div id="mainArticle">
                <img src="/calm-orc-dj.png" alt="dj"/>
            </div>
            <div id="mainNav">
                <Link to="/main" className="nav-item">Main</Link>
                <Link to="/about" className="nav-item">About</Link>
            </div>
            <div id="pageFooter">
                Footer
            </div>
            <div id="siteAds">
                About Page
            </div>
        </header>
    );
}

// Export out the React Component
export default About;