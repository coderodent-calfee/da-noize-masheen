/**
 * This file is a signout component
 *
 */
import React, {useState, useEffect, useReducer} from 'react';
import {Link, Navigate} from 'react-router-dom';

function NoiseButton({data, setData}) {
    return (
        <div>
            <button className="pushable">
              <span className="front">Revolver
                <img src="/icons/revolver-gun-svgrepo-com.svg" alt="revolver-gun-svgrepo-com.svg" />
              </span>
            </button>
        </div>
    );
}

// Export out the React Component
export default Test;