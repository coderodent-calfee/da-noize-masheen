﻿/**
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
            <p className="test-header">
                This is Da Noize Masheen!
            </p>
            <div className="test-icon">
                <img src="/calm-orc-dj-256.png" alt="dj"/>
            </div>
            <div className="test-footer">
                Footer
            </div>
            <div className="test-main">
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
                    <div>9</div>
                    <div>10</div>
                    <div>11</div>
                    <div>12</div>
                    <div>13</div>
                    <div>14</div>
                    <div>15</div>
                    <div>16</div>
                    <div>17</div>
                    <div>18</div>
                    <div>19</div>
                    <div>20</div>
                    <div>21</div>
                    <div>22</div>
                    <div>23</div>
                    <div>24</div>
                    <div>25</div>
                    <div>26</div>
                    <div>27</div>
                    <div>28</div>
                    <div>29</div>
                    <div>30</div>
                    <div>31</div>
                    <div>32</div>
                    <div>33</div>
                    <div>34</div>
                    <div>35</div>
                    <div>36</div>
                    <div>37</div>
                    <div>38</div>
                    <div>39</div>
                    <div>40</div>
                    <div>41</div>
                    <div>42</div>
                    <div>43</div>
                    <div>44</div>
                    <div>45</div>
                    <div>46</div>
                    <div>47</div>
                    <div>48</div>
                    <div>49</div>
                    <div>50</div>
                    <div>51</div>
                    <div>52</div>
                    <div>53</div>
                    <div>54</div>
                    <div>55</div>
                    <div>56</div>
                    <div>57</div>
                    <div>58</div>
                    <div>59</div>
                    <div>60</div>
                    <div>61</div>
                    <div>62</div>
                    <div>63</div>
                </div>
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