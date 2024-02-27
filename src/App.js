import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <p>
                This is Da Noize Masheen!
            </p>
            <img src="/calm-orc-dj.png" className="orc-dj" alt="dj"/>
            <img src={logo} className="App-logo" alt="logo"/>
        </header>
    </div>
  );
}

export default App;
