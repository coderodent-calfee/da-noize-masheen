/**
 * This file is a signout component
 *
 */
import React, {useState, useEffect, useReducer} from 'react';
import {Link, Navigate} from 'react-router-dom';

function Signout({data, setData }) {
    
    // this is a local copy of the state; not the actual state
    const [state, dispatch] = useReducer(reducer, data);
    useEffect(() => {
        console.log("dispatch");
        dispatch({type: 'signOut'});
    }, []);

    console.log("data", data);

    function reducer(state, action) {
        if (action.type === 'signOut') {
            if (state.signOut && !state.signedOut) {
                console.log("reducer: signOut");
                state.signOut();
                setData("signedOut", false); // this updates the global state
            }
            return {
                ...state,
                signedOut: true
            };// and this only updates the local copy of the state
        }
        throw Error('Unknown action.');
    }

    if (state.signedOut) {
        return <Navigate to="/"/>;
    }

    return (
        <header className="grid-container grid-style ">
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
                Signout Page
            </div>
        </header>);
}

// Export out the React Component
export default Signout;