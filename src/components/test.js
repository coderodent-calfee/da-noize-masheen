/**
 * This file is a signout component
 *
 */
import React, {useState, useEffect, useReducer} from 'react';
import {Link, Navigate} from 'react-router-dom';

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
                <div className="buttons-container grid-style ">
                    <div>
                        0
                    </div>
                    <div>1</div>
                    <div>
                        <button className="pushable">
                          <span className="front">Revolver
                            <img src="/icons/revolver-gun-svgrepo-com.svg" alt="revolver-gun-svgrepo-com.svg" />
                          </span>
                        </button>
                    </div>
                    <div>3</div>
                    <div>4</div>
                    <div>
                        <div>
                            <button className="pushable">
                          <span className="front">Revolver
                            <img src="/icons/revolver-gun-svgrepo-com.svg" alt="revolver-gun-svgrepo-com.svg"/>
                          </span>
                            </button>
                        </div>
                    </div>
                    <div>6</div>
                    <div>
                        <div>
                            <button className="pushable">
                          <span className="front">Revolver
                            <img src="/icons/revolver-gun-svgrepo-com.svg" alt="revolver-gun-svgrepo-com.svg"/>
                          </span>
                            </button>
                        </div>
                    </div>
                    <div>8</div>
                    <div>
                        <div>
                            <div>
                                <button className="pushable">
                          <span className="front">Revolver
                            <img src="/icons/revolver-gun-svgrepo-com.svg" alt="revolver-gun-svgrepo-com.svg"/>
                          </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>10</div>
                    <div>11</div>
                    <div>
                        <div>
                            <div>
                                <button className="pushable">
                          <span className="front">Revolver
                            <img src="/icons/revolver-gun-svgrepo-com.svg" alt="revolver-gun-svgrepo-com.svg"/>
                          </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>13</div>
                    <div>14</div>
                    <div>15</div>
                    <div>
                        <div>
                            <div>
                                <button className="pushable">
                          <span className="front">Revolver
                            <img src="/icons/revolver-gun-svgrepo-com.svg" alt="revolver-gun-svgrepo-com.svg"/>
                          </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>17</div>
                </div>
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