/**
 * This file is a signout component
 *
 */
import React, {useState, useEffect, useReducer} from 'react';
import {Link, Navigate} from 'react-router-dom';
import SoundBoard from "./SoundBoard";
import NoiseButton from "./noiseButton";

function Test({data, setData}) {
    useEffect(() => {
        console.log("useEffect");
    }, []);

    return (
        <header className="test-container grid-style ">
            <p className="header">
                This is Da Noize Masheen!
            </p>
            <div className="icon">
                <img src="/calm-orc-dj-256.png" alt="dj"/>
            </div>
            <div className="footer">
                Test Page
            </div>
            <div className="content">
                <SoundBoard data={data} setData={setData} />
            </div>
            <div className="nav">
                <Link to="/main" className="nav-item">Main</Link>
                <Link to="/about" className="nav-item">About</Link>
                <Link to="/test" className="nav-item">Test</Link>
                <Link to="/signout" className="nav-item">Sign Out</Link>
            </div>

        </header>
    );
}

// Export out the React Component
export default Test;