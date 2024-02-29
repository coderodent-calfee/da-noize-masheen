import './App.css';
import {HashRouter, Route, Routes} from 'react-router-dom';
import About from './components/about';
import Main from './components/main';

/* calm-orc-dj.png
Copilot: a color drawing of an orc disk jockey
Content credentials: Generated with AI ∙ February 27, 2024 at 1:40 AM */

function App() {
    return (
        <HashRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element=<About/> exact />
                    <Route path="/about" element=<About/> />
                    <Route path="/main" element=<Main/> />
                </Routes>
            </div>
        </HashRouter>
    );
}

export default App;
