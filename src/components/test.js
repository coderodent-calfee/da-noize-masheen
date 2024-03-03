/**
 * This file is a signout component
 *
 */
import React, {useState, useEffect, useReducer} from 'react';
import {Link, Navigate} from 'react-router-dom';

function Test({data, setData }) {
    useEffect(() => {
        console.log("useEffect");
    }, []);

    return (
        <header className="test-container grid-style ">
            <p className="test-header">
                This is Da Noize Masheen!
            </p>
            <div className="test-icon">
            </div>
            <div className="test-footer">
                Footer
            </div>
            <div className="test-main">
                buttunz go here
            </div>
            <div id="mainNav">
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