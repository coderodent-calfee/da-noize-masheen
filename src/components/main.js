/*
 * This file is the entry to the main application
 *
 */
import React, { useState } from 'react';
import {Link} from "react-router-dom";

import { Amplify } from 'aws-amplify';
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from '../amplifyconfiguration.json';
Amplify.configure(config);

export function Main({ signOut, user }: WithAuthenticatorProps) {
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
export default withAuthenticator(Main);