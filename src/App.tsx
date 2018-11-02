import * as React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';

class App extends React.Component {
  public render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to OLPC</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
          </p>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
