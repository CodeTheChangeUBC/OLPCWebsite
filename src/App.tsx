import * as React from 'react';
import './App.css';

// import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">OLPC</h1>
        </header>
        <nav className="navbar">
          <ul>
            <li>
              <a>
                1 Button
              </a>
            </li>
            <li>
              <a>
                2 Button
              </a>
            </li>
            <li>
              <a>
                3 Button
              </a>
            </li>
          </ul>
        </nav>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
