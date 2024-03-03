import './App.css';
import React, {useState} from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';
import About from './components/about';
import Main from './components/main';
import SignOut from './components/signout';
import Test from './components/test';

/* calm-orc-dj.png
Copilot: a color drawing of an orc disk jockey
Content credentials: Generated with AI ∙ February 27, 2024 at 1:40 AM */

function App() {
    const [stateData, setStateData] = useState({});

    function handleStateData(name, value, something, something_else) {
        let data = this.stateData;
        data[name] = value;
        this.setStateData(data);
    }

    return (
        <HashRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element=<About data={stateData}/> exact />
                    <Route path="/about" element=<About data={stateData}/> />
                    <Route path="/main" element=<Main data={stateData} setData={handleStateData.bind({stateData, setStateData})} /> />
                    <Route path="/test" element=<Test data={stateData} setData={handleStateData.bind({stateData, setStateData})} /> />
                    <Route path="/signout" element=<SignOut data={stateData} setData={handleStateData.bind({stateData, setStateData})} /> />
                </Routes>
            </div>
        </HashRouter>
    );
}

export default App;
