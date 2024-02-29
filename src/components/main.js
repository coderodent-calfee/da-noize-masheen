/**
 * This file is about
 *
 */
import React, { useState } from 'react';
import logo from "../logo.svg";
import {Link} from "react-router-dom";

function Main(props) {
    return (
        <header className="App-header main-page">
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
                Main Page
            </div>
        </header>
    );
}

// Export out the React Component
export default Main;