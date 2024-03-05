/*
 * This file is the entry to the main application
 *
 */
import React, {useState} from 'react';
import {Link} from "react-router-dom";

import {Amplify} from 'aws-amplify';
import type {WithAuthenticatorProps} from '@aws-amplify/ui-react';
import {withAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from '../amplifyconfiguration.json';

Amplify.configure(config);

export function Main({signOut, user, data, setData }: WithAuthenticatorProps) {
    console.log("main props", data);

    setData("signOut", signOut);
    setData("signedOut", false);
    return (
        <header className="grid-container grid-style main-page">
            <div className="icon">
                <img src="/calm-orc-dj-256.png" alt="dj"/>
            </div>
            <p className="header">
                This is Da Noize Masheen! <br/> <span>{user.username}</span>
            </p>
            <div className="content">
                <img src="/calm-orc-dj.png" alt="dj"/>
            </div>
            <div className="nav">
                <Link to="/main" className="nav-item">Main</Link>
                <Link to="/about" className="nav-item">About</Link>
                <Link to="/test" className="nav-item">Test</Link>
                <Link to="/signout" className="nav-item">Sign Out</Link>
            </div>
            <div className="footer">
                Main Page
            </div>
        </header>
    );
}

// Export out the React Component
export default withAuthenticator(Main);